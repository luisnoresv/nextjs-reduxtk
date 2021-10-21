import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from './reducers/counterSlice';
import corcoranReducer from './reducers/corcoranSlice';
import breakingBadReducer from './reducers/breakingBadSlice';
import { dogsApi } from './reducers/dogsApiSlice';

const rootReducer = combineReducers({
	counter: counterReducer,
	corcoran: corcoranReducer,
	breakingBad: breakingBadReducer,
	[dogsApi.reducerPath]: dogsApi.reducer,
});

export default rootReducer;
