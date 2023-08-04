import request from 'supertest';
import app from '../src/app';
import userModel from '../src/models/userModel';
import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';

describe('User sign up', () => {
  beforeAll(async () => {
    const server = await MongoMemoryServer.create();
    mongoose.connect(server.getUri());
  });

  afterAll(async () => {
    await mongoose.disconnect();
    await mongoose.connection.close();
  });

  beforeEach(async () => {
    await userModel.collection.drop();
  });

  describe('如果是 valid request', () => {
    it('回傳 201 created', async () => {
      const response = await request(app).post('/api/users').send({
        username: 'user1',
        email: 'user1@gmail.com',
        password: '123abc',
      });
      expect(response.status).toBe(201);
    });

    it('回傳 success message', async () => {
      const response = await request(app).post('/api/users').send({
        username: 'user1',
        email: 'user1@gmail.com',
        password: '123abc',
      });
      expect(response.body.message).toBe('user created');
    });

    it('儲存 user 到 db', async () => {
      await request(app).post('/api/users').send({
        username: 'user1',
        email: 'user1@gmail.com',
        password: '123abc',
      });
      const allUsers = await userModel.find();
      expect(allUsers.length).toBe(1);
    });
  });
});
