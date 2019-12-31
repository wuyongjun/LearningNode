const express = require('express');
const session = require('express-session');
const db = require('./models/db.js');
const utils = require('./common/utils.js');

let app = express();

app.set('view engine', 'ejs');
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}));
app.use(express.static('./public'));

app.get('/', function (req, res) {
	if (req.session.login == 'success') {
		res.send(`登录成功，欢迎${req.session.username}`);
	} else {
		res.send('对不起，您还没有登录');
	}
});

app.get('/login', function (req, res) {
	res.render('login');
});

app.get('/checkLogin', function (req, res) {
	let username = req.query.username;
	let password = req.query.password;
	db.find('user', { username }, function (err, result) {
		if (result.length == 0) {
			res.send('您填写的用户名不存在');
			return;
		}
		let p = result[0].password
		let recivePass = utils.encrypto(password).toUpperCase();
		if (recivePass == p) {
			req.session.login = 'success';
			req.session.username = result[0].username;
			res.send(`登录成功，欢迎${result[0].username}`);
		} else {
			res.send('登录密码不正确');
		}
	});
});

app.listen(3000);

// 参考资料：https://www.cnblogs.com/JamesWang1993/p/8593494.html