import axios from 'axios';

export function requestGetServices() {
	return axios.request({
		method: 'get',
		url: 'https://admin.naxa.com.np/api/services',
	});
}
