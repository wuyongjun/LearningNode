// 中间件的顺序至关重要
const express = require('express');

let app = express();

app.get('/:username/:id', function (req, res, next) {
	let username = req.params.username;
	let id = req.params.id;
	// 检索数据库，如果存在id直接处理，否则，将请求流向下方路由处理，亦可调整顺序省略next方法
	if (id) {
		req.send('用户信息，用户名：' + username);
	} else {
		next();
	}
});

app.get('/admin/login', function (req, res, next) {
	req.send('管理员登录');
});

app.listen(3000);