'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'

import store from './store'
import root from './containers/root';
import Jokes from './components/Jokes'
import Login from './components/Login'
import WhoAmI from './components/WhoAmI'
import NotFound from './components/NotFound'

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={root}>
        <IndexRedirect to="/jokes" />
        <Route path="/jokes" component={Jokes} />
      </Route>
      <Route path='*' component={NotFound} />
    </Router>
  </Provider>,
  document.getElementById('main')
)
