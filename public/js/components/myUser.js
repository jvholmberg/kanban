'use strict';

import React from 'react';
import { Link, IndexLink } from 'react-router';

let s = {
  root: 'my_user_root',
  header: 'my_user_header',
  section: 'my_user_section',
  title: 'my_user_title',
  text: 'my_user_text',
};

export default class MyUser extends React.Component {
  constructor() {
    super();
  }
  render() {

    let user = this.props.user;

    return (
      <div className={s.root}>
        <div className={s.header}>
          <span class='icon icon-l user'></span>
          <span>My profile</span>
        </div>
        <div className={s.section}>
          <span class='icon icon-s description'></span>
          <p>{ user.username }</p>
        </div>
        <div className={s.section}>
          <span class='icon icon-s description'></span>
          <p>{ user.email }</p>
        </div>
        <div className={s.section}>
          <span class='icon icon-s description'></span>
          <p>Member of</p>
        </div>
        <div className={s.section}>
          <span class='icon icon-s description'></span>
          <p>Pending invites</p>
        </div>

      </div>
    );
  }
}
