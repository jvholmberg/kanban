'use strict';

import React from 'react';

import Navbar from '../components/Navbar/';

export default class Login extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Navbar />
        <div>
          <h1>Login</h1>
          <form action='/user/login' method='post'>
            <label>
              Username
              <input type='text' name='username' />
            </label>
            <label>
              Password
              <input type='password' name='password' />
            </label>
            <button class='btn success' type='submit'>Login</button>
          </form>
        </div>
      </div>
    );
  }
}
