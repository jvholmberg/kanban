'use strict';

import React from 'react';
import { Link, IndexLink } from 'react-router';

let s = {
  root: 'my_user_root',
  title: 'my_user_title',
  text: 'my_user_text'
};

export default class MyUser extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className={s.root}>
        <div>
          <span class='icon icon-m favorite-filled'></span>
          <h2>My profile</h2>
        </div>
        <div>
          <p>Admin</p>
        </div>
        <div>
          <p>Johan Holmberg</p>
        </div>
        <div>
          <p>johan.holmberg@hotmail.com</p>
        </div>
        <div>
          <p>Member of</p>
        </div>
        <div>
          <p>Pending invites</p>
        </div>

      </div>
    );
  }
}
