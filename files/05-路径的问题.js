const fs = require("fs");

// 出现路径拼接错误的问题，是因为提供了./或../开头的相对路径
// 如果要解决这个问题，可以直接提供一个完整的文件存放路径

fs.readFile("./files.txt", "utf8", function (err, dataStr) {
  // 3. 判断是否读取成功
  if (err) {
    return console.log("文件读取失败！" + err.message);
  }

  console.log("文件读取成功！" + dataStr);
});

// 绝对路径：移植性非常差，不利于维护
fs.readFile("E:/Node.js/files/files.txt", "utf8", function (err, dataStr) {
  // 3. 判断是否读取成功
  if (err) {
    return console.log("文件读取失败！" + err.message);
  }

  console.log("文件读取成功！" + dataStr);
});

// __dirname 表示当前文件所处的目录
fs.readFile(__dirname + "/files.txt", "utf8", function (err, dataStr) {
  // 3. 判断是否读取成功
  if (err) {
    return console.log("文件读取失败！" + err.message);
  }

  console.log("文件读取成功！" + dataStr);
});
