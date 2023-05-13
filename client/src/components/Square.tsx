import { useDispatch, useSelector } from "react-redux";
import { RootState, SquareProps } from "../interfaces/interfaces";
import { updateBoard } from "../state/reducer";

function Square({ value, index }: SquareProps) {
  const dispatch = useDispatch();

  const winner = useSelector((state: RootState) => state.game.winner);

  const handleClick = () => {
    dispatch(updateBoard({ index }));
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
