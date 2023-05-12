import { useSelector } from "react-redux";
import { RootState } from "../interfaces/interfaces";
import Square from "./Square";

function Board() {

  const board = useSelector((state: RootState) => state.game.board);

  return (
    <div className="board">
      <div className="row">
        <Square value={board[0]} index={0} />
        <Square value={board[1]} index={1} />
        <Square value={board[2]} index={2} />
      </div>
      <div className="row">
        <Square value={board[3]} index={3} />
        <Square value={board[4]} index={4} />
        <Square value={board[5]} index={5} />
      </div>
      <div className="row">
        <Square value={board[6]} index={6} />
        <Square value={board[7]} index={7} />
        <Square value={board[8]} index={8} />
      </div>
    </div>
  );
}

export default Board;