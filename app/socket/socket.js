'use strict';

let io = require('socket.io');

module.exports = function(server) {
  io = io(server);
  let messageId = 1;

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

    socket.on('message', function(data) {
      console.log('Message event');
      data.id = messageId++;
      socket.broadcast.emit('message', data);
      socket.emit('message', data);
    });

  });
}