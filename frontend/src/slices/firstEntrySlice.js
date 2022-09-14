import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: true,
};

export const firstEntrySlice = createSlice({
  name: "firstEntry",
  initialState,
  reducers: {
    setFirstEntryValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setFirstEntryValue } = firstEntrySlice.actions;

export default firstEntrySlice.reducer;
