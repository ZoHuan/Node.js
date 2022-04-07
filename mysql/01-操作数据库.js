// 1. 导入mysql模块
const mysql = require("mysql");

// 2. 建立与MySQL数据库的连接关系
const db = mysql.createPool({
  host: "127.0.0.1", // 数据库的IP地址
  user: "root", // 数据库的登录账号
  password: "root", // 数据库的登录密码
  database: "nodejs", // 指定的数据库表
});

/* 
// 测试mysql模块能否正常工作
db.query("select 1", (err, results) => {
  // mysql 模块工作期间报错了
  if (err) return console.log(err.message);
  // 能够成功的执行SQL语句
  console.log(results);
}); 
*/

/* 
const sqlStr = "SELECT * FROM dept";
db.query(sqlStr, (err, results) => {
  // 查询数据失败
  if (err) return console.log(err.message);
  // 查询数据成功
  // 注：如果执行的是select查询语句，则执行的结果是数组
  console.log(results);
}); 
*/

/* 
const dept = { DEPTNO: 5, DNAME: "宇智波", LOC: "木叶村" };
const sqlStr = "INSERT INTO dept (DEPTNO,DNAME,LOC) VALUES (?,?,?)";
db.query(sqlStr, [dept.DEPTNO, dept.DNAME, dept.LOC], (err, results) => {
  // 执行语句失败
  if (err) return console.log(err.message);
  // 执行语句成功
  // 注：如果执行的是insert into 插入语句，则results 是一个对象
  // 可以通过affectedRows属性，来判断是否插入数据成功
  if (results.affectedRows === 1) {
    console.log(results);
    console.log("插入数据成功!");
  }
}); 
*/

/* 
// 插入数据的便捷方式
const dept = { DEPTNO: 6, DNAME: "旋涡", LOC: "木叶村" };
const sqlStr = "INSERT INTO dept set ?";
db.query(sqlStr, dept, (err, results) => {
  // 执行语句失败
  if (err) return console.log(err.message);
  // 执行语句成功
  // 注：如果执行的是insert into 插入语句，则results 是一个对象
  // 可以通过affectedRows属性，来判断是否插入数据成功
  if (results.affectedRows === 1) {
    console.log(results);
    console.log("插入数据成功!");
  }
}); 
*/

/* 
const dept = { DEPTNO: 6, DNAME: "日向", LOC: "木叶村" };
const sqlStr = "UPDATE dept SET DNAME=?,LOC=? WHERE DEPTNO=?";
db.query(sqlStr, [dept.DNAME, dept.LOC, dept.DEPTNO], (err, results) => {
  if (err) return console.log(err.message);
  if (results.affectedRows === 1) {
    console.log(results);
    console.log("更新数据成功!");
  }
});
*/

/* 
// 更新数据的便捷方式
const dept = { DEPTNO: 6, DNAME: "大筒木", LOC: "木叶村" };
const sqlStr = "UPDATE dept SET ? WHERE DEPTNO=?";
db.query(sqlStr, [dept, dept.DEPTNO], (err, results) => {
  if (err) return console.log(err.message);
  if (results.affectedRows === 1) {
    console.log(results);
    console.log("更新数据成功!");
  }
});
*/

const sqlStr = "DELETE FROM dept  WHERE DEPTNO=?";
db.query(sqlStr, 6, (err, results) => {
  if (err) return console.log(err.message);
  if (results.affectedRows === 1) {
    console.log(results);
    console.log("删除数据成功!");
  }
});
