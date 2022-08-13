import { configureStore } from '@reduxjs/toolkit';
import drawerReducer from '../slices/drawerSlice';
import uluusReducer from '../slices/uluusSlice';

export const store = configureStore({
	reducer: {
		drawer: drawerReducer,
		uluus: uluusReducer,
	},
})