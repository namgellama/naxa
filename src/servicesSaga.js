import { call, put, takeEvery } from 'redux-saga/effects';
import { getServiesSuccess } from './servicesState';

function* workGetServicesFetch() {
	const services = yield call(() =>
		fetch('https://admin.naxa.com.np/api/services')
	);
	const formattedServices = yield services.json();
	yield put(getServiesSuccess(formattedServices));
}

function* servicesSaga() {
	yield takeEvery('services/getServicesFetch', workGetServicesFetch);
}

export default servicesSaga;
