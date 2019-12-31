const Koa = require('koa');
const Router = require('koa-router');

let app = new Koa();

let router = new Router;

router.get('/', async ctx => {
	ctx.body = '欢迎使用koa';
});

app.use(router.routes());

app.listen(3000);