const express = require("express");
const app = express();
// 1. 导入解析表单数据的中间件 body-parser
const parser = require("body-parser");
// 2. 使用app.use()注册中间件
app.use(parser.urlencoded({ extended: false }));

// 1. 定义路由
app.post("/", (req, res) => {
  console.log(req.body);
  res.send("Home Page");
});

app.listen(80, () => {
  console.log("http://127.0.0.1");
});
