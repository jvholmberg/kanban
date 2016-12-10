'use strict';

import React from 'react';

export default class HistoryItem extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h3>{this.props.activity.title}</h3>
      </div>
    );


  }
}
