const http = require('http');
const fs = require('fs');

const server = http.createServer(function (req, res) {
	if (req.url == '/') {
		fs.readFile('./index.html', function (err, data) {
			if (err) {
				throw err;
				return;
			}
			res.end(data);
		});
	}
});

// 创建io对象
const io = require('socket.io')(server);
// 建立tcp连接 每次连接都创建一个socket连接，点对点通信，
io.on('connection', function (socket) {
	console.log(`1个客户端连接了`);
	socket.on('question', function (msg) {
		// socket.emit('answer', msg);
		io.emit('answer', msg); // 为广播事件
	});
});

server.listen(3000, '127.0.0.1');