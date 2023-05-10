import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "./interfaces";
import { SquareProps } from './interfaces';
import { updateBoard } from "./reducer";

function Square({value, index}: SquareProps) {

  const dispatch = useDispatch();

  const winner = useSelector((state: RootState) => state.game.winner);

  const handleClick = () => {
    dispatch(updateBoard({index}));
  }

  return (
      <button 
        className="square" 
        disabled={winner !== "in-progress" ? true : false} onClick={handleClick}>
        {value}
      </button>
  );
}

export default Square;