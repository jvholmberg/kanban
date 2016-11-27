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
      { to: '/profile', text: 'Profile' },
      { to: '/assignments', text: 'Assignments' },
      { to: '/messages', text: 'Messages' },
      { to: '/logout', text: 'Logout' }
    ] : [];

    return (
      <nav>
        <ul>
          { links.map((obj, index) => {
            if (obj.to === '/logout')
              return <li key={ index }><a href={ obj.to }>{ obj.text }</a></li>;
            return <li key={ index }><Link to={ obj.to }>{ obj.text }</Link></li>;
          }) }
        </ul>
      </nav>
    );


  }
}
