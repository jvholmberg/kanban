'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { Provider } from 'react-redux';
import store from './store';

import Layout from './layout';
import Profile from './pages/profile';
import Assignments from './pages/assignments';
import Messages from './pages/messages';

const app = document.getElementById('app');

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={Layout}>
        <IndexRoute component={Profile}></IndexRoute>
        <Route path="profile" component={Profile}></Route>
        <Route path="assignments" component={Assignments}></Route>
        <Route path="messages" component={Messages}></Route>
      </Route>
    </Router>
  </Provider>
, app);
