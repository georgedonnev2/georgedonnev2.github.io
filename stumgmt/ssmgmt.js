const express = require('express')
const app = express()

//app.get('*', (req, rsp) => {
app.get('/read', (req, rsp) => {

    const mysql = require("mysql")

    const gdbLink = mysql.createConnection({
        host: "localhost", // MySQL 地址
        port: 3306, // MySQL 端口
        user: "root", // MySQL 用户名
        password: "Lily093897", // MySQL 密码
        database: "gdtest" // 数据库名称
    })

    // 连接到 MySQL
    gdbLink.connect((err) => {
        if (err) {
            console.error("连接失败:", err)
            console.log(req.params)
            console.log(req.query)
            console.log("jnuid is: ", req.query.jnuid)
            console.log("jnuid is ", req.params.id)
            rsp.send("连接数据库失败:" + err)
            return
        }
        console.log(req.params)
        console.log(req.query)
        console.log("jnuid is: ", req.query.jnuid)
        console.log("jnuid is ", req.params.id)

        gdbLink.end()

        //console.log(req)
        //rsp.send('Hello there! It is  George. ')

        rsp.json({ "jnuid": "1201", "name": "George Donne", "gender": "男", "birthday": "1971-1-1" })
        //rsp.json(jnuid: '1201', name: 'George Donne')
    })

})


app.get('/', (req, rsp) => {
    //console.log(req.params)
    rsp.sendFile(__dirname + '/stumgmt.html')
    //rsp.send('Hello there! It is  George. ')
})

app.listen(8080, () => {
    console.log("serving on localhost:8080...");
});


/**
 * 参考资料：
 * 1、node.js创建一个web服务器(Server)的详细步骤；https://blog.csdn.net/weixin_44198965/article/details/103236047
 * 2、node.js教你写一个web服务器(保姆级教程)；/https://juejin.cn/post/7092006570531241998
 * 3、Node.js学生管理系统（Express+MySQL）；https://blog.csdn.net/LitongZero/article/details/81606395
 * 4、基于Node与express完成图书管理系统项目；https://blog.csdn.net/YanMeiHe/article/details/103730866
 */