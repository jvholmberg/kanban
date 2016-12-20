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
              Email
              <input className='form-control' type='text' name='username' />
            </label>
            <label>
              Password
              <input className='form-control' type='password' name='password' />
            </label>
            <button className='btn primary2' type='submit'>Login</button>
          </form>
        </div>
      </div>
    );
  }
}
