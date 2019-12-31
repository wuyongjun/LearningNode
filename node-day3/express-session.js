const express = require('express');
const session = require('express-session');

const app = express();

// app.set('trust proxy', 1); // trust first proxy
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
  // cookie: { secure: true } // 需要https协议才能够传送cookie，不然，服务器会得到空的session
}));

app.get('/', function (req, res) {
	if (req.session.login === 'success') {
		res.send(`欢迎${req.session.username}登录`);
	} else {
		res.send('对不起，您还没有登录');
	}
});

app.get('/login', function (req, res) {
	req.session.login = 'success';
	req.session.username = '吴永军';
	res.send('恭喜，登录成功');
});

app.listen(4000);