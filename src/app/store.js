import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import layoutReducer from "../features/layout/layoutSlice";

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});

export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware(customizedMiddleware),
  reducer: {
    counter: counterReducer,
    layout: layoutReducer,
  },
});
