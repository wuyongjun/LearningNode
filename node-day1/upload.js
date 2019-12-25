// 这是一个上传表单的服务 我们需要使用第三方模块：formidable, silly-datetime
const http = require('http');
const fs = require('fs');
const fd = require('formidable');
const sd = require('silly-datetime');
const path = require('path');
const url = require('url');
const util = require('util');

http.createServer(function (req, res) {
	let pathname = url.parse(req.url).pathname;
	let method = req.method;
	if (pathname === '/doupload' && method.toLowerCase() === 'post') {

		let form = new fd.IncomingForm();
		form.uploadDir = "./upload";

		form.parse(req, function(err, fields, files) {
			// 改名 上传时间+5位随机数+扩展名
			let date = sd.format(new Date(), 'YYYYMMDDHHmmss');
			let randomNumber = parseInt(Math.random() * 89999 + 10000);
			let extname = path.extname(files.tupian.name);
			let oldPathname = __dirname + '/' + files.tupian.path;
			let newPathname = __dirname + '/upload/' + date + randomNumber + extname;

			fs.rename(oldPathname, newPathname, function (err) {
				res.writeHead(200, { 'Content-Type': 'text/plain;charset=utf8' });
				if (err) {
					res.end('上传文件改名失败！');
					return;
				}
				res.end(util.inspect({fields: fields, files: files}));
			});
    });
	} else if (pathname === '/') {
		fs.readFile(__dirname + '/static/upload.html', function (err, data) {
			if (err) {
				throw Error('读取上传表单失败！');
			}
			res.writeHead(200, { 'Content-Type': 'text/html;charset=urf8' });
			res.end(data);
		});
	} else {
		fs.readFile(__dirname + '/static/404.html', function (err, data) {
			res.writeHead(404, { 'Content-Type': 'text/html;charset=utf8' });
			res.end(data);
		});
	}
}).listen(9001, '192.168.2.1');