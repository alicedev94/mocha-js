import request from 'supertest';
import { expect } from 'chai';
import app from '../app/app.js';

describe('GET /', function() { // Cambié a función normal para poder usar `this.timeout`
  this.timeout(5000); 
  
  it('should return "ALL fine[MOCHAJS]"', async () => {
    const res = await request(app).get('/');
    expect(res.status).to.equal(200);
    expect(res.text).to.equal('All fine[MOCHAJS]');
  });

  it('should return profile employees', async () => {
    const res = await request(app).get('/profile');
    expect(res.status).to.equal(200); 
    expect(res.body).to.deep.equal({ name: 'alice', age: 22, profile: "dev" }); 
  });
});
