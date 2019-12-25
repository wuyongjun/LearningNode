// 这个示例其实就是利用node实现了一个静态服务器，static就是静态服务器的根目录，
// 我们可以直接在浏览器的地址栏中输入要访问的静态资源访问路径访问资源，路径中不
// 需要出现static目录，就如apcha默认提供的静态根目录一样，但node中需如下实现。
// __dirname
const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

http.createServer(function (req, res) {
	let pathname = url.parse(req.url).pathname;
	// 如果请求路径中包含"."那么访问的才是文件
	if (pathname.indexOf('.') === -1) {
		pathname += '/index.html';
	}
	let extname = path.extname(pathname);
	fs.readFile(__dirname + '/static' + pathname, function (err, data) {
		if (err) {
			fs.readFile(__dirname + '/static/404.html', function (err, data) {
				if (err) { throw err; }
				res.writeHead(404, { 'Content-Type' : 'text/html;charset=utf8' });
				res.end(data)
			});
			return;
		}
		let mimeType = getMIME(extname);
		// getMIME (extname, function (mimeType) {
		//	res.writeHead(200, { 'Content-Type' : mimeType });
		//  res.end(data);
		// })
		res.writeHead(200, { 'Content-Type' : mimeType });
		res.end(data);
	});
}).listen(9001, '127.0.0.1');

// 这个可以通过读取MIME类型表文件返回相应文件的MIME类型
// 注意json字符串的解析 以前常用回调函数解决其中的异步问题
// 如 function getMIME (extname, callback) { .... callback(result) }
function getMIME (extname) {
	console.log(extname);
	switch (extname) {
		case '.html' :
			return 'text/html';
			break;
		case '.jpg' : 
			return 'image/jpg';
			break;
		case '.jpeg' :
			return 'image/jpeg';
			break;
		case '.css' : 
			return 'text/css';
		case '.png' : 
			return 'image/png';
			break;
		case '.ico' : 
			return 'image/x-icon';
			break;
	}
}