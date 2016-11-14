'use strict';

import axios from 'axios';

/*
* Create Story
* @type: POST
*/
export function createStory(owner, title, text) {
  return (dispatch) => {
    axios.post('/story', {
      owner: owner,
      title: title,
      text: text
    }).then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

/*
* Get a single story by its Id
* @type: GET
*/
export function getStory(id) {
  return (dispatch) => {
    axios.get('/story/' + id)
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
export function getStories() {
  return (dispatch) => {
    axios.get('/story')
      .then((res) => {

      })
      .catch((err) => {

      });
  };
}

/*
* Update Story
* @type: PUT
*/
export function updateStory(owner, title, text) {
  return (dispatch) => {
    axios.put('/story', {
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
* Delete Story
* @type: DELETE
*/
export function deleteStory(id) {
  return (dispatch) => {
    axios.delete('/story/' + id)
      .then((res) => {

      })
      .catch((err) => {

      });
  };
}
