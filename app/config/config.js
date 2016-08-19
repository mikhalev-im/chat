'use strict';

module.exports.server = {
  hostname: process.env.SERVER_HOSTNAME || 'localhost',
  port: process.env.SERVER_PORT || 3000
};

module.exports.db = {};