const sinon = require('sinon');
const sinonStubPromise = require('sinon-stub-promise');
const chai = require('chai');
const spies = require('chai-spies-next');

const requestHandler = require('../requestHandler');

chai.use(spies);
sinonStubPromise(sinon);

describe('requestHandler tests', () => {
    it('handles successful results', (done) => {
        const reqMock = {};
        const resMock = {};
        resMock.json = chai.spy();
        const nextSpy = chai.spy();
        const testResult = {
            'result': 'ok',
            'status': '200'
        }
        const actionStub = sinon.stub().returnsPromise().resolves(testResult);

        requestHandler.handleRequest(actionStub, reqMock, resMock, nextSpy).then(() => {
            chai.expect(resMock.json).to.have.been.called.with(testResult);
            chai.expect(nextSpy).to.not.have.been.called();

            done();
        }).catch(error => {
            done(error);
        })
    });

    it('handles error results', (done) => {
        const reqMock = {};
        const resMock = {};
        resMock.json = chai.spy();
        const nextSpy = chai.spy();
        const testError = 'testerror';
        const actionStub = sinon.stub().returnsPromise().rejects(testError);

        requestHandler.handleRequest(actionStub, reqMock, resMock, nextSpy).then(() => {
            chai.expect(resMock.json).to.not.have.been.called();
            chai.expect(nextSpy).to.have.been.called.with(testError);

            done();
        }).catch(error => {
            done(error);
        })
    })
});