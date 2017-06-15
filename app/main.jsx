'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'
import store from './store'

// containers
import root from './containers/root';
import BarChartContainer from './containers/BarChartContainer'

// components
import Jokes from './components/Jokes'
import NotFound from './components/NotFound'
import BarChart2 from './components/BarChart2'

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={root}>
        <IndexRedirect to="/jokes" />
        <Route path="/jokes" component={Jokes} />
        <Route path="/chart" component={BarChartContainer} />
        <Route path="/chart2" component={BarChart2} />
      </Route>
      <Route path='*' component={NotFound} />
    </Router>
  </Provider>,
  document.getElementById('main')
)
