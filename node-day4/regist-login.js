const express = require('express');
const fd = require('formidable');
const session = require('express-session');
const encrypto = require('./models/encrypto.js');
const db = require('./models/db.js');
const settings = require('./settings.js');

const app = express();

app.set('view engine', 'ejs');

app.use(express.static('./public'));

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}));

app.get('/', function (req, res) {
	if (req.session.username) {
		res.send(`欢迎用户：${req.session.username}`);
	} else {
		res.send('你还没有登录');
	}
});

app.get('/regist', function (req, res) {
	res.render('regist');
});

app.post('/doRegist', function (req, res) {
	let form = new fd.IncomingForm();

	form.parse(req, function (err, fields, files) {
		console.log(`服务器收到的注册信息为：用户名：${fields.username}，密码：${fields.password}`);
		let password = encrypto.md5(encrypto.md5(fields.password).substring(4, 7) + 
			encrypto.md5(fields.password));
		db.insertOne(settings.collection, {
			'username': fields.username,
			'password': password
		}, function (err, result) {
			if (err) {
				res.json({ status: 'error', message: '注册失败' });
				return;
			}
			res.json({ status: 'success', message: '注册成功' });
		});
	});
});

app.get('/login', function (req, res) {
	res.render('login');
});

app.post('/doLogin', function (req, res) {
	let form = new fd.IncomingForm();

	form.parse(req, function (err, fields, files) {
		let username = fields.username;
		let password = fields.password;
		password = encrypto.md5(encrypto.md5(fields.password).substring(4, 7) + 
				encrypto.md5(fields.password));
		db.find(settings.collection, {
			username
		}, function (err, result) {
			if (err) {
				res.json({ status: 'error', message: '登录失败' });
				return;
			}
			if (result.length === 0) {
				res.json({ status: 'error', message: '不存在该用户' });
				return;
			}
			let searchPassword = result[0].password;
			if (searchPassword == password) {
				req.session.username = result[0].username;
				res.json({ status: 'success', message: '恭喜，登录成功' });
			} else {
				res.json({ status: 'error', message: '登录密码错误' });
			}	
		});
	});
});

app.listen(3000);