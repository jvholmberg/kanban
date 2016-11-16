'use strict';

import React from 'react';
import { Link, IndexLink } from 'react-router';

import MyIcon from './myIcon';

export default class Navbar extends React.Component {
  constructor() {
    super();
  }
  render() {

    const { user } = this.props;

    return (
      <nav>
        <MyIcon icon='user' size='s' text='My Profile' />
        <MyIcon icon='bug' size='s' text='Reported bugs' />
        <MyIcon icon='assignment' size='s' text='Assignments' />
        <MyIcon icon='cog' size='s' text='Settings' />
        <MyIcon icon='help' size='s' text='Help' />
        <MyIcon icon='mail' size='s' text='Messages' />
      </nav>
    );
  }
}
