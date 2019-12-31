const express = require('express');
const app = express();
// socket.io公式
const http = require('http').Server(app);
const io = require('socket.io')(http);

// express-session公式
const session = require('express-session');
app.use(session({
	secret: 'chatroom',
  resave: false,
  saveUninitialized: true
}));

// 所有登录的用户
let users = [];

app.set('view engine', 'ejs');
app.use(express.static('./public'));

// 首页
app.get('/', function (req, res) {
	res.render('index');
});

// 登录请求
app.get('/check', function (req, res) {
	let nickname = req.query.nickname;
	if (!nickname) {
		res.send('必须填写昵称');
		return;
	}
	if (users.indexOf(nickname) !== -1) {
		res.send('昵称已被占用');
		return;
	}
	users.push(nickname);
	req.session.nickname = nickname;
	res.redirect('/chatroom');
});

// 聊天室页面
app.get('/chatroom', function (req, res) {
	if (req.session.nickname) {
		res.render('chatroom', {
			'nickname': req.session.nickname
		});
	} else {
		res.redirect('/');
	}
});

// 聊天连接
io.on('connect', function (socket) {
	// 监听
	socket.on('chat', function (msg) {
		// 广播
		io.emit('chat', msg);
	});
});


http.listen(3000);

