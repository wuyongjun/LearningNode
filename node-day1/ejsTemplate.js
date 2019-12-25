const http = require('http');
const fs = require('fs');
const ejs = require('ejs');

http.createServer(function (req, res) {
	if (req.url === '/') {
		fs.readFile(__dirname + '/views/index.ejs', function (err, data) {
			if (err) {
				throw err;
			}
			let dictionary = { name: 'ejs' };
			let template = data.toString();
			let result = ejs.render(template, dictionary);
			res.writeHead(200, { 'Content-Type': 'text/html;charset=utf8' });
			res.end(result);
		});
	}
}).listen(9001);