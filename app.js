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

// x-response-time

app.use(function *(next) {
  let start = new Date;
  yield next;
  let ms = new Date - start;
  this.set('X-Response-Time', ms + 'ms');
});

// logger

app.use(function *(next) {
  let start = new Date;
  yield next;
  var ms = new Date - start;
  console.log('%s %s - %s ms', this.method, this.url, ms);
});

// static files handler

app.use(serve(__dirname + '/public'));

// homepage render

app.use(route.get('/', index));

function *index() {
  this.body = yield readFile('./app/views/index.html');
};

function readFile(src) {
  return new Promise(function(resolve, reject) {
    fs.readFile(src, {'encoding': 'utf8'}, function(err, data) {
      if (err) return reject(err);
      resolve(data);
    });
  });
}

// create server instance

const server = http.createServer(app.callback());
socket(server);

// start the server

server.listen(config.server.port, function(err) {
  if (err) {
    console.log('Error when starting the server: ' + err);
  } else {
    console.log('Server started on port ' + config.server.port);
  }
});