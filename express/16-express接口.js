const express = require("express");
const app = express();
// 导入路由模块
const router = require("./17-apiRouter");
// 把路由模块，注册到app上
app.use("/api", router);

app.listen(80, () => {
  console.log("express server running at http://127.0.0.1");
});
