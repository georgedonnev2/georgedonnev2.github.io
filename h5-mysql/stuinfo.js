var mysql = require('mysql');
var bodyParser = require('body-parser');
// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false })
const express = require('express');
const path = require('path');
const app = express();
var cnt = 0;
/*****数据库配置*****/
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'xxx',
    port: '3306',
    database: 'StudentInfo',
    useConnectionPooling: true
});
var addSql = 'INSERT INTO table1(姓名,学号,班级,性别,电话) VALUES(?,?,?,?,?)';
var addSqlParams = new Array(5);
/****web页面显示*****/
app.use(express.static(path.join(__dirname, 'public')));
/****web提交数据处理****/
app.post('/posttable', urlencodedParser, function (req, res) {
    addSqlParams[0] = req.body.name;
    addSqlParams[1] = req.body.id;
    addSqlParams[2] = req.body.class;
    addSqlParams[3] = req.body.wm;
    addSqlParams[4] = req.body.phonenumber;

    /***数据库连接***/
    //    connection.connect();
    /****插入数据*****/
    connection.query(addSql, addSqlParams, function (err, result) {
        if (err) {
            //插入失败，返回错误信息
            console.log('[INSERT ERROR] - ', err.message);
            res.end(err.message + " ");
        } else {
            //插入成功则返回时间+success
            console.log('insert success!');
            res.end(new Date().toLocaleString() + ':success');
        }


    });
    cnt = cnt + 1;
    console.log('insert success!');
    res.end('success');
});
app.listen(8000, () => {
    console.log('server listening at port 8000')
});