const router = require('koa-router')()

const routers = [
  {
    path: '/lesson1',
    controller: require('./controller/lesson1')
  },
  {
    path: '/lesson2',
    controller: require('./controller/lesson2')
  },
  {
    path: '/lesson3',
    controller: require('./controller/lesson3')
  },
  {
    path: '/lesson4',
    controller: require('./controller/lesson4')
  }
]

routers.forEach(({ path, controller }) => {
  router.get(path, controller)
})

module.exports = router
