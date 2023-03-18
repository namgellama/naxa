import { takeLatest } from 'redux-saga/effects';
import { getServices } from '../servicesSlice';
import { GET_SERVICES } from '../services';
import { handleGetServices } from './handlers/servicesHandler';

export function* watcherSaga() {
	yield takeLatest(GET_SERVICES, handleGetServices);
}
