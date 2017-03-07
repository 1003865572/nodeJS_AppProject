'use strict'

var koa = require('koa')
var logger = require('koa-logger')
var session = require('koa-session')
var bodyParser = require('koa-bodyparser')
var cors = require('koa-cors')
var app = koa();

var options ={};
options.expose  = '*';
app.use(cors(options));//跨域访问

app.keys = ['app']
app.use(logger())
app.use(session(app))
app.use(bodyParser())

var router = require('./config/routes')()

app
  .use(router.routes())
  .use(router.allowedMethods())
app.listen(1237)
console.log('启动成功:1237')
