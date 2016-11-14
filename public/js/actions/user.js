'use strict';

export function fetch() {
  return {
    type: 'FETCH_USER_FULFILLED',
    payload: {
      apiToken: 'hi',
      username: 'test',
      password: 'lol',
      memberOf: ['cp'],
      pendingInvites: ['yeee']
    }
  };
}

export function changePassword() {
  return {

  };
}
