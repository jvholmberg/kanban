'use strict';

import { combineReducers } from 'redux';

import user from './user';
import diary from './diary';

export default combineReducers({
  user,
  diary
});
