const utils = require('utility')

const lesson2 = ctx => {
  const q = ctx.query.q
  let md5Value
  ctx.response.type = 'text/html'
  ctx.response.body = `<h1>请填入参数q</h1>`
  if (q) {
    md5Value = utils.md5(q)
    ctx.response.body = `<h1>md5：${md5Value}</h1>`
  }
}

module.exports = lesson2
