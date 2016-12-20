'use strict';

import React from 'react';
import { connect } from 'react-redux';

import * as user from '../actions/user';
import * as diary from '../actions/diary';

import Navbar from '../components/Navbar/';
import Diary from '../components/Diary/';
import Workout from '../components/Workout/';

@connect((store) => {
  return {
    user: store.user,
    diary: store.diary
  };
})
export default class Dashboard extends React.Component {

  componentWillMount() {
    this.props.dispatch(user.me());
    this.props.dispatch(diary.get());

  }

  render() {

    let mappedWorkouts = this.props.diary.diary.workouts.map((workout, index) => {
      return <Workout key={index} data={workout} />
    });
    return (
      <div>
        <Navbar user={this.props.user.user} />

        { mappedWorkouts }
      </div>
    );
  }
}
