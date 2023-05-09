
export interface GameState {
  board: BoardArray;
  nextPlayer: Player;
}

export type Square = " " | "X" | "O";

export type BoardArray = [Square, Square, Square, Square, Square, Square, Square, Square, Square];

export type Player = "X" | "O";

export interface RootState {
  game: GameState;
}

export interface SquareProps {
  value: Square;
  index: number;
}