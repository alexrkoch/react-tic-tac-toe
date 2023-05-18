import { useSelector } from "react-redux";
import { RootState } from "../interfaces/interfaces";
import Square from "./Square";

function Board() {
  const board = useSelector((state: RootState) => state.game.board);

  return (
    <div className="board">
      <div className="row">
        <Square value={board[0][0]} row={0} column={0} />
        <Square value={board[0][1]} row={0} column={1} />
        <Square value={board[0][2]} row={0} column={2} />
      </div>
      <div className="row">
        <Square value={board[1][0]} row={1} column={0} />
        <Square value={board[1][1]} row={1} column={1} />
        <Square value={board[1][2]} row={1} column={2} />
      </div>
      <div className="row">
        <Square value={board[2][0]} row={2} column={0} />
        <Square value={board[2][1]} row={2} column={1} />
        <Square value={board[2][2]} row={2} column={2} />
      </div>
    </div>
  );
}

export default Board;
