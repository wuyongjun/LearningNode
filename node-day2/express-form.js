// 表单可以提交给自己
const express = require('express');

let app = express();

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
	res.render('form');
});

app.post('/', function (req, res) {
	res.send('提交成功。')
});

app.listen(3000);