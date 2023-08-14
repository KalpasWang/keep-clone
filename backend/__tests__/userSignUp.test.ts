import request from 'supertest';
import app from '../app';
import userModel from '../models/userModel';
import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';

interface User {
  username: string | null;
  email: string | null;
  password: string | null;
}

const defaultUser: User = {
  username: 'user1',
  email: 'user1@gmail.com',
  password: '123abc',
};

function postUser(user = defaultUser) {
  return request(app).post('/api/users').send(user);
}

describe('User sign up', () => {
  beforeAll(async () => {
    const server = await MongoMemoryServer.create();
    await mongoose.connect(server.getUri());
  });

  afterAll(async () => {
    await mongoose.disconnect();
    await mongoose.connection.close();
  });

  beforeEach(async () => {
    const n = await userModel.countDocuments();
    if (n > 0) await userModel.collection.drop();
  });

  describe('如果是 valid request', () => {
    it('回傳 201 created', async () => {
      const response = await postUser();
      expect(response.status).toBe(201);
    });

    it('回傳 success message', async () => {
      const response = await postUser();
      expect(response.body.message).toBe('user created');
    });

    it('儲存 user 到 db', async () => {
      await postUser();
      const allUsers = await userModel.find();
      expect(allUsers.length).toBe(1);
    });

    it('儲存 hashed password 到 DB', async () => {
      await postUser();
      const user = await userModel.findOne({ email: 'user1@gmail.com' });
      expect(user).not.toBeNull();
      expect(user?.password).not.toBe('123abc');
    });
  });

  describe('如果是 invalid request', () => {
    describe('如果 username 欄位是 invalid', () => {
      it('回傳 status 400', async () => {
        const response = await postUser({
          username: null,
          email: 'user1@mail.com',
          password: 'P4ssword',
        });
        expect(response.status).toBe(400);
      });
    });
    // it.each`
    //   field         | value   | expectedMessage
    //   ${'username'} | ${null} | ${'username is required'}
    // `('如果 $field 為 $value，回傳 $expectedMessage', () => {});
  });
});
