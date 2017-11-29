const request = require('supertest');
const chai = require('chai');

const todosSchema = require('./todosSchema.json');

chai.use(require('chai-json-schema'));
const url = 'http://localhost:8080';

describe('invoke /todos resource', () => {
    it('should return a payload and a successful status code', done => {
      request(url)
        .get(`/todos`)
        .expect(200)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
  
          chai.expect(res.body).to.not.be.undefined;
          chai.expect(res.body).to.be.jsonSchema(todosSchema);
          chai.expect(res.header['content-type']).to.equal('application/json; charset=utf-8');
          return done();
        });
    });
  });