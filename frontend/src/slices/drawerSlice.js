import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	value: 0,
}

export const drawerSlice = createSlice({
	name: 'drawer',
	initialState,
	reducers: {
		setOpen: (state, action) => {
			state.value = action.payload;
		},
	},
})

// Action creators are generated for each case reducer function
export const { setOpen } = drawerSlice.actions;

export default drawerSlice.reducer;