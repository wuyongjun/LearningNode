const express = require('express');
const db = require('./models/db.js');
const settings = require('./settings.js');

const app = express();

app.get('/insert', function (req, res) {
	let json = {
		name: '小王',
		age: parseInt(Math.random() * 89 + 10)
	}
	db.insertOne(settings.collection, json, function (err, result) {
		if (err) {
			res.send('数据写入失败');
			return;
		}
		res.send(result);
	});
});

app.get('/read', function (req, res) {
	let page = parseInt(req.query.page) || 1;
	let perPage = parseInt(req.query.perPage) || 5;
	let opts = {
		page,
		perPage
	}

	db.find(settings.collection, {}, opts, function (err, result) {
		if (err) {
			res.send('数据读取失败');
			return;
		}
		res.json({ "result": result });
	});
});

app.get('/remove', function (req, res) {
	db.deleteMany(settings.collection, { id: parseInt(req.query.id) }, function (err, result) {
		res.send(result)
	});
});

app.get('/update', function (req, res) {
	db.updateMany(settings.collection, { postId: 1 }, { $set: { name: '科比' } },
		function (err, result) {
			if (err) {
				res.send('数据更新失败');
				return;
			}
			res.send(result);
		});
});

app.listen(3000);