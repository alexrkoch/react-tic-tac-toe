import { createSlice } from "@reduxjs/toolkit";
import {
  GameState,
  BoardArray,
  Winner,
  Player,
} from "../interfaces/interfaces";

const initialState: GameState = {
  board: [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "],
  ],
  nextMove: "X",
  winner: "in-progress",
  yourRole: " ",
};

const determineWinner = (board: BoardArray, playerMoved: Player, row: number, column: number): Winner => {
  const columns = [];
  const firstDiagonal = [];
  const secondDiagonal = [];
  const boardLength = board[0].length;
  for (let i = 0; i < boardLength; i++) {
    columns.push(board[i][column]);
    firstDiagonal.push(board[i][i]);
    secondDiagonal.push(board[i][boardLength - 1 - i]);
  }
  const rowCheck = board[row].every((square) => square === playerMoved);
  const columnCheck = columns.every((square) => square === playerMoved);
  const firstDiagonalCheck = firstDiagonal.every(
    (square) => square === playerMoved
  );
  const secondDiagonalCheck = secondDiagonal.every(
    (square) => square === playerMoved
  );
  if (rowCheck || columnCheck || firstDiagonalCheck || secondDiagonalCheck) {
    return playerMoved;
  }
  return "in-progress";
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
      const { row, column } = action.payload;
      state.board[row][column] = state.nextMove;
      state.winner = determineWinner(state.board, state.nextMove, row, column);
      state.nextMove = state.nextMove === "O" ? "X" : "O";
    },
    moveMade: (state, action) => {
      const { row, column } = action.payload;
      state.board[row][column] = state.nextMove;
      state.winner = determineWinner(state.board, state.nextMove, row, column);
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
