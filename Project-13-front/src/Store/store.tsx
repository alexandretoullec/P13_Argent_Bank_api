import { configureStore, createSlice } from "@reduxjs/toolkit";

import useReducer from "./UserSlice";
import { featuresSlices } from "./FeaturesSlice";

export const store = configureStore({
  reducer: {
    features: featuresSlices.reducer,
    user: useReducer,
  },
});
