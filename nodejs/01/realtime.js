// realtime.js

var http = require("http");
var fs = require("fs");
var socketIO = require("socket.io");

var server = http.createServer(function (req, res) {
  var html = fs.readFileSync(__dirname + "/index.html");
  res.setHeader("Content-Type", 'text/html; charset="UTF-8"');
  res.end(html);
});
server.listen(8000);

var io = socketIO.listen(server);
io.sockets.on("connection", function (socket) {
  socket.on("msg", function (data) {
    console.log(data);
    socket.broadcast.emit("chat", data);
  });
});
