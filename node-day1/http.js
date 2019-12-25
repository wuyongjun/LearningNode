// 可以用来测试一下编译好的静态项目
const http = require('http');
const fs = require('fs');
const router = require('./router.js');

let server = http.createServer(function (req, res) {
	// let filepath = 'public/dist' + req.url;
	// fs.readFile(filepath, function (err, data) {
	// 	if (err) {
	// 		console.log('read failed');
	// 	} else {
	// 		res.write(data);
	// 		res.end();
	// 	}
	// });
	if (req.url === '/page') {
		router.showPage(req, res);
	} else if (req.url === '/image') {
		router.showImage(req, res);
	} else {
		router.showNotFound(req, res);
	}
});

server.listen(1234);