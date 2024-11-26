import request from 'supertest';
import { expect } from 'chai';
import app from '../app/app.js';

describe('GET /', () => {
  it('should return "All fine[MOCHAJS]"', (done) => {
    request(app)
      .get('/')
      .end((err, res) => {
        if (err) return done(err);
        expect(res.status).to.equal(200);
        expect(res.text).to.equal('All fine[MOCHAJS]');
        done();
      });
  });
});
