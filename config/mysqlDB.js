var wrapper = require('co-mysql')
var mysql = require('mysql')
var options = {
      host : '120.26.98.50',
      port : 3306 ,
      database : 'test',
      user: 'shiyalong',
      password : 'root'
    };

exports.getMysql = function getMysql(){
    var pool = mysql.createPool(options),
    p = wrapper(pool);
  return p;
}


//var sql = require('./MysqlDB.js');//获取mysql
//var p = sql.getMysql();
//  var sql = 'select * from user';
//  var str =  p.query(sql);
