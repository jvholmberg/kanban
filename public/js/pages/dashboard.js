'use strict';

import React from 'react';
import { connect } from 'react-redux';

import CreateStoryForm from '../components/createStoryForm';


import { createStory } from '../actions/story';


export default class Dashboard extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div>
        Dashboard
        <CreateStoryForm />
      </div>
    );
  }
}
