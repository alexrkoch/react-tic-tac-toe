import { useDispatch } from "react-redux";
import { RootState } from "./interfaces";
import { SquareProps } from './interfaces';
import { updateBoard } from "./reducer";

function Square({value, index}: SquareProps) {

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(updateBoard({index}));
  }

  return (
      <button className="square" onClick={handleClick}>
        {value}
      </button>
  );
}

export default Square;