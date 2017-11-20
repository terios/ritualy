const { middleware: thunkMiddleware } = require('redux-saga-thunk')
const { logger: loggerMiddleware } = require(`redux-logger`);

const req = require.context('.', true, /\.\/.+\/middleware\.js$/)

module.exports = req.keys()
  .map(key => req(key).default)
  .concat([
    loggerMiddleware,
    thunkMiddleware,
  ])
