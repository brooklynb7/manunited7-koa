'use strict'

import routers from '../routes'
import mount from 'koa-mount'

const jsonMiddleware = async (ctx, next) => {
  ctx.type = 'json'
  await next()
}

const pageNotFound = async ctx => {
  // we need to explicitly set 404 here
  // so that koa doesn't assign 200 on body=
  ctx.status = 404
  switch (ctx.type) {
    case 'application/json':
      ctx.body = {
        message: 'API Not Found'
      }
      break
    default:
      ctx.type = 'text'
      ctx.body = 'Page Not Found'
  }
}

const internalError = async ctx => {
  // we need to explicitly set 404 here
  // so that koa doesn't assign 200 on body=
  ctx.status = 500
  switch (ctx.type) {
    case 'application/json':
      ctx.body = {
        message: 'Internal Error'
      }
      break
    default:
      ctx.type = 'text'
      ctx.body = 'Internal Error'
  }
}

const error = async (ctx, next) => {
  try {
    await next()
  } catch (err) {
    if (ctx.status === 404) {
      pageNotFound(ctx)
    } else {
      internalError(ctx)
    }
  }
}

export default app => {
  app.use(mount('/api', jsonMiddleware))

  routers.twitter(app)

  app.use(error)

  app.use(async => {
    throw new Error('boom boom')
  })
}
