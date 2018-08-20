const cheerio = require('cheerio')
const superAgent = require('superagent')

const url = 'https://juejin.im/welcome/frontend'

const lesson3 = async ctx => {
  const list = []
  const {err, res} = await superAgent.get(url)
  const $ = cheerio.load(res.text, {decodeEntities: false})
  $('.entry-list .item .title').each((idx, element) => {
    const $element = $(element)
    list.push({
      title: $element.text(),
      href: `https://juejin.im${$element.attr('href')}`
    })
  })
  await ctx.render('lesson3', {
    list
  })
}

module.exports = lesson3
