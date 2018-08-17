const Koa = require('koa')
const logger = require('koa-logger')
const router = require('./app/router.js')

const app = new Koa  //创建一个APP实例

app.use(logger())

app
  .use(router.routes())
  .use(router.allowedMethods())


//监听端口，启动服务
app.listen(3000)