'use strict'

var mysql = require('../../config/mysqlDB.js')
var p = mysql.getMysql();
exports.signup = function*(next){
  var sql = 'select * from user';
  var str = yield p.query(sql);
  var arr = new Array();
  arr = str;
  console.log('查询结果:'+arr[0].name);
  this.body = '成功'
}

exports.getDisk = function*(next){
  let sql = `SELECT * FROM test`
  let result = yield p.query(sql)
  this.body = result
}

exports.insertDisk = function*(next) {
  const { firstName, lastName } = this.request.body
  let sql = `INSERT INTO test (firstName, lastName)  VALUES ('${firstName}', '${lastName}')`
  let result = yield p.query(sql)
  this.body = {
    status: 200,
    msg: 'success',
    result
  }
}

exports.deleteDisk = function*(next) {
  const { id } = this.request.body
  let sql = `delete from test where id=${id}`
  let result = yield p.query(sql)
  this.body = {
    status: 200,
    msg: 'success',
    result
  }
}

exports.insetUser = function*(next){
  // var name = reqJson.name;
  var reqJson = this.request.body;

  var name = reqJson.name;
  var password = reqJson.password;
  var sex = reqJson.sex;
  var birthday = reqJson.birthday;
  var map = reqJson.map;
  var cellphone = reqJson.cellphone;

  //数据库访问
    var sql = 'INSERT INTO `user`';
    sql+= 'SET name = "'+name+'",';
    sql+= 'PASSWORD = "'+password+'",';
    sql+=  'sex = "'+sex+'",';
    sql+=  'birthday = "'+birthday+'",';
    sql+=  'map = "'+map+'",';
    sql+=  'cellphone = "'+cellphone+'"';
  var str = yield p.query(sql);
  var arr = new Array();
  arr = str;

  this.body = '成功'
}
//根据id删除user
exports.deleteById = function*(next){
  var reqJson = this.request.body;
  var userId = reqJson.id;

  var sql ="DELETE FROM `user` WHERE id ="+userId+"";
  var str = yield p.query(sql);
  console.log("sql执行完成"+str);
  console.log(str);
  var repBody = false;
  if(str.affectedRows > 0){
    repBody = true;
  }else{
    repBody = false;
  }
  this.body = {
    success : repBody
  }
}
//updateUserByid
exports.update = function*(next){
  var reqJson = this.request.body;

  var name = reqJson.name;
  var password = reqJson.password;
  var sex = reqJson.sex;
  var birthday = reqJson.birthday;
  var map = reqJson.map;
  var cellphone = reqJson.cellphone;
  var id = reqJson.id;
  var sql = 'UPDATE  `user` ';
  sql+= 'SET ';
  if(name != null || name != undefined){
      sql+= 'name = "'+name+'",';
  }
  if(password != null || password != undefined){
      sql+= 'PASSWORD = "'+password+'",';
  }
  if(name != null || name != undefined){
      sql+=  'sex = "'+sex+'",';
  }
  if(name != null || name != undefined){
      sql+=  'birthday = "'+birthday+'",';
  }
  if(name != null || name != undefined){
      sql+=  'map = "'+map+'",';
  }
  if(name != null || name != undefined){
     sql+=  'cellphone = "'+cellphone+'"';
  }
  sql+=  'WHERE id = "'+id+'"';

  var str = yield p.query(sql);
  console.log("sql执行完成");
  console.log(str);
  var repBody = false;
  if(str.affectedRows > 0){
    repBody = true;
  }else{
    repBody = false;
  }
  this.body = {
    success : repBody
  }
}

exports.verify = function*(next){
  this.body = {
    success : true
  }
}
