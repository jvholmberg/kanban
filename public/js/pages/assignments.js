'use strict';

import React from 'react';
import { connect } from 'react-redux';

import * as user from '../actions/user';
import Navbar from '../components/Navbar/';

@connect((store) => {
  return {
    user: store.user
  };
})
export default class Assignments extends React.Component {

  constructor() {
    super();


  }
  componentWillMount() {
    this.props.dispatch(user.fetch());

  }

  render() {
    return (
      <div>
        <Navbar user={this.props.user.user} />
      </div>
    );
  }
}