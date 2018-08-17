const router = require('koa-router')()

const routers = [
  {
    path: '/lesson1',
    controller: require('./controller/lesson1')
  },
  {
    path: '/lesson2',
    controller: require('./controller/lesson2')
  }
]

routers.forEach(({ path, controller }) => {
  router.get(path, controller)
})

module.exports = router