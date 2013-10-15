// server.js

var http = require("http");

var counter = 0;

var server = http.createServer(function (req, res) {
  console.log("access: " + ++counter);

  // MIME Type と文字コードを指定
  res.setHeader("Content-Type", "text/html; charset=UTF-8");

  // アクセスカウンターの表示
  res.write("access: " + counter + "\n");
  
  // マルチバイト文字
  res.write("日本語が文字化けしない。\n");

  // Hello, world!
  res.end("Hello world!\n");
});

server.listen(8000);
