export type Player = "X" | "O";

export type Square = Player | " ";

export type ThisPlayer = Player | " ";

export type Winner = Player | "in-progress";

export type BoardArray = [
  [Square, Square, Square],
  [Square, Square, Square],
  [Square, Square, Square]
];

export interface GameState {
  board: BoardArray;
  nextMove: Player;
  winner: Winner;
  yourRole: ThisPlayer;
  opponentRole?: Player;
}

export interface RootState {
  game: GameState;
}

export interface SquareProps {
  value: Square;
  row: number;
  column: number;
}
