// app.use是模糊匹配，而app.method则是精确匹配
const express = require('express');

let app = express();

// 相当于app.use(function (req, res) {})
app.use('/', function (req, res, next) {
	console.log(new Date());
	next();
});

app.use('/user/:id', function (req, res, next) {
	res.send('用户ID：' + req.params.id);
});

app.use('/admin', function (req, res) {
	let { originalUrl, baseUrl, path } = req;
	res.write(`originalUrl: ${originalUrl}\n`);
	res.write(`baseUrl: ${baseUrl}\n`);
	res.write(`path: ${path}`);
	res.end();
});

app.listen(3000);