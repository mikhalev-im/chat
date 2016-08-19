'use strict;'

// router on sockets

const assert = require('chai').assert;
const sinon = require('sinon');
const io = require('socket.io-client');
const socket-router = require('../../app/socket/socket');

const server = {
  name: 'localhost'
}

describe('socket router', function() {

  it('should route to different controllers on events', function() {

    it('should call login controller on login event', function() {

    });

    it('should call register controller on register event', function() {

    });

    it('should call roomJoin controller on roomJoin event', function() {

    });

    it('should call message controller on message event', function() {

    });

  });

});