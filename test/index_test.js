'use strict';

const Hapi = require('hapi');
const nodePackage = require('../package');
const run = require('../lib/');
const Config = require('../lib/config');

var should = require('chai').should();
var expect = require('chai').expect;
const Inert = require('inert');
const Vision = require('vision');
describe(nodePackage.name + ' main service application.', () => {

  let server;

  beforeEach((done) => {

    const services = [Inert, Vision];
    server = new Hapi.Server();
    server.connection({
      host: Config.ip,
      port: Config.port
    });
    server.register(services,
      (err) => {
        if (err) {
          return done(err);
        }
        return done();
      });
  });

  it('it returns the default message.', (done) => {
    server.inject({
      method: 'GET',
      url: '/'
    }, (res) => {
      expect(res.result.statusCode).to.equal(404);
      return done();
    });
  });
});
