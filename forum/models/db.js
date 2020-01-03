// 对数据库操作的封装
const MongoClient = require('mongodb').MongoClient;
const settings = require('../settings.js');

const url = settings.dbURL;
const dbName = settings.dbName;

function _connectDb (callback) {
	const client = new MongoClient(url, { useUnifiedTopology: true });
	client.connect(function (err) {
		if (err) {
			callback(err, null);
			return;
		}
		console.log('数据库连接成功。');
		callback(err, client);
	});
}

init();

// 初始化操作，主要是为集合建立索引
function init () {
	_connectDb(function (err, client) {
		const db = client.db(dbName);
		db.collection('users').createIndex({ username: 1 }, { unique: true }, function (err) {
			if (err) {
				console.log('users集合创建索引失败');
				return;
			}
			console.log('users集合创建索引成功');
			client.close();
		});
	});
}

exports.insertOne = function (collectionName, condition, callback) {
	_connectDb(function (err, client) {
		const db = client.db(dbName);
		db.collection(collectionName).insertOne(condition, function (err, result) {
			client.close();
			callback(err, result);
		});
	});
}

exports.insertMany = function (collectionName, arr, callback) {

};

exports.find = function (collectionName, condition, C, D) {
	let callback = null;
	let opts = null;
	if (arguments.length === 3) {
		callback = C;
		opts = {
			page: 0,
			perPage: 0,
			sort: {}
		}
	} else if (arguments.length === 4) {
		opts = {
			page: C.page || 0,
			perPage: C.perPage || 0,
			sort: C.sort || {}
		};
		callback = D;
	} else {
		throw Error('此find方法所接受的参数必须为3个或者4个');
		return;
	}
	_connectDb(function (err, client) {
		let results = [];
		let { page, perPage, sort } = opts;
		const db = client.db(dbName);
		let cursor = db.collection(collectionName)
			.find(condition)
			.limit(perPage)
			.skip((page - 1) * perPage)
			.sort(sort);
		cursor.each(function (err, result) {
			if (result !== null) {
				results.push(result);
			} else {
				callback(err, results);
				client.close(); // 关闭数据库 important
			}
		});
	});
};

exports.findOne = function (collectionName, condition, callback) {

};

exports.updateOne = function (collectionName, condition, json, callback) {

};

exports.updateMany = function (collectionName, condition, json, callback) {
	_connectDb(function (err, client) {
		client.db(dbName)
			.collection(collectionName)
			.updateMany(condition, json, function (err, result) {
				callback(err, result);
				client.close();
			});
	});
};

exports.deleteOne = function (collectionName, condition, callback) {

};

exports.deleteMany = function (collectionName, condition, callback) {
	_connectDb(function (err, client) {
		let db = client.db(dbName);
		console.log(condition);
		db.collection(collectionName).deleteMany(condition, function (err, result) {
			callback(err, result);
			client.close();
		});
	});
};

// 获取总数
exports.getCount = function (collectionName, condition, callback) {
	_connectDb(function (err, client) {
		let db = client.db(dbName);
		// db.collection(collectionName).countDocuments(condition).then(function (count) {
		// 	callback(count);
		// 	client.close();
		// });
		db.collection(collectionName).find(condition).count(function (err, count) {
			callback(err, count);
			client.close();
		});
	});
};




