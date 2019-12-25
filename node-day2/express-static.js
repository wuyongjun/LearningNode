// 提供静态服务
const express = require('express');
const path = require('path');

let app = express();

// 中间件, 通常静态服务都写在最上方，可以约束我们设计路由时产生冲突
// ** app.use(express.static(__dirname + './public')) **
// app.use('/dexian', express.static(__dirname + '/public'));
app.use(express.static(path.join(__dirname, './public')))

app.get('/', function (req, res) {
	res.send('本服务器提供一个静态服务。');
});

app.listen(3000);