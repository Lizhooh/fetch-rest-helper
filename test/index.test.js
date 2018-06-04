const Koa = require('koa');
const Helper = require('../src');
const koaRestHelper = require('koa-rest-helper');
const bodyParser = require('koa-body');

const app = new Koa();
const rest = new koaRestHelper('/users', {
    index(ctx, next) {
        ctx.body = { method: ctx.method, path: ctx.url };
    },
    show(ctx, next) {
        ctx.body = { method: ctx.method, path: ctx.url };
    },
    create(ctx, next) {
        const data = ctx.request.body;
        ctx.body = { method: ctx.method, path: ctx.url, data };
    },
    update(ctx, next) {
        ctx.body = { method: ctx.method, path: ctx.url };
    },
    remove(ctx, next) {
        ctx.body = { method: ctx.method, path: ctx.url };
    },
    edit(ctx, next) {
        ctx.body = { method: ctx.method, path: ctx.url };
    },
    new(ctx, next) {
        ctx.body = { method: ctx.method, path: ctx.url };
    }
})

app
    .use(bodyParser())
    .use(rest.routes())
    .listen(3000, () => {
        const user = new Helper('/users', { host: 'http://127.0.0.1:3000' });
        user.index().then(res => console.log(res));
        user.show(1).then(res => console.log(res));
        user.create({ body: { name: 'abc' } }).then(res => console.log(res));
        user.update(1).then(res => console.log(res));
        user.remove(1).then(res => console.log(res));
        user.edit(1).then(res => console.log(res));
        user.new().then(res => console.log(res));
    });
