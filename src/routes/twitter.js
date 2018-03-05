import mount from 'koa-mount'
import Router from 'koa-trie-router'

const apiRouter = new Router()

export default app => {
  apiRouter.get('/test', async ctx => {
    ctx.body = {
      test: 'test'
    }
  })

  apiRouter.get('/test1', async ctx => {
    ctx.body = 'test1'
  })

  app.use(mount('/api/twitter', apiRouter.middleware()))
}
