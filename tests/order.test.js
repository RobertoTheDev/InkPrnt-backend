const request = require('supertest');
const app = require('../src/app');
const User = require('../src/models/User');
const jwt = require('jsonwebtoken');

let token;

beforeAll(async () => {
  const user = await User.create({ name: 'Cliente', email: 'cliente@test.com', password: '123456' });
  token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
});

describe('Order API', () => {
  it('deve criar um pedido', async () => {
    const res = await request(app)
      .post('/api/orders')
      .set('Authorization', `Bearer ${token}`)
      .send({ items: ['item1', 'item2'], totalPrice: 150 });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('_id');
  });
});
