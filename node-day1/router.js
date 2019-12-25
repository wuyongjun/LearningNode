// 这是一个简单路由模块
const fs = require('fs');

exports.showPage = showPage;
exports.showImage = showImage;
exports.showNotFound = showNotFound;

function showPage (req, res) {
	fs.readFile(__dirname + '/public/demo.html', function (err, data) {
		if (err) { throw err }
		res.writeHead(200, { 'Content-Type': 'text/html;charset=utf8' });
		res.end(data);
	});
}

function showImage (req, res) {
	fs.readFile(__dirname + '/public/1.jpeg', function (err, data) {
		if (err) { throw err }
		res.writeHead(200, { 'Content-Type': 'image/jpeg' });
		res.end(data);
	});
}

function showNotFound (req, res) {
	res.writeHead(404, { 'Content-Type': 'text/plain;charset=utf8' });
	res.end('对不起，您访问的资源不存在！');
}