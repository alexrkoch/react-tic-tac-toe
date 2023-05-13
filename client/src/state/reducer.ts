import { createSlice } from "@reduxjs/toolkit";
import { GameState, BoardArray, Winner } from "../interfaces/interfaces";

const initialState: GameState = {
  board: [" ", " ", " ", " ", " ", " ", " ", " ", " "],
  nextMove: "X",
  winner: "in-progress",
  yourRole: " ",
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
    selectRole: (state, action) => {
      const { role } = action.payload;
      state.yourRole = role;
      state.opponentRole = role === "O" ? "X" : "O";
    },
    makeMove: (state, action) => {
      const { index } = action.payload;
      state.board[index] = state.nextMove;
      state.winner = determineWinner(state.board);
      state.nextMove = state.nextMove === "O" ? "X" : "O";
    },
    moveMade: (state, action) => {
      const { index } = action.payload;
      state.board[index] = state.nextMove;
      state.winner = determineWinner(state.board);
      state.nextMove = state.nextMove === "O" ? "X" : "O";
    },
    resetBoard: (state) => {
      state.board = initialState.board;
      state.nextMove = initialState.nextMove;
      state.winner = initialState.winner;
    },
  },
});

export const { makeMove, resetBoard, selectRole, moveMade } = mySlice.actions;
export default mySlice.reducer;
