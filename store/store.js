import { configureStore } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';

import rootReducer from './rootReducer';
import { dogsApi } from './reducers/dogsApiSlice';

const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(dogsApi.middleware).concat(logger),
	devTools: process.env.NODE_ENV !== 'production',
});

export default store;
