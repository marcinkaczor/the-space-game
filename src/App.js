import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/styles'

import { withResourceContext } from './components/Contexts'
import theme from './components/Theme'

import Home from './pages/Home'
import Battle from './pages/Battle'

import * as ROUTES from './constants/routes'

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Router>
      <Switch>
        <Route exact path={ROUTES.HOME} component={Home} />
        <Route path={ROUTES.BATTLE} component={Battle} />
        <Redirect to={ROUTES.HOME} />
      </Switch>
    </Router>
  </ThemeProvider>
)

export default withResourceContext(App)
