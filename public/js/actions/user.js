'use strict';

import axios from 'axios';

export function me() {
  return (dispatch) => {
    axios.get('/user/me').then((res) => {
        dispatch({
          type: 'FETCH_USER_FULFILLED',
          payload: res.data
        });
      })
      .catch((err) => {
        dispatch({
          type: 'FETCH_USER_REJECTED',
          payload: res.data
        });
      });
  };
}

export function logout() {
  return (dispatch) => {
    axios.get('/user/logout').then((res) => {
        dispatch({
          type: 'LOGOUT_USER_FULFILLED',
          payload: res.data
        });
      })
      .catch((err) => {
        dispatch({
          type: 'LOGOUT_USER_REJECTED',
          payload: res.data
        });
      });
  };
}

export function changePassword() {
  return {

  };
}
