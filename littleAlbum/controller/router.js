const file = require('../models/file.js');
const formidable = require('formidable');
const path = require('path');
const fs = require('fs');
const sillyDatetime = require('silly-datetime');

exports.showIndex = function (req, res, next) {
	// 这就是nodejs的编程思想，就是所有的东西都是异步的，数据不是return回来的，
	// 而是通过调用高层函数提供的回调函数，把数据当作回调函数的参数来使用。
	file.getAllAlbums(function (err, allAlbums) {
		if (err) {
			// res.send(err);
			next(); // 将所有错误都流转到下一个中间件处理，最后将都到404页面。
			return;
		}
		res.render('index', {
			"albums": allAlbums
		});
	});
};

exports.show404 = function (req, res) {
	res.render('err');
};

exports.showAlbum = function (req, res, next) {
	let albumName = req.params.albumName;
	file.getImagesByAlbumName(albumName, function (err, images) {
		if (err) {
			next();
			return;
		}
		res.render('album', {
			"albumName": albumName,
			"images": images
		});
	});
};

exports.showUpload = function (req, res, next) {
	file.getAllAlbums(function (err, allAlbums) {
		if (err) {
			next();
			return;
		}
		res.render('upload', {
			"albums": allAlbums
		});
	});
};

exports.doUpload = function (req, res, next) {
	let form = new formidable.IncomingForm();
	// 设置临时的文件上传路径，因为formidable插件必须预先设置上传路径
	// normalize处理路径，可以将/../这样的回溯路径进行处理
	form.uploadDir = path.normalize(__dirname + '/../tempUpload');

	form.parse(req, function(err, fields, files) {
    // console.log(fields);
    // console.log(files);
    // 判断上传图片大小，超出限制删除图片
    let size = files.picture.size;
    if (size > 1024 * 1024) {
    	res.send('上传的图片不能大于1M');
    	fs.unlink(files.picture.path, function (err) {
    		// console.log(err);
    	});
    	return;
    }
    // 改名规则
    let date = sillyDatetime.format(new Date(), 'YYYYMMDDHHmmss');
    let randomNumber = parseInt(Math.random()*89999 + 10000);
    let extname = path.extname(files.picture.name);

    let dir = fields.directory

    let oldPath = files.picture.path;
    let newPath = path.normalize(__dirname + '/../upload/' + dir + '/' + date + randomNumber + extname);
    // 使用fs.rename进行改名并移动文件到指定文件夹
    fs.rename(oldPath, newPath, function (err) {
    	if (err) {
    		res.send('改名失败');
    		return;
    	}
    });
    res.send('上传成功');
  });
};




