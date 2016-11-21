'use strict';

import React from 'react';
import { Link, IndexLink } from 'react-router';

export default class Navbar extends React.Component {
  constructor() {
    super();
  }
  render() {

    const { user } = this.props;

    const links = user ? [
      { to: '/', text: 'Landing Page' },
      { to: '/profile', text: 'Profile' },
      { to: '/assignments', text: 'Assignments' },
      { to: '/messages', text: 'Messages' },
      { to: '/logout', text: 'Logout' }
    ] : [
      { to: '/', text: 'Landing Page' },
      { to: '/login', text: 'Login' },
      { to: '/register', text: 'Register' },
    ];

    return (
      <nav>
        <ul>
          { links.map((obj, index) => {
            return <li key={ index }><Link to={ obj.to }>{ obj.text }</Link></li>;
          }) }
        </ul>
      </nav>
    );


  }
}
