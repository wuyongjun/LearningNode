const fs = require('fs');
const gm = require('gm');
const path = require('path');

// 实现图片处理功能：1、安装graphicsmagick；2、npm i gm -g
// ! 忽略尺寸比例
/*
gm(path.join(__dirname, '/public/images/1.jpeg'))
	.resize(50, 50, '!')
	.write(path.join(__dirname, '/public/images/2.png'), function (err) {
		if (err) { console.log(err); }
	});
*/

// crop(width, height, x, y)
gm('./public/images/1.jpeg').crop(500, 500, 100, 100).write('./1.png', function (err) {
	if (err) { console.log(err); }
});