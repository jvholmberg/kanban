'use strict';

import React from 'react';
import { connect } from 'react-redux';

import * as user from '../actions/user';

@connect((store) => {
  return {
    user: store.user,
  };
})
export default class Profile extends React.Component {

  constructor() {
    super();


  }
  componentWillMount() {
    this.props.dispatch(user.fetch());
    console.log(this.props);
  }

  render() {
    return (
      <div>
        <h1>{ this.props.user.user.username }</h1>
      </div>
    );
  }
}
