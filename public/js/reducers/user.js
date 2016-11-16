'use strict';

export default function reducer(state = {
    fetching: false,
    fetched: false,
    error: null,
    user: {
      token: null,
      username: null,
      displayName: null,
      email: null,
      conversations: [],
      notifications: [],
      memberOf: [],
      pendingInvites: []
    }
  }, action) {
  switch (action.type) {
    case 'FETCH_USER': {
      return {
        ...state
        , fetching: true
      };
    }
    case 'FETCH_USER_REJECTED': {
      return {
        ...state
        , fetching: false
        , error: action.payload
      };
    }
    case 'FETCH_USER_FULFILLED': {
      return {
        ...state
        , fetching: false
        , user: action.payload
      };
    }
  }
  return state;
};
