'use strict'

export default {
  app: {
    name: 'manunited7',
    version: '0.0.0'
  },
  database: {
    driver: 'mongo',
    host: 'localhost',
    port: 27017,
    dbname: '',
    username: 'admin',
    password: '123456',
    options: {}
  },
  server: {
    port: 3030
  },
  static_dir: {
    root: './static',
    options: {}
  },
  session: {
    secretKey: 'something'
  },
  twitter: {
    apiHost: '',
    consumerKey: '',
    consumerSecret: '',
    accessToken: '',
    accessTokenSecret: ''
  }
}
