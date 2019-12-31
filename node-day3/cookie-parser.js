const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

app.use(cookieParser());

app.get('/', function (req, res) {
	// res.cookie('hobby', 'basketball', {
	// 	maxAge: 900000,
	// 	httpOnly: true
	// });
	res.send(`猜你喜欢：${req.cookies.dests}`);
});

app.get('/gonglue', function (req, res) {
	let dest = req.query.dest;

	let destArr = req.cookies.dests || [];
	destArr.push(dest);
	res.cookie('dests', destArr);
	res.send(`${dest}旅游攻略`);
});

app.listen(4000);