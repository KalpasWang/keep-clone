import request from 'supertest';
import app from '../src/app';

describe('user signup', () => {
  it('如果是 valid request, 回傳 201 created', async () => {
    const response = await request(app).post('/api/users').send({
      username: 'user1',
      email: 'user1@gmail.com',
      password: '123abc',
    });
    expect(response.status).toBe(201);
  });
});
