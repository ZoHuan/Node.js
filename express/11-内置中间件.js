const express = require("express");
const app = express();

// 注意：除了错误级别的中间件，其他的中间件，必须在路由之前进行配置
// 通过express.json() 这个中间件，解析表单中的JSON格式的数据
app.use(express.json());
// 通过express.urlencoded()这个中间件，来解析表单中的url-encoded格式的数据
app.use(express.urlencoded({ extended: false }));

// 1. 定义路由
app.post("/", (req, res) => {
  // req.body 接收客户端发送过来的请求体数据
  // 默认情况下，如果不配置解析表单数据的中间件，则 默认等于undefined
  console.log(req.body);
  res.send("Home Page");
});

app.post("/user", (req, res) => {
  // req.body 接收JSON格式的表单数据和url-encoded格式的数据
  console.log(req.body);
  res.send("User page");
});

app.listen(80, () => {
  console.log("http://127.0.0.1");
});
