'use strict';

import React from 'react';
import { Link, IndexLink } from 'react-router';

import MyIcon from './MyIcon/';

export default class Navbar extends React.Component {
  constructor() {
    super();
  }
  render() {

    const { user } = this.props;

    return (
      <nav>
        <MyIcon icon='user' size='s' text='My Profile' pos='right' />
        <MyIcon icon='bug' size='s' text='Reported bugs' pos='right' />
        <MyIcon icon='assignment' size='s' text='Assignments' pos='bottom' />
        <MyIcon icon='cog' size='s' text='Settings' pos='bottom' />
        <MyIcon icon='help' size='s' text='Help' pos='bottom' />
        <MyIcon icon='mail' size='s' text='Messages' pos='bottom' />
      </nav>
    );
  }
}
