import { createSlice } from "@reduxjs/toolkit";
import { GameState } from "./interfaces";

const initialState: GameState = {
  board: [ " ", " ", " ", " ", " ", " ", " ", " ", " "],
  nextPlayer: "X"
};

const mySlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    updateBoard: (state,  action) => {
      const { index } = action.payload;
      state.board[index] = state.nextPlayer;
      state.nextPlayer = state.nextPlayer === "O" ? "X" : "O";
    }
  },
});

export const { updateBoard } = mySlice.actions;
export default mySlice.reducer;
