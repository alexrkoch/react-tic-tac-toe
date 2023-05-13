import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "./reducer";
import socketMiddleware from "../socket/socketMiddleware";

const store = configureStore({
  reducer: {
    game: gameReducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({ thunk: true }),
    socketMiddleware,
  ],
});

export default store;
