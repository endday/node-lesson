const lesson1 = ctx => {
  ctx.response.type = 'text/html'
  ctx.response.body = '<h1>Hello, koa2!</h1>'
}

module.exports = lesson1
