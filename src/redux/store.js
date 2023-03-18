import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import servicesReducer from './services';
import { watcherSaga } from './sagas/rootSaga';

const saga = createSagaMiddleware();

const store = configureStore({
	reducer: {
		services: servicesReducer,
	},
	middleware: [saga],
});

saga.run(watcherSaga);

export default store;
