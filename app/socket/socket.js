'use strict';

let io = require('socket.io');

module.exports = function(server) {
  io = io(server);

  io.on('connection', function(socket) {
    console.log('Socket connection, id: ' + socket.id);

    socket.on('login', function() {
      console.log('Login event');
      io.emit('message', {});
    });

    socket.on('register', function() {
      console.log('Register event');
    });

    socket.on('roomJoin', function() {
      console.log('Room event');
    });

    socket.on('message', function() {
      console.log('Message event');
    });

  });
}