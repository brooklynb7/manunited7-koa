'use strict'

import mount from 'koa-mount'
import Router from 'koa-trie-router'
import twitter from '../controllers/twitter'

const apiRouter = new Router()

export default app => {
  apiRouter.get('/united-members-timeline', twitter.getUnitedMembersTimeline)

  app.use(mount('/api/twitter', apiRouter.middleware()))
}
