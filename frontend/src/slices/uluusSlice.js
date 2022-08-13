import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	value: '',
}

export const uluusSlice = createSlice({
	name: 'uluus',
	initialState,
	reducers: {
		setUluus: (state, action) => {
			state.value = action.payload;
		},
	},
})

// Action creators are generated for each case reducer function
export const { setUluus } = uluusSlice.actions;

export default uluusSlice.reducer;