'use strict';

import React from 'react';
import { connect } from 'react-redux';

import * as user from '../actions/user';
import * as diary from '../actions/diary';

import Navbar from '../components/Navbar/';
import HistoryBar from '../components/HistoryBar/';

@connect((store) => {
  return {
    user: store.user,
    diary: store.diary
  };
})
export default class Diary extends React.Component {

  constructor() {
    super();


  }
  componentWillMount() {
    this.props.dispatch(user.me());
    this.props.dispatch(diary.getActivities());
  }

  render() {
    return (
      <div>
        <Navbar user={this.props.user.user} />
        <HistoryBar activities={this.props.diary.diary} />
      </div>
    );
  }
}
