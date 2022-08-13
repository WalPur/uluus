import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	value: 'adverts',
}

export const categorySlice = createSlice({
	name: 'category',
	initialState,
	reducers: {
		setCategory: (state, action) => {
			state.value = action.payload;
		},
	},
})

// Action creators are generated for each case reducer function
export const { setCategory } = categorySlice.actions;

export default categorySlice.reducer;