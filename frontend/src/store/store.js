import { configureStore } from "@reduxjs/toolkit";
import drawerReducer from "../slices/drawerSlice";
import uluusReducer from "../slices/uluusSlice";
import categoryReducer from "../slices/categorySlice";
import firstEntryReducer from "../slices/firstEntrySlice";

export const store = configureStore({
  reducer: {
    drawer: drawerReducer,
    uluus: uluusReducer,
    category: categoryReducer,
    firstEntry: firstEntryReducer,
  },
});
