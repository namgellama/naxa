import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import createSagaMiddleware from '@redux-saga/core';
import { configureStore } from '@reduxjs/toolkit';
import servicesReducer from './servicesState';
import servicesSaga from './servicesSaga';

const saga = createSagaMiddleware();
const store = configureStore({
	reducer: {
		services: servicesReducer,
	},
	middleware: [saga],
});

saga.run(servicesSaga);

ReactDOM.createRoot(document.getElementById('root')).render(
	<Provider store={store}>
		<App />
	</Provider>
);
