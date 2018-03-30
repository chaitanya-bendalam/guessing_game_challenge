'use strict';

const should = require('chai').should();
const expect = require('chai').expect;
const proxyquire = require('proxyquire').noPreserveCache();


const Hoek = require('hoek');

describe('Guessing Program handler tests', () => {
    describe('internals(route, options)', () => {

        it('should return appropriate handler specified by options.method', done => {

            const handler = proxyquire(`${process.cwd()}/handlers/index`, {});
            const method = handler({}, { method:'printGuessItOutput' });
            expect(method).to.exist;
            expect(method).to.be.an('function');
            done();
        });

        it('should return a function for handler even if none matches options.method will throw undefined', done => {

            const handler = proxyquire(`${process.cwd()}/handlers/index`, {});
            const method = handler({}, { method:'methodnotexist' });
            expect(method).to.exist;

            try {
                method({},{});
            } catch (err){
                expect(err).to.exist;
                done();
            }
        });
    });
    describe('internals.printGuessItOutput', () => {

        it('should return a reply with success data with inputs', (done) => {
            const handler = proxyquire(`${process.cwd()}/handlers/index`, {});
            const fakes = {
                payload: {},
                params: {
                  'id' : 2
                }
            };
            handler.printGuessItOutput(fakes, (resp) => {
                expect(resp).to.exist;
                expect(resp).to.be.an('string');
                return done();
            });
        });
    });
    describe('internals.printGuessItOutput', () => {

        it('should return a reply with reload message', (done) => {
            const handler = proxyquire(`${process.cwd()}/handlers/index`, {});
            const fakes = {
                payload: {},
                params: {}
            };
            handler.reloadGame(fakes, (resp) => {
                expect(resp).to.exist;
                expect(resp).to.be.an('string');
                return done();
            });
        });
    });
});
