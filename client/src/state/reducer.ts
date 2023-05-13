import { createSlice } from "@reduxjs/toolkit";
import { GameState, BoardArray, Winner } from "../interfaces/interfaces";

const initialState: GameState = {
  board: [" ", " ", " ", " ", " ", " ", " ", " ", " "],
  nextPlayer: "X",
  winner: "in-progress",
};

const determineWinner = (board: BoardArray): Winner => {
  let winLines: string[] = [
    board[0] + board[1] + board[2],
    board[3] + board[4] + board[5],
    board[6] + board[7] + board[8],
    board[0] + board[3] + board[6],
    board[1] + board[4] + board[7],
    board[2] + board[5] + board[8],
    board[0] + board[4] + board[8],
    board[2] + board[4] + board[6],
  ];
  if (winLines.includes("XXX")) {
    return "X";
  } else if (winLines.includes("OOO")) {
    return "O";
  } else {
    return "in-progress";
  }
};

const mySlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    updateBoard: (state, action) => {
      const { index } = action.payload;
      state.board[index] = state.nextPlayer;
      state.winner = determineWinner(state.board);
      state.nextPlayer = state.nextPlayer === "O" ? "X" : "O";
    },
    resetBoard: (state) => {
      state.board = initialState.board;
      state.nextPlayer = initialState.nextPlayer;
      state.winner = initialState.winner;
    },
  },
});

export const { updateBoard, resetBoard } = mySlice.actions;
export default mySlice.reducer;
