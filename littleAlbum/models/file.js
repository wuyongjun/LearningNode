// 专门用来处理文件相关的业务逻辑 重点：解决异步函数返回值问题
// 使用callback，promise，或者async/await
const fs = require('fs');
const path = require('path');

// 获取所有的相册文件夹
exports.getAllAlbums = function (callback) {
	console.log('getAllAlbums');
	fs.readdir(path.join(__dirname, '../upload'), function (err, files) {
		if (err) {
			callback('没有找到upload文件夹', null);
			return;
		}
		let allAlbums = [];

		// 这里需要一个迭代器函数来完成异步操作的循环
		(function iterator (i) {
			if (i === files.length) {
				callback(null, allAlbums);
				return;
			}
			fs.stat(path.join(__dirname, '../upload/', files[i]), function (err, stats) {
				if (err) {
					callback('没有找到' + files[i] + '文件', null);
					return;
				}
				if (stats.isDirectory()) {
					allAlbums.push(files[i]);
				}
				iterator(i + 1);
			});
		})(0);
	});
};
// 获取相册中的所有图片文件
exports.getImagesByAlbumName = function (albumName, callback) {
	console.log('getImagesByAlbumName');
	fs.readdir(path.join(__dirname, '../upload/', albumName), function (err, files) {
		let images = [];
		if (err) {
			console.log(err);
			callback('没有找到' + albumName + '文件夹', null);
			return;
		}
		(function iterator (i) {
			if (i === files.length) {
				callback(null, images);
				return;
			}
			let filePath = path.join(__dirname, '../upload/', albumName, '/', files[i]);
			fs.stat(filePath, function (err, stats) {
				if (err) {
					callback('没有找到' + files[i] + '文件');
				}
				if (stats.isFile()) {
					images.push(files[i]);
				}
				iterator(i + 1);
			});
		})(0);
	});
};


