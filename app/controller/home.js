const routers = [
  {
    path: '/lesson1',
    title: 'lesson1'
  },
  {
    path: '/lesson2',
    title: 'lesson2'
  },
  {
    path: '/lesson3',
    title: 'lesson3'
  },
  {
    path: '/lesson4',
    title: 'lesson4'
  }
]

const home = async ctx => {
  await ctx.render('home', {
    routers: routers
  })
}

module.exports = home
