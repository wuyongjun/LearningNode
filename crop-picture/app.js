const express = require('express');
const fs = require('fs');
const gm = require('gm');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('./public'));

app.get('/', function (req, res, next) {
	res.render('index');
});

app.get('/docrop', function (req, res, next) {
	let filename = req.query.name;
	let width = req.query.w;
	let height = req.query.h;
	let x = req.query.l;
	let y = req.query.t;

	gm('./picture/' + filename)
		.crop(width, height, x, y)
		.resize(100, 100, '!')
		.write('./public/images/' + filename, function (err) {
			if (err) {
				console.log(err);
				res.send('-1');
				return;
			}
			res.send('1');
		});
});

app.listen(3000);