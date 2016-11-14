'use strict';

export default function reducer(state = {

  }, action) {

  switch (action.type) {
    case 'ADD_BOARD': {

      break;
    }
    case 'RENAME_BOARD': {
      return {
        ...state
        , title: action.payload
      };
      break;
    }
    case 'REMOVE_BOARD': {

      break;
    }

  }

};
