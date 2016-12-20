'use strict';

import React from 'react';
import DiaryList from './List/';

export default class Diary extends React.Component {
  constructor() {
    super();
  }

  addActivity() {
    console.log('lol');
  }

  render() {
    var activities = this.props.activities.activities;
    return (
      <div>
        <DiaryList activities={this.props.activities} addActivity={this.addActivity} />
        <div>
          something here
        </div>
      </div>
    );
  }
}
