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
  const checkRow: string = "".concat(...board[row]);
  const checkColumn: string = "".concat(...board.map((row) => row[column]));
  const checkPlayer: string = playerMoved + playerMoved + playerMoved;
  const winLength: number = board[0].length;
  const centerSquare: number = Math.floor(winLength / 2);
  const diagonalWinPossible: boolean = winLength % 2 === 1;
  if (checkRow.includes(checkPlayer) || checkColumn.includes(checkPlayer)) {
    return playerMoved;
  } else if (diagonalWinPossible) {
    // if board dimensions > 3x3, need to make these diagonal strings more dynamic.
    const firstDiagonal =
      board[0][0] +
      board[centerSquare][centerSquare] +
      board[winLength - 1][winLength - 1];
    const secondDiagonal =
      board[0][winLength - 1] +
      board[centerSquare][centerSquare] +
      board[winLength - 1][0];
    if (
      firstDiagonal.includes(checkPlayer) ||
      secondDiagonal.includes(checkPlayer)
    ) {
      return playerMoved;
    }
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
