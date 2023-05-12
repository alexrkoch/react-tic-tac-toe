import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { RootState, SquareProps } from "../interfaces/interfaces";
import { updateBoard } from "../state/reducer";
import socket from "../socket/socket";

function Square({ value, index }: SquareProps) {

  useEffect(() => {
    socket.on("message", (msg) => {
      console.log(msg);
    });
    return () => {
      socket.off("chat message");
    };
  }, []);

  const dispatch = useDispatch();

  const winner = useSelector((state: RootState) => state.game.winner);

  const handleClick = () => {
    dispatch(updateBoard({ index }));
    socket.emit("message", `move at index ${index}`);
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
