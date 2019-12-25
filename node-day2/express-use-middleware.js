// app.use为我们提供使用自定义函数或者第三方中间件的方式
const express = require('express');
const fs = require('fs');

let app = express();

// staticService是我们自定义的读取静态文件的函数，
// 所有访问路径都会走这个路由，相当于app.use('/', staticService)
app.use(staticService);

// 之后会遇到body-parser用来解析post参数的中间件

app.use('/admin', function (req, res) {
	res.send('管理员页面');
});

app.listen(3000);

function staticService (req, res, next) {
	fs.readFile('./public' + req.originalUrl, function (err, data) {
		if (err) {
			next(); // important!!! 作为中间件一定要有next是业务能够被后来的路由处理
			return;
		}
		res.send(data.toString());
	});
}