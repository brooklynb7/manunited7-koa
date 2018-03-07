'use strict'

import serve from 'koa-static'
import mount from 'koa-mount'

export default app => {
  app.use(mount('/assets', serve('./assets')))
}
