import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { RootState } from "../interfaces/interfaces";
import { resetBoard, updateBoard } from "../state/reducer";
import Board from "./Board";
import socket from "../socket/socket";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    socket.on("message", (index) => {
      // dispatch(updateBoard({ index }));
      console.log(index);
    });
    return () => {
      socket.off("message");
    };
  }, []);

  const handleClick = () => {
    dispatch(resetBoard());
  };

  const nextPlayer = useSelector((state: RootState) => state.game.nextPlayer);

  const winner = useSelector((state: RootState) => state.game.winner);

  const handleNextGame = () => {
    if (winner === "in-progress") {
      return <h2>Next Move: {nextPlayer}</h2>;
    } else {
      return (
        <div className="win-section">
          <h2 className="winner-text">{winner} IS THE WINNER!</h2>
          <button className="new-game-button" onClick={handleClick}>
            New Game
          </button>
        </div>
      );
    }
  };

  return (
    <div className="app">
      <h1>Tic Tac Toe</h1>
      <Board></Board>
      {handleNextGame()}
    </div>
  );
}

export default App;
