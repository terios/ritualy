import 'react-hot-loader/patch'
import 'babel-polyfill'
import React from 'react'
import { hydrate } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { ServerStateProvider } from 'react-router-server'

import { auth, provider, firebaseStore } from 'firebase'
import { basename } from 'config'
import configureStore from 'store/configure'
import api from 'services/api'
import App from 'components/App'

import injectTapEventPlugin from 'react-tap-event-plugin'

injectTapEventPlugin()

const serverState = window.__SERVER_STATE__
const initialState = window.__INITIAL_STATE__
const store = configureStore(initialState, { api: api.create(), auth, provider })
firebaseStore(store)

const renderApp = () => (
  <ServerStateProvider state={serverState}>
    <Provider store={store}>
      <BrowserRouter basename={basename}>
        <App />
      </BrowserRouter>
    </Provider>
  </ServerStateProvider>
)

const root = document.getElementById('app')
hydrate(renderApp(), root)

if (module.hot) {
  module.hot.accept('components/App', () => {
    require('components/App')
    hydrate(renderApp(), root)
  })
}
