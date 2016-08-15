const koa = require('koa'),
      route = require('koa-route'),
      app = module.exports = koa();

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
})


app.use(route.get('/', index));
app.use(route.get('/about', about));

function *index() {
  this.body = 'Hello! This is home page';
}

function *about() {
  this.body = 'Hello! This is about page';
}


if (!module.parent) app.listen(3000);