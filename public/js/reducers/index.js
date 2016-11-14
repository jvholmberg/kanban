'use strict';

import { combineReducers } from 'redux';

import user from './user';
import story from './story';
import board from './board';
import item from './item';

export default combineReducers({
  user,
  story
});
