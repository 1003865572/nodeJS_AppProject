'use strict'
//路由控制
var Router = require('koa-router')
var user = require('../app/controllers/user')
var app = require('../app/controllers/app')
module.exports = function(){
  var router = new Router({
    prefux : '/api/1'
  })

  router.get('/u/signup',user.signup)
  router.get('/u/getDisk', user.getDisk)
  router.post('/u/insertDisk', user.insertDisk)
  router.post('/u/deleteDisk', user.deleteDisk)
  router.post('/u/verify',user.verify)
  router.post('/u/insetUser',user.insetUser)
  router.post('/u/deleteById',user.deleteById)
  router.post('/u/update',user.update)

  router.post('/signature',app.signature)
  return router;
}
