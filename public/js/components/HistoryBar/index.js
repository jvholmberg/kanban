'use strict';

import React from 'react';
import HistoryItem from '../HistoryItem/';

export default class HistoryBar extends React.Component {
  constructor() {
    super();
  }

  render() {
    var activities = this.props.activities.activities;
    return (
      <div>
        <ul>
          { activities.map((obj, index) => {
            return <li key={index}><HistoryItem activity={obj}  /></li>
          }) }
        </ul>
      </div>
    );


  }
}
