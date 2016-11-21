'use strict';

import React from 'react';
import { Link } from 'react-router'

export class IconLink extends React.Component {
  constructor() {
    super();
  }
  render() {
    var s = {
      root: 'my_icon_root',
      tooltip: 'my_icon_tooltip'
    };

    return (
      <Link to={ this.props.href }>
        <span className={ s.root + ' icon ' + this.props.icon + ' icon-' + this.props.size } alt={ this.props.alt }></span>
      </Link>
    );
  }
}

export class IconTooltip extends React.Component {
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
        <i className={ s.tooltip + ' tooltip-' + this.props.pos }>{this.props.text}</i>
      </span>
    );
  }
}
