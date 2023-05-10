export type Player = "X" | "O";

export type Square = Player | " ";

export type Winner = Player | "in-progress";

export type BoardArray = [Square, Square, Square, Square, Square, Square, Square, Square, Square];

export interface GameState {
  board: BoardArray;
  nextPlayer: Player;
  winner: Winner;
}

export interface RootState {
  game: GameState;
}

export interface SquareProps {
  value: Square;
  index: number;
}