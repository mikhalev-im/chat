'use strict';

const assert = require('chai').assert;
const http = require('http');
const config = require('../app/config/config');


describe('app.js', function() {

  it('should response on request', function() {
    http.get({
      hostname: config.server.hostname,
      port: config.server.port,
      path: '/'
    }, function(res) {
      assert.equal(res.statuCode, 200);
    });
  });

});