'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'
import store from './store'

// containers
import root from './containers/root';

// components
import Jokes from './components/Jokes'
import NotFound from './components/NotFound'
import Chart from './components/Chart'

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={root}>
        <IndexRedirect to="/jokes" />
        <Route path="/jokes" component={Jokes} />
        <Route path="/chart" component={Chart} />
      </Route>
      <Route path='*' component={NotFound} />
    </Router>
  </Provider>,
  document.getElementById('main')
)
