import Koa from 'koa'
import middleware from './middlewares'

const app = new Koa()
// const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || '3030'

middleware.parser(app)
middleware.routes(app)

app.listen(port, err => {
  if (err) {
    console.error(err)
  }
  console.log(`> listening on port ${port}`)
})
