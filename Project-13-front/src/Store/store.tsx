import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { userReducer } from "./UserSlice";
import { featuresSlices } from "./FeaturesSlice";

import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, userReducer);

export const store = configureStore({
  reducer: {
    features: featuresSlices.reducer,
    user: persistedReducer,
  },
});

// export const persistor = persistStore(store);
