'use strict';

import React from 'react';

export default class MyIcon extends React.Component {
  constructor() {
    super();
  }
  render() {
    var s = {
      root: 'my_icon_root',
      tooltip: 'my_icon_tooltip'
    };

    return (
      <span className={ s.root + ' icon ' + this.props.icon + ' icon-' + this.props.size }>
        <span className={ s.tooltip + ' tooltip-' + this.props.pos }>{this.props.text}</span>
      </span>
    );
  }
}
