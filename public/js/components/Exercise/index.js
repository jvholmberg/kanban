'use strict';

import React from 'react';

export default class Exercise extends React.Component {

  componentWillMount() {

  }

  render() {

    var mappedSets = this.props.data.sets.map((set, index) => {
      return <div>
        <span>{ set.reps }x</span>
        <span>{ set.weight }kg</span>
      </div>
    });

    return (
      <div>
        <h1>{ this.props.data.title }</h1>
        { mappedSets }
      </div>
    );
  }
}
