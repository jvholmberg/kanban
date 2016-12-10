'use strict';

import React from 'react';

import Navbar from '../components/Navbar/';

export default class Register extends React.Component {

  constructor() {
    super();


  }

  render() {
    return (
      <div>
        <Navbar />
        <h1>Register</h1>
        <form action='/user/create' method='post'>
          <label>
            Username
            <input className='form-control' type='text' name='username' />
          </label><br/>
          <label>
            Display Name
            <input className='form-control' type='text' name='displayName' />
          </label><br/>
          <label>
            Password
            <input className='form-control' type='password' name='password' />
          </label><br/>
          <label>
            Confirm Password
            <input className='form-control' type='password' name='password2' />
          </label><br/>
          <button className='btn primary2' type='submit'>Register</button>
        </form>
      </div>
    );
  }
}
