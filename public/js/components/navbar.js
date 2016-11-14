'use strict';

import React from 'react';
import { Link, IndexLink } from 'react-router';

let s = {
  root: 'navbar_root',
  list: 'navbar_list',
  item: 'navbar_item',
  link: 'navbar_link',
  activeLink: 'navbar_link_active'
};

export default class Navbar extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <nav className={s.root}>
        <ul className={s.list}>
          <li className={s.item}><IndexLink to='profile' className={s.link} activeClassName={s.activeLink +' ' + s.link}>Profile</IndexLink></li>
          <li className={s.item}><Link to='dashboard' className={s.link} activeClassName={s.activeLink +' ' + s.link}>Dashboard</Link></li>
        </ul>
      </nav>
    );
  }
}
