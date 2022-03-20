const express = require("express");
const app = express();

// 1. 定义中间件函数
const mw = (req, res, next) => {
  console.log("调用了局部生效的中间件");
  next();
};
// 2. 创建路由
app.get("/", mw, (req, res) => {
  res.send("Home Page");
});

app.get("/user", (req, res) => {
  res.send("User page");
});

app.listen(80, () => {
  console.log("http://127.0.0.1");
});
