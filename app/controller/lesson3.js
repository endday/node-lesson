const cheerio = require('cheerio')
const superAgent = require('superagent')

const url = 'http://www.meituri.com/a/22638/4.html'

const lesson3 = async ctx => {
  const items = []
  const {err, res} = await superAgent.get(url)
  const $ = cheerio.load(res.text, {decodeEntities: false})
  $('.content img').each((idx, element) => {
    const $element = $(element)
    items.push({
      alt: $element.attr('alt'),
      href: $element.attr('href'),
      src: $element.attr('src')
    })
  })
  await ctx.render('lesson3', {
    data: items
  })
}

module.exports = lesson3
