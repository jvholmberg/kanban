'use strict';

export default function reducer(state = {
    fetching: false,
    fetched: false,
    error: null,
    story: {
      owner: null,
      members: [],
      title: null,
      text: null,
      boards: [],
      history: []
    }
  }, action) {

  switch (action.type) {
    case 'FETCH_STORY': {
      return {
        ...state,
        fetching: true
      };
    }
    case 'FETCH_STORY_REJECTED': {
      return {
        ...state,
        fetching: false,
        error: action.payload
      };
    }
    case 'FETCH_STORY_FULFILLED': {
      return {
        ...state,
        fetching: false,
        story: action.payload
      };
    }
  }
  return state;
};
