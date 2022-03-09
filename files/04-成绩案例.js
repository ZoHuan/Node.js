// 1. 导入fs 模块，来操作文件
const fs = require("fs");

// 2. 调用fs.readFile() 读取文件的内容
fs.readFile("./record.txt", "utf8", function (err, dataStr) {
  // 3. 判断是否读取成功
  if (err) {
    return console.log("文件读取失败！" + err.message);
  }
  // 4.1 把数据进行分割
  const arrOld = dataStr.split(" ");
  // 4.2 字符串替换操作
  const arrNew = [];
  arrOld.forEach((item) => {
    arrNew.push(item.replace("=", "："));
  });
  // 4.3 把新数据进行合并，得到新字符串
  const newStr = arrNew.join("\r\n");

  // 5.调用fs.writeFile 把数据写入
  fs.writeFile("./record-ok.txt", newStr, function (err) {
    if (err) {
      return console.log("文件写入失败！" + err.message);
    }

    console.log("成绩写入成功！");
  });
});
