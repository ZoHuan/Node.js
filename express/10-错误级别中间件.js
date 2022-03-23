const express = require("express");
const app = express();

// 1. 定义路由
app.get("/", (req, res) => {
  throw new Error("服务器内部发生了错误！");
  res.send("Home Page");
});

// 2. 定义错误级别的中间件
app.use((err, req, res, next) => {
  console.log("发生了错误！" + err.message);
  res.send("Error:" + err.message);
});

app.listen(80, () => {
  console.log("http://127.0.0.1");
});
