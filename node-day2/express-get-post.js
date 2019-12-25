const express = require('express');
const bodyParser = require('body-parser');

let app = express();

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
	// res.send(req.query);
	res.render('form');
});

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/', function (req, res) {
	res.send(req.body);
});

app.listen(3000);