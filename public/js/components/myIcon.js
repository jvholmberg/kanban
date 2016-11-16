'use strict';

import React from 'react';

export default class MyIcon extends React.Component {
  constructor() {
    super();
  }
  render() {

    return (
      <span>
        <span className={ this.props.icon + ' icon icon-' + this.props.size }></span>
        <span className='icon-tooltip'>{this.props.text}</span>
      </span>
    );
  }
}
