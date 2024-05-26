const express = require("express");
const app = express();

app.get("/", (req, rsq) => {
    rsq.send("Hello World!");
});

app.get("/user/:id", (req, rsq) => {
    rsq.send("Hello " + req.params.id + " !");
});

app.listen(8000, () => {
    console.log("示例程序正在监听 8000 端口！");
});