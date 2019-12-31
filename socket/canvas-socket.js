const http = require('http');
const fs = require('fs');

const server = http.createServer(function (req, res) {
	if (req.url === '/') {
		fs.readFile('./canvas.html', function (err, data) {
			if (err) {
				throw err;
				return;
			}
			res.end(data);
		});
	}
});

const io = require('socket.io')(server);

io.on('connect', function (socket) {
	socket.on('canvas', function (msg) {
		io.emit('canvas', msg);
	});

	socket.on('south/canvas', function (msg) {
		console.log('south/canvas')
		io.emit('south/canvas', msg);
	});
});

server.listen(4000, 'localhost');