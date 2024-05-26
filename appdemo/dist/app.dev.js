"use strict";

var createError = require('http-errors');

var express = require('express');

var path = require('path');

var cookieParser = require('cookie-parser');

var logger = require('morgan');
/**
 * 1、以下 require() 的是用户users路由目录中的模块。这些模块/文件用于处理特定的“路由”（URL 路径）。 
 * 2、可以通过添加新文件来扩展骨架应用，比如添加学生student相关的路由来列出学生信息详情。
 * 3、require()括号中的内容就对应 routes 目录中的文件。
 */


var indexRouter = require('./routes/index');

var usersRouter = require('./routes/users');

var app = express(); // view engine setup

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express["static"](path.join(__dirname, 'public')));
/**
 * 1、"localhost:3000/" 请求，由 ./routes/index.js 指定如何处理。
 * 
 */

app.use('/', indexRouter);
/**
 * "localhost:3000/users" 请求，由 ./routes/users.js 指定如何处理。
 */

app.use('/users', usersRouter); // catch 404 and forward to error handler

app.use(function (req, res, next) {
  next(createError(404));
}); // error handler

app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {}; // render the error page

  res.status(err.status || 500);
  res.render('error');
});
module.exports = app;