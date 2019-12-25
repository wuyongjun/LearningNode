const express = require('express');
const router = require('./controller');
const formidable = require('formidable');

let app = express();

// 设置模版引擎
app.set('view engine', 'ejs');

// 提供静态服务
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/upload'));

// 首页路由 注意：这里showIndex使用的是中间件，不需要传递req和res参数
app.get('/', router.showIndex);

app.get('/upload', router.showUpload);

app.post('/upload', router.doUpload);

app.get('/:albumName', router.showAlbum);

app.use(router.show404);

app.listen(3000);