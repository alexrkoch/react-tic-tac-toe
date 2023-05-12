import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "./reducer";
import { RootState } from "../interfaces/interfaces";

const store = configureStore<RootState>({
  reducer: {
    game: gameReducer
  }
});

export default store;
