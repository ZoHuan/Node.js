const express = require("express");
const app = express();

// 配置解析表单数据的中间件
app.use(express.urlencoded({ extended: false }));

// 一定要在路由之前，配置cors中间件，从而解决接口跨域
const cors = require("cors");
app.use(cors());

// 导入路由模块
const router = require("./17-apiRouter");
// 把路由模块，注册到app上
app.use("/api", router);

app.listen(80, () => {
  console.log("express server running at http://127.0.0.1");
});
