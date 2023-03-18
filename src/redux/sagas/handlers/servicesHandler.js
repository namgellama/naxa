import { call, put } from 'redux-saga/effects';
import { setServices } from '../../services';
import { requestGetServices } from '../requests/servicesRequest';

export function* handleGetServices(action) {
	try {
		const response = yield call(requestGetServices);
		const { data } = response;
		yield put(setServices(data));
	} catch (error) {
		console.log(error);
	}
}
