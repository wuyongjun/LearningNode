const express = require('express');

let app = express();

app.get('/', function (req, res) {
	res.send('欢迎来到express的世界');
});

// 配合正则表达式
app.get(/^\/student\/([\d]{10})$/, function (req, res) {
	res.send(`学生信息，学号为：${req.params[0]}`);
});

// express自带路由参数
app.get('/teacher/:teacherId', function (req, res) {
	res.send(`教师信息，工号为：${req.params['teacherId']}`);
});

app.listen(3000);