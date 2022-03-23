const express = require("express");
const app = express();

// 1. 导入自定义的中间件模块
const customBodyParser = require("./15-custom-body-parser");
// 2. 注册为全局可以的中间件
app.use(customBodyParser);

app.post("/", (req, res) => {
  res.send(req.body);
});

app.listen(80, () => {
  console.log("http://127.0.0.1");
});
