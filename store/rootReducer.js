import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from './reducers/counterSlice';
import corcoranReducer from './reducers/corcoranSlice';
import breakingBadReducer from './reducers/breakingBadSlice';

const rootReducer = combineReducers({
  counter: counterReducer,
  corcoran: corcoranReducer,
  breakingBad: breakingBadReducer,
});

export default rootReducer;
