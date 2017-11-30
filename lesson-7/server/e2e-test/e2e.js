const request = require('supertest');
const chai = require('chai');

const todosSchema = require('./todosSchema.json');

chai.use(require('chai-json-schema'));
const url = 'http://localhost:8080';

describe('invoke /todos resource', () => {
    it('should return a payload and a successful status code', () => {
      request(url)
        .get(`/todos`)
        .expect(200)
        .expect('content-type', 'application/json; charset=utf-8')
        .then((res) => {
          chai.expect(res.body).to.not.be.undefined;
          chai.expect(res.body).to.be.jsonSchema(todosSchema);
        });
    });
  });