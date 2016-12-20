'use strict';

import axios from 'axios';

/*
* Create Activity
* @type: POST
*/
export function createActivity(owner, title, activities) {
  return (dispatch) => {
    axios.post('/diary', {
      owner: owner,
      title: title,
      activities: activities
    }).then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

/*
* Get a single diary by its Id
* @type: GET
*/
export function getActivity(id) {
  return (dispatch) => {
    axios.get('/diary/' + id)
      .then((res) => {

      })
      .catch((err) => {

      });
  };
}

/*
* Get all Stories for user
* @type: GET
*/
export function get() {
  return (dispatch) => {
    axios.get('/diary')
      .then((res) => {
        dispatch({
          type: 'FETCH_DIARY_FULFILLED',
          payload: res.data
        });
      })
      .catch((err) => {
        dispatch({
          type: 'FETCH_DIARY_REJECTED',
          payload: res.data
        });
      });
  };
}

/*
* Update Activity
* @type: PUT
*/
export function updateActivity(owner, title, text) {
  return (dispatch) => {
    axios.put('/diary', {
      owner: owner,
      title: title,
      text: text
    }).then((res) => {

      })
      .catch((err) => {

      });
  };
}

/*
* Delete Activity
* @type: DELETE
*/
export function deleteActivity(id) {
  return (dispatch) => {
    axios.delete('/diary/' + id)
      .then((res) => {

      })
      .catch((err) => {

      });
  };
}
