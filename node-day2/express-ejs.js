// express结合ejs模版引擎
const express = require('express');

let app = express();

// note: "views" file name can't be changed
// app.set('views', 'dirname')
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
	res.render('playerList', {
		"players": ["kobe", "mike", "paul"]
	})
});

app.listen(3000);
