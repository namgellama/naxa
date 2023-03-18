import { createSlice } from '@reduxjs/toolkit';

const servicesSlice = createSlice({
	name: 'services',
	initialState: {},
	reducers: {
		getServices() {},
		setServices(state, action) {
			const servicesData = action.payload;
			return { ...state, ...servicesData };
		},
	},
});

export const { getServices, setServices } = servicesSlice.actions;

export default servicesSlice.reducer;
