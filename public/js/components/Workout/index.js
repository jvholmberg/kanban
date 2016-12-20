'use strict';

import React from 'react';
import Exercise from '../Exercise/';

export default class Workout extends React.Component {

  componentDidMount() {

  }

  render() {
    let mappedExercises = this.props.data.exercises.map((exercise, index) => {
      return <Exercise key={index} data={exercise} />
    });

    return (
      <div>
        <div>
          <div className='col col8'>
            <label>
              Title
              <input className='form-control' type='text' name='title' />
            </label>
          </div>
          <div className='col col4'>
            <span className='btn primary2'>Add</span>
          </div>
        </div>


        <h1>{ this.props.data.title }</h1>
        { mappedExercises }
      </div>
    );
  }
}
