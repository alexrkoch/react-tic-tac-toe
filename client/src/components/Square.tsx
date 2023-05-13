import { useDispatch, useSelector } from "react-redux";
import { RootState, SquareProps } from "../interfaces/interfaces";
import { makeMove } from "../state/reducer";

function Square({ value, index }: SquareProps) {
  const dispatch = useDispatch();

  const winner = useSelector((state: RootState) => state.game.winner);

  const opponent = useSelector((state: RootState) => state.game.opponentRole);

  const handleClick = () => {
    const room = opponent;
    dispatch(makeMove({ room, index }));
  };

  return (
    <button
      className="square"
      disabled={winner !== "in-progress" ? true : false}
      onClick={handleClick}
    >
      {value}
    </button>
  );
}

export default Square;
