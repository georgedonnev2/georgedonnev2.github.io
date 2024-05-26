"use strict";

var express = require("express");

var app = express();
app.get("/", function (req, rsq) {
  rsq.send("Hello World!");
});
app.get("/user/:id", function (req, rsq) {
  rsq.send("Hello " + req.params.id + " !");
});
app.listen(8000, function () {
  console.log("示例程序正在监听 8000 端口！");
});