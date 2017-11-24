const merge = require('lodash/merge')
const local = require('../configs/local') || {}
const categoriesConfig = require('../configs/categories') || {}
const firebaseConfig = require('../configs/firebase') || {}

const config = {
  all: {
    env: process.env.NODE_ENV || 'development',
    isDev: process.env.NODE_ENV !== 'production',
    basename: process.env.PUBLIC_PATH,
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 3000,
    isBrowser: typeof window !== 'undefined',
    isServer: typeof window === 'undefined',
    apiUrl: 'https://jsonplaceholder.typicode.com',
    apis: {
      default: '/',
      root: 'https://api.foursquare.com/v2',
      lookup: '/venues/explore',
    },
    foursquare: {
      prefix: 'https://igx.4sqi.net/img/general/',
      sizes: {
        list: '500x250',
      },
    },
    googleMaps: {
      url: 'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places',
    },
  },
  test: {},
  development: {},
  production: {
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 8080,
    apiUrl: 'https://jsonplaceholder.typicode.com',
  },
}

module.exports = merge(
  config.all,
  config[config.all.env],
  local,
  categoriesConfig,
  firebaseConfig,
)