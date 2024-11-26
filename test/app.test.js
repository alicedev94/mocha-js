import request from 'supertest';
import { expect } from 'chai';
import app from '../app/app.js';

describe('GET /', () => {
  it('should return "ALL fine[MOCHAJS]"', async () => {
    const res = await request(app).get('/');
    expect(res.status).to.equal(200);
    expect(res.text).to.equal('All fine[MOCHAJS]');
  });
});
