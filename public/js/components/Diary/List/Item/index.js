'use strict';

import React from 'react';

export default class DiaryListItem extends React.Component {
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
