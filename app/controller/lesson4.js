const cheerio = require('cheerio')
const superAgent = require('superagent')
const async = require('async')

const url = 'https://juejin.im/welcome/frontend'

const getUrlArray = async () => {
  const urlArray = []
  const { err, res } = await superAgent.get(url)
  const $ = cheerio.load(res.text, { decodeEntities: false })
  $('.entry-list .item .title').each((idx, element) => {
    const $element = $(element)
    urlArray.push(`https://juejin.im${$element.attr('href')}`)
  })
  return urlArray
}

const parseHtml = async (url) => {
  const { err, res } = await superAgent.get(url)
  const $ = cheerio.load(res.text, { decodeEntities: false })
  return {
    time: $('.author-info-box .time').text(),
    title: $('.article-title').text(),
    href: url
  }
}

const getUrlBody = (array) => {
  return new Promise(resolve => {
    async.mapLimit(array, 4, async function (url) {
      return parseHtml(url)
    }, (err, results) => {
      if (err) throw err
      resolve(results)
    })
  })
}

const lesson4 = async ctx => {
  const urlArray = await getUrlArray()
  const resData = await getUrlBody(urlArray)
  await ctx.render('lesson4', {
    list: resData
  })
}

module.exports = lesson4
