import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import { featuresSlices } from "./FeaturesSlice";

/**
 * @function configureStore - Configures redux store using the configureStore() function from redux toolkit
 * @param {object} reducer - The userReducer is used to update the user object in the redux store when the user logs in or logs out
 * @returns {object} - The user object in the redux store is updated when the user logs in or logs out
 */
// eslint-disable-next-line react-refresh/only-export-components
export default configureStore({
  reducer: {
    features: featuresSlices.reducer,
    user: userReducer,
  },
});
