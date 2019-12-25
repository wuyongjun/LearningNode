// 这个示例主要是展示怎么将循环中的异步操作转化为同步操作的小技巧
// 主要用于读取文件或者读取数据库技巧，十分有用。
const http = require('http');
const fs = require('fs');

http.createServer(function (req, res) {
	// 读取文件夹下文件名
	fs.readdir('./album/', function (err, files) {
		let directories = [];
		(function iterator (i) {
			if (i === files.length) {
				console.log(directories);
				return;
			}
			fs.stat('./album/' + files[i], function (err, stats) {
				if (stats.isDirectory()) {
					directories.push(files[i]);
				}
				iterater(i + 1);
			});
		})(0);
	});
	res.writeHead(200, { 'Content-Type': 'text/html;charset=utf8' });
	res.end('处理已结束');
}).listen(9001, '127.0.0.1');