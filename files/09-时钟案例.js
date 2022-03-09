const fs = require("fs");
const path = require("path");

// 定义正则表达式，分别匹配<style></style> 和 <script></script>标签
const regStyle = /<style>[\s\S]*<\/style>/;
const regScript = /<script>[\s\S]*<\/script>/;

fs.readFile(
  path.join(__dirname, "./clock.html"),
  "utf8",
  function (err, dataStr) {
    if (err) {
      return console.log("文件读取失败！" + err.message);
    }

    // 调用对应的解析方法
    resolveCSS(dataStr);
    resolveJS(dataStr);
    resolveHTML(dataStr);
  }
);

// 处理css样式的方法
function resolveCSS(htmlStr) {
  const r1 = regStyle.exec(htmlStr);
  const newCSS = r1[0].replace("<style>", "").replace("</style>", "");
  fs.writeFile(
    path.join(__dirname, "./clock/index.css"),
    newCSS,
    function (err) {
      if (err) {
        return console.log("写入CSS样式失败！" + err.message);
      }

      console.log("写入样式文件成功！");
    }
  );
}

// 处理js脚本的方法
function resolveJS(htmlStr) {
  const r2 = regScript.exec(htmlStr);
  const newJS = r2[0].replace("<script>", "").replace("</script>", "");
  fs.writeFile(path.join(__dirname, "./clock/index.js"), newJS, function (err) {
    if (err) {
      return console.log("写入JS脚本失败！" + err.message);
    }
    console.log("写入脚本文件成功！");
  });
}

// 处理html结构的方法
function resolveHTML(htmlStr) {
  const newHTML = htmlStr
    .replace(regStyle, '<link rel="stylesheet" href="./index.css" /> ')
    .replace(regScript, '<script src="./index.js"></script>');

  fs.writeFile(
    path.join(__dirname, "./clock/index.html"),
    newHTML,
    function (err) {
      if (err) {
        return console.log("写入HTML文件失败！" + err.message);
      }
      console.log("写入文件成功！");
    }
  );
}

