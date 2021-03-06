// 1.导入express
const express = require("express");
// 2.创建web服务器
const app = express();

// 调用express.static()方法，快速的对外提供静态资源
app.use("/clock", express.static("./clock"));

// 3.启动web服务器
app.listen(80, () => {
  console.log("express server running at http:127.0.0.1");
});
