// 链接数据库示例
const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const app = express();

const url = 'mongodb://127.0.0.1:27017';

const dbName = 'test';

const client = new MongoClient(url, { useUnifiedTopology: true });

const insertDocument = function (db, callback) {
	let collection = db.collection('student');

	collection.insertMany([
		{ name: 'xiaoming', age: 18 },
		{ name: 'xiaowu', age: 17 }
	], function (err, result) {
		assert.equal(null, err);
		console.log('insert documents successfully');
		callback(result);
	})
};

app.get('/', function (req, res) {
	client.connect(function (err) {
		assert.equal(null, err);
		const db = client.db(dbName);

		insertDocument(db, function (result) {
			res.send(result);
			client.close();
		});
	});
});

app.listen(3000);