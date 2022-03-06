// 1. 导入fs 模块，来操作文件
const fs = require("fs");

// 2. 调用fs.writeFile() 方法写入文件的内容
// 参数1： 文件的存放路径
// 参数2： 要写入的内容
// 参数3： 回调函数
fs.writeFile("./files.txt", "write", function (err) {
  // 2.1 如果文件写入成功，err的值为null
  // 2.2 如果文件写入失败，err的值为一个 错误的对象
  if (err) {
    return console.log("文件写入失败！" + err.message);
  }
  console.log("文件写入成功！");
});
