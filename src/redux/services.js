export const GET_SERVICES = 'GET_SERVICES';
const SET_SERVICES = 'SET_SERVICES';

export const getServices = () => ({
	type: GET_SERVICES,
});

export const setServices = (services) => ({
	type: SET_SERVICES,
	services,
});

const initialState = {
	services: undefined,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SET_SERVICES:
			const { services } = action;
			return { ...state, services };
		default:
			return state;
	}
};
