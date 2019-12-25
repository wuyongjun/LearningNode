// 该案例能说明nodejs的最大特点，单线程，非阻塞IO，事件驱动
const http = require('http');
const fs = require('fs');
const url = require('url');

http.createServer(function (req, res) {
	let query = url.parse(req.url, true).query;
	let id = query.id;
	console.log('welcome ' + id + ' to node');
	fs.readFile('./static/blue.html', function (err, data) {
		if (err) {
			throw err;
		}
		console.log('get file of ' + id + ' visitor');
		res.end();
	});
}).listen(9000);