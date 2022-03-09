const http = require("http");

const server = http.createServer();

server.on("request", function (req, res) {
  // req.url 是客户端请求的URL地址
  const url = req.url;
  // req.method 是客服端请求的method类型
  const method = req.method;
  const str = `Your request url is ${url}, and request method is ${method} `;
  console.log(str);

  // 调用res.end()方法，向客户端响应一些内容
  res.end(str);
});

server.listen(80, () => {
  console.log("server running at http://127.0.0.1");
});
