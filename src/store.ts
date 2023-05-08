// src/store.ts
import { configureStore } from "@reduxjs/toolkit";
import myReducer from "./reducer";

const store = configureStore({
  reducer: myReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
