import 'react-hot-loader/patch'
import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { basename } from 'config'
import configureStore from 'store/configure'
import api from 'services/api'
import App from 'components/App'

import { auth, provider, firebaseStore } from 'firebase'
import injectTapEventPlugin from 'react-tap-event-plugin'

import './less/index.less'

injectTapEventPlugin()

const store = configureStore({}, { api: api.create(), auth, provider })
firebaseStore(store)

const renderApp = () => (
  <Provider store={store}>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </Provider>
)

const root = document.getElementById('app')
render(renderApp(), root)

if (module.hot) {
  console.log('something in here')

  module.hot.accept('components/App', () => {
    console.log('reloading')
    require('components/App')
    render(renderApp(), root)
  })
}
