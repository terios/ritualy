import React from 'react'
import { Switch, Route } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

import { HomePage, LoginPage } from 'components'
import theme from './themes/default'

const App = () => {
  return (
    <MuiThemeProvider muiTheme={getMuiTheme(theme)}>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/login" component={LoginPage} exact />
      </Switch>
    </MuiThemeProvider>
  )
}

export default App
