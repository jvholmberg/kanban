'use strict';

export default function reducer(state = {
    fetching: false,
    fetched: false,
    error: null,
    diary: {
      owner: null,
      workouts: [{
        title: null,
        exercises: [{
          title: null,
          sets: [{
            weight: 0,
            reps: 0
          }]
        }],
        timestamp: null
      }]
    }
  }, action) {

  switch (action.type) {
    case 'FETCH_DIARY': {
      return {
        ...state,
        fetching: true
      };
    }
    case 'FETCH_DIARY_REJECTED': {
      return {
        ...state,
        fetching: false,
        error: action.payload
      };
    }
    case 'FETCH_DIARY_FULFILLED': {
      return {
        ...state,
        fetching: false,
        diary: action.payload
      };
    }
  }
  return state;
};
