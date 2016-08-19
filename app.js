'use strict';

const koa = require('koa'),
      route = require('koa-route'),
      app = module.exports = koa(),
      config = require('./app/config/config'),
      socket = require('./app/socket/socket'),
      fs = require('fs'),
      Promise = require('bluebird'),
      co = require('co'),
      http = require('http'),
      serve = require('koa-static');


app.use(logger);

// static files handler
app.use(serve(__dirname + '/public'));

// homepage render
app.use(route.get('/', index));


function *logger(next) {
  let start = new Date;
  yield next;
  let ms = new Date - start;
  console.log('%s %s - %s ms', this.method, this.url, ms);
}

function *index() {
  this.body = yield new Promise(function(resolve, reject) {
    fs.readFile('./app/views/index.html', {'encoding': 'utf8'}, function(err, data) {
      if (err) return reject(err);
      resolve(data);
    });
  });
};

// create server instance
const server = http.createServer(app.callback());

// configure sockets
socket(server);

// start the server
server.listen(config.server.port, function(err) {
  if (err) {
    console.log('Error when starting the server: ' + err);
  } else {
    console.log('Server started on port ' + config.server.port);
  }
});