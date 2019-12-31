const express = require('express');
const fd = require('formidable');
const db = require('./models/db.js');
const settings = require('./settings.js');
const ObjectId = require('mongodb').ObjectId

let app = express();

app.set('view engine', 'ejs');

app.use(express.static('./public'));

app.get('/', function (req, res) {
	
	// db.getCount(settings.collection, {}, function (count) {
	// 	res.render('index', {
	// 		count: Math.ceil(count / 4)
	// 	});
	// });
	res.render('index');
});

app.post('/sendMessage', function (req, res) {
	let form = new fd.IncomingForm();

	form.parse(req, function (err, fields) {
		let { name, content } = fields;

		db.insertOne(settings.collection, {
			name, 
			content,
			createtime: new Date()
		}, function (err, result) {
			if (err) {
				res.json({ "status" : "error", "message": "留言失败" });
				return;
			}
			res.json({ "status" : "success", "message" : "留言成功" });
		});
	});
});

app.get('/removeMessage', function (req, res) {
	let id = req.query.id;
	db.deleteMany(settings.collection, { _id: ObjectId(id) }, function (err, result) {
		if (err) {
			res.render('remove', {
				message: '对不起，删除失败'
			});
			return;
		}
		res.render('remove', {
			message: '留言删除成功'
		});
		// res.redirect('/');
	});
});

app.get('/getList', function (req, res) {
	let perPage = 4;
	let page = req.query.page;

	db.find(settings.collection, {}, {
			page,
			perPage,
			"sort": { "createtime": -1 }
		}, function (err, results) {
		if (err) {
			res.json({ "status" : "error", "message": "获取留言失败" });
			return;
		}
		res.json({ "status" : "success", "data" : results });
	});
});

app.get('/count', function (req, res) {
	// db.getCount(settings.collection, {}, function (count) {
	// 	res.json({ "status": "success", data: count });
	// });
	db.getCount(settings.collection, {}, function (err, count) {
		if (err) {
			res.json({ "status" : "error", "message": "获取总数失败" })
			return;
		}
		res.json({ "status" : "success", "data" : count })
	});
});

app.listen(4000);