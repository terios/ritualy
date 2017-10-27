const merge = require('lodash/merge')
const local = require('../configs/local') || {}
const categories = require('../configs/categories') || {}

const config = {
  all: {
    env: process.env.NODE_ENV || 'development',
    isDev: process.env.NODE_ENV !== 'production',
    basename: process.env.PUBLIC_PATH,
    isBrowser: typeof window !== 'undefined',
    apis: {
      default: '/',
      root: 'https://api.foursquare.com/v2',
      lookup: '/venues/explore',
    },
    foursquare: {
      prefix: 'https://igx.4sqi.net/img/general/',
      sizes: {
        list: '500x250'
      }
    }
  },
  test: {},
  development: {},
  production: {
    apis: {
      default: '/',
      root: 'https://api.foursquare.com/v2',
      lookup: '/venues/explore',
    },
  },
}

module.exports = merge(config.all, config[config.all.env], local, categories)
