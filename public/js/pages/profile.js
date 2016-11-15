'use strict';

import React from 'react';
import { connect } from 'react-redux';

import * as user from '../actions/user';
import MyUser from '../components/myUser';

@connect((store) => {
  return {
    user: store.user
  };
})
export default class Profile extends React.Component {

  constructor() {
    super();


  }
  componentWillMount() {
    this.props.dispatch(user.fetch());

  }

  render() {
    return (
      <div>
        <MyUser user={this.props.user.user} />
      </div>
    );
  }
}
