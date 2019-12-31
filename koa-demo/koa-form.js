const Koa = require('koa');
const Router = require('koa-router');
const betterBody = require('koa-better-body');
const convert = require('koa-convert');
const static = require('koa-static');

let app = new Koa();
let router = new Router();

// convert是将generator（koa-better-body）实现的代码转换成async/await实现
app.use(convert(betterBody()));

router.get('/', async ctx => {
	ctx.body = ctx.query.username + ':' + ctx.query.password;
});

router.post('/', async ctx => {
	console.log(ctx.request.fields);
	ctx.body = ctx.request.fields.username + ':' + ctx.request.fields.password;
});

app.use(router.routes());

app.use(static('./public'));

app.listen(3000);