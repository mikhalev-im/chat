'use strict;'

// router on sockets

const assert = require('chai').assert;
const sinon = require('sinon');
const io = require('socket.io-client');
const socketRouter = require('../../app/socket/socket');

const server = {
  name: 'localhost',
  protocol: 'http://',
  port: 3000,
  url: 'http://localhost:3000'
}

describe('socket router', function() {

  describe('it should route to different controllers on events', function() {

    let client1, test

    before(function(done) {
      test = sinon.spy(socketRouter, 'login');
      client1 = io.connect(server.url);
      
      client1.on('connect', function() {
        done();
      });
    });

    after(function(done) {
      client1.disconnect();
      let interval = setInterval(function() {
        if (!client1.connected) {
          clearInterval(interval);
          done();
        }
      }, 100);
    })

    it('should call login controller on login event', sinon.test(function() {
      client1.emit('login');
      sinon.assert.calledOnce(test);
    }));

    it('should call register controller on register event', function() {

    });

    it('should call roomJoin controller on roomJoin event', function() {

    });

    it('should call message controller on message event', function() {

    });

  });

});