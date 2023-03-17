import { createSlice } from '@reduxjs/toolkit';

export const servicesSlice = createSlice({
	name: 'services',
	initialState: {
		services: [],
		isLoading: false,
	},
	reducers: {
		getServicesFetch: (state) => {
			state.isLoading = true;
		},
		getServiesSuccess: (state, action) => {
			state.services = action.payload;
			state.isLoading = false;
		},
		getServicesFailure: (state) => {
			state.isLoading = false;
		},
	},
});

export const { getServicesFetch, getServiesSuccess, getServicesFailure } =
	servicesSlice.actions;

export default servicesSlice.reducer;
