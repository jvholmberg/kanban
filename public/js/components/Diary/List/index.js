'use strict';

import React from 'react';
import DiaryListItem from './Item/';

export default class DiaryList extends React.Component {
  constructor() {
    super();
  }

  render() {
    var activities = this.props.activities.activities;
    return (
      <div>
        <ul>
          <li>
            <input type='text' name='title' />
            <input type='button' value='Add' onClick={this.props.addActivity} />
          </li>
          { activities.map((obj, index) => {
            return <li key={index}><DiaryListItem activity={obj}  /></li>
          }) }
        </ul>
      </div>
    );
  }
}
