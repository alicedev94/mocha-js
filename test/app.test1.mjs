// import request from 'supertest';
// import { expect } from 'chai';
// import app from '../app/app.js';

// describe('Enpoint API', function() { 
//   this.timeout(5000); 

//   it('should return "ALL fine[MOCHAJS]"', async () => {
//     const start = Date.now();
//     const res = await request(app).get('/');
//     const duration = Date.now() - start;
//     console.log(`GET / took ${duration}ms`);
//     expect(res.status).to.equal(200);
//     expect(res.text).to.equal('All fine[MOCHAJS]');
//   });

//   it('should return profile employees', async () => {
//     const start = Date.now();
//     const res = await request(app).get('/profile');
//     const duration = Date.now() - start;
//     console.log(`GET /profile took ${duration}ms`);
//     expect(res.status).to.equal(200); 
//     expect(res.body).to.deep.equal({ name: 'alice', age: 22, profile: "dev" }); 
//   });
// });
