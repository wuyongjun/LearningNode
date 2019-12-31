const Koa = require('koa');
const Router = require('koa-router');
const static = require('koa-static');
const news = require('./data/news.json');

let app = new Koa();

let router = new Router();

router.get('/getList', async ctx => {
	let { page, channel } = ctx.query;
	let PAZE_SIZE = 20;
	let tmp = news.RECORDS;
	if (channel) {
		tmp = tmp.filter(item => item.channel === channel);
	}
	let list = tmp.slice((page - 1) * PAZE_SIZE, page * PAZE_SIZE);
	let sumPage = Math.ceil(tmp.length / PAZE_SIZE);
	ctx.body = {
		items: list,
		total: sumPage
	}
});

app.use(router.routes());

app.use(static('./public'));

app.listen(3000);