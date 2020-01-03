const formidable = require('formidable');
const path = require('path');
const fs = require('fs');
const sillyDatetime = require('silly-datetime');
const gm = require('gm');
const db = require('../models/db.js');
const { md5 } = require('../models/encrypto.js');
const { sayHello } = require('./say.js');

// router为路由大管家
exports.hello = sayHello;

// 首页
exports.showIndex = function (req, res, next) {
	let login = false;
	let username = '';
	if (req.session.login == '1') {
			login = true;
			username = req.session.username
	}
	db.find('users', { username }, function (err, results) {
		if (err) {
			res.send('-3');
			return;
		}
		let avatar = results.length !== 0 ? results[0].avatar : 'default.jpeg'
		res.render('index', {
			login,
			username,
			avatar,
			page: 'home'
		});
	});
};

// 注册页面
exports.showRegist = function (req, res, next) {
	res.render('regist', {
		login: req.session.login == '1' ? true : false,
		username: req.session.username ? req.session.username : '',
		page: 'regist'
	});
};

// 注册业务
exports.doRegist = function (req, res, next) {
	// 获取用户填写的内容
	const fd = new formidable.IncomingForm();

	fd.parse(req, function (err, fields, files) {
		let username = fields.username;
		let password = fields.password;

		// 查找该用户是否已经存在
		db.find('users', { username }, function (err, results) {
			if (err) {
				res.send('-3');
				return;
			}
			if (results.length !== 0) {
				res.send('-1');
				return;
			}
			console.log(results);
			// 保存新用户
			password = md5(md5(password) + '吴永军');
			console.log(password);
			db.insertOne('users', {
				username,
				password,
				avatar: 'default.jpeg'
			}, function (err, result) {
				if (err) {
					res.send('-3');
					return;
				}
				req.session.login = '1';
				req.session.username = username;
				res.send('1');
			});
		});
		
	});
};

// 登录页面
exports.showLogin = function (req, res, next) {
	res.render('login', {
		login: req.session.login == '1' ? true : false,
		username: req.session.username ? req.session.username : '',
		page: 'login'
	});
};

// 登录业务
exports.doLogin = function (req, res, next) {
	// 获取用户名和密码
	const form = new formidable.IncomingForm();

	form.parse(req, function (err, fields, files) {
		let username = fields.username;
		let password = fields.password;
		password = md5(md5(password) + '吴永军');
		// 查找用户
		db.find('users', { username }, function (err, results) {
			if (err) {
				res.send('-3');
				return;
			}
			if (results.length == 0) {
				res.send('-1');
				return;
			}
			if (results[0].password != password) {
				res.send('-2');
				return;
			}
			req.session.login = '1';
			req.session.username = username;
			res.send('1');
		});
	});
};

// 登出业务
exports.doLoginout = function (req, res, next) {
	req.session.destroy();
	res.redirect('/');
};

// 设置头像页面
exports.showSetAvatar = function (req, res, next) {
	if (req.session.login != '1') {
		res.send('非法闯入，该页面必须登录');
		return;
	}
	res.render('setavatar', {
		login: true,
		username: req.session.username,
		avatar: 'default.jpeg',
		page: 'setavatar'
	});
};

// 上传头像
exports.doSetAvatar = function (req, res, next) {
	const fd = new formidable.IncomingForm();

	fd.uploadDir = path.normalize(__dirname + '/../avatar');
	fd.parse(req, function (err, fields, files) {
		console.log(files);
		let extname = path.extname(files.photo.name);
		let oldname = files.photo.path;
		let newname = path.normalize(__dirname + '/../avatar') + '/' + req.session.username + extname;

		fs.rename(oldname, newname, function (err) {
			if (err) {
				res.send('上传失败');
				return;
			}
			req.session.avatar = req.session.username + extname;
			res.redirect('/cutavatar');
		});
	});
};

// 裁剪头像页面
exports.showCutAvatar = function (req, res, next) {
	res.render('cutavatar', {
		avatar: req.session.avatar
	});
};

// 裁剪头像业务
exports.docut = function (req, res, next) {
	let { w, h, l, t } = req.query;
	gm('./avatar/' +  req.session.avatar)
		.crop(w, h, l, t)
		.resize(100, 100, '!')
		.write('./avatar/' +  req.session.avatar, function (err) {
			if (err) {
				res.send('-1');
				return;
			}
			db.updateMany('users', { username: req.session.username }, {
				$set: { avatar: req.session.avatar }
			}, function (err) {
				if (err) {
					res.send('-2');
					return;
				}
				res.send('1');
			})
		});
};

// 发表说说业务
exports.doPost = function (req, res, next) {
	const fd = new formidable.IncomingForm();

	fd.parse(req, function (err, fields, files) {
		let username = req.session.username;
		let content = fields.content;

		if (!username) {
			res.send('-1');
			return;
		}

		db.insertOne('posts', {
			username,
			content,
			createtime: sillyDatetime.format(new Date(), 'YYYY-MM-DD HH:mm:ss')
		}, function (err, result) {
			if (err) {
				res.send('-3');
				return;
			}
			res.send('1');
		});
	});
};

// 获取所有的说说
exports.getAllPosts = function (req, res, next) {
	let page = parseInt(req.query.page);
	let perPage = parseInt(req.query.perPage);

	if (req.session.login != '1') {
		res.json({ "status": "error", "msg": "您未登录" });
		return;
	}
	db.find('posts', {}, {
		page,
		perPage,
		sort: { createtime: -1 }
	}, function (err, results) {
		if (err) {
			res.json({ "status": "error", "msg": "查询错误" });
			return;
		}
		let data = {
			"status": "success",
			"items": results
		}
		res.json(data);
	});
};

// 获取某个发表说说的用户信息
exports.getUserInfo = function (req, res, next) {
	let username = req.query.username;
	console.log(username);

	db.find('users', { username }, function (err, results) {
		if (err) {
			res.json({ "status": "error", "msg": "查询错误" });
			return;
		}
		if (results.length == 0) {
			res.json({ "status": "error", "msg": "未查询到该用户" });
			return;
		}
		let data = {
			id: results[0]._id,
			username: results[0].username,
			avatar: results[0].avatar,
		}
		res.json({ "status": "success", "data": data });
	});
};

// 获取说说总数
exports.getCounts = function (req, res, next) {
	db.getCount('posts', {}, function (err, count) {
		if (err) {
			res.json({ "status": "error", "msg": "查询说说总数失败" });
			return;
		}
		res.json({ "status": "success", "count": count });
	});
};

// 展示某个用户的个人主页
exports.showUserPosts = function (req, res, next) {
	let user = req.params.user;

	if (req.session.login != '1') {
		res.send('该页面需要登录');
		return;
	}

	db.find('posts', { username: user }, function (err, posts) {
		if (err) {
			res.send('查询说说失败');
			return;
		}
		db.find('users', { username: user }, function (err, users) {
			if (err) {
				res.send('查询用户信息失败');
				return;
			}
			res.render('userhome', {
				login: true,
				username: req.session.username,
				page: user == req.session.username ? 'my' : '',
				user,
				posts: posts,
				avatar: users[0].avatar
			});
		});
	});
};

// 获取所有注册的用户
exports.getUsers = function (req, res, next) {
	if (req.session.login != '1') {
		res.send('该页面需要登录');
		return;
	}

	db.find('users', {}, function (err, users) {
		if (err) {
			res.send('查询用户列表失败');
			return;
		}
		res.render('userlist', {
			login: true,
			username: req.session.username,
			page: 'users',
			userlist: users
		});
	});
};


