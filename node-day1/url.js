const Http = require('http');
const Url = require('url') 

Http.createServer(function (req, res) {
	// let path = Url.parse(req.url).pathname;
	// let query = Url.parse(req.url).query;

	// console.log(`path: ${path}`);
	// console.log(`query: ${query}`);
	let url = new URL(req.url, 'http://127.0.0.1');
	console.log(url.pathname);
	console.log(url);
	res.end()
}).listen(9001, '127.0.0.1');