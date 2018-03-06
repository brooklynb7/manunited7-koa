'use strict'

import rp from 'request-promise'
import config from '../config'

const API_HOST = config.twitter.apiHost
const CONSUMER_KEY = config.twitter.consumerKey
const CONSUMER_SECRET = config.twitter.consumerSecret
const ACCESS_TOKEN = config.twitter.accessToken
const ACCESS_TOKEN_SECRET = config.twitter.accessTokenSecret

const getListTimelineUrl = name => {
  return `/lists/statuses.json?slug=${name}&owner_screen_name=brooklynb7_&count=20`
}

const generateOAuthRequestOption = apiUrl => {
  const requestOption = {
    url: API_HOST + apiUrl,
    oauth: {
      consumer_key: CONSUMER_KEY,
      consumer_secret: CONSUMER_SECRET,
      token: ACCESS_TOKEN,
      token_secret: ACCESS_TOKEN_SECRET
    },
    json: true
  }
  return requestOption
}

const getUnitedMembersTimeline = async ctx => {
  const data = await rp.get(
    generateOAuthRequestOption(getListTimelineUrl('unitedMembers'))
  )
  ctx.body = data
}

export default { getUnitedMembersTimeline }
