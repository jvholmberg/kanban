'use strict';

import React from 'react';
import { Link, IndexLink } from 'react-router';

let s = {
  root: 'create_story_root',
  title: 'create_story_title',
  text: 'create_story_text'
};

export default class CreateStoryForm extends React.Component {
  constructor() {
    super();
  }
  _formSubmit() {
    let title = document.getElementById(s.title),
      text = document.getElementById(s.text);

  }
  render() {
    return (
      <div className={s.root}>
        <label>
          Title
          <input type='text' id={s.title} />
        </label>
        <label>
          Description
          <textarea id={s.text}></textarea>
        </label>
        <button onClick={this._formSubmit}>Create</button>
      </div>
    );
  }
}
