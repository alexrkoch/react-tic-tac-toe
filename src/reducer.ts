import { createSlice } from "@reduxjs/toolkit";
import { GameState, BoardArray, Player } from "./interfaces";

const initialState: GameState = {
  board: [ " ", " ", " ", " ", " ", " ", " ", " ", " "],
  nextPlayer: "X"
};

const determineWinner = (board: BoardArray): string => {
  let xWin = "XXX";
  let oWin = "OOO";
  let winLines: string[] = [
    board[0] + board[1] + board[2],
    board[3] + board[4] + board[5],
    board[6] + board[7] + board[8],
    board[0] + board[4] + board[8],
    board[2] + board[4] + board[6],
  ];
  if (winLines.includes(xWin)) {
    return "X"
  } else if (winLines.includes(oWin)) {
    return "O"
  } else {
    return "no-win"
  }
  
}

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
