const express = require('express');
const session = require('express-session');
const router = require('./router/router.js');

const app = express();

app.use(session({
	secret: 'forum',
  resave: false,
  saveUninitialized: true
}));
app.use(express.static('./public'));
app.use('/avatar', express.static('./avatar'));
app.set('view engine', 'ejs');

// router table
app.get('/', router.showIndex);
app.get('/regist', router.showRegist);
app.post('/doregist', router.doRegist);
app.get('/login', router.showLogin);
app.post('/dologin', router.doLogin);
app.get('/dologinout', router.doLoginout);
app.get('/setavatar', router.showSetAvatar);
app.post('/dosetavatar', router.doSetAvatar);
app.get('/cutavatar', router.showCutAvatar);
app.get('/docut', router.docut);
app.get('/sayhello', router.hello);
app.post('/dopost', router.doPost); // 发表说说
app.get('/getAllPosts', router.getAllPosts); // 获取所有的说说
app.get('/getuserinfo', router.getUserInfo); // 获取发表说说的用户信息
app.get('/getcounts', router.getCounts); // 获取说说总数
app.get('/posts/:user', router.showUserPosts); // 展示某个用户的个人主页
app.get('/userlist', router.getUsers); // 获取所有注册的用户

app.listen(5000);