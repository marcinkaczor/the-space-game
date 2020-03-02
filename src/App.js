import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import { ThemeProvider } from '@material-ui/styles'

import { withResourceProvider, withScoreProvider } from './components/Contexts'
import theme from './components/Theme'

import Home from './pages/Home'
import Battle from './pages/Battle'

import * as ROUTES from './constants/routes'

const App = () => (
  <ThemeProvider theme={theme}>
    <Router basename='/the-space-game'>
      <Switch>
        <Route exact path={ROUTES.HOME} component={Home} />
        <Route path={ROUTES.BATTLE} component={Battle} />
        <Redirect to={ROUTES.HOME} />
      </Switch>
    </Router>
  </ThemeProvider>
)

export default withScoreProvider(withResourceProvider(App))
