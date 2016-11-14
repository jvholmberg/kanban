'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { Provider } from 'react-redux';
import store from './store';

import Layout from './layout';
import Profile from './pages/profile';
import Dashboard from './pages/dashboard';

const app = document.getElementById('app');

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={Layout}>
        <IndexRoute component={Profile}></IndexRoute>
        <Route path="profile" component={Profile}></Route>
        <Route path="dashboard" component={Dashboard}></Route>
      </Route>
    </Router>
  </Provider>
, app);
