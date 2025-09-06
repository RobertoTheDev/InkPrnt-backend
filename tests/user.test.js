const request = require('supertest');
const app = require('../src/app');
const User = require('../src/models/User');

describe('User API', () => {
  it('deve registrar um usuário', async () => {
    const res = await request(app)
      .post('/api/users/register')
      .send({ name: 'Roberto', email: 'test@test.com', password: '123456' });

    expect(res.statusCode).toBe(201);
    expect(res.body.user).toHaveProperty('_id');
  });

  it('deve logar um usuário e retornar token', async () => {
    await User.create({ name: 'Roberto', email: 'login@test.com', password: '123456' });

    const res = await request(app)
      .post('/api/users/login')
      .send({ email: 'login@test.com', password: '123456' });

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('token');
  });
});
