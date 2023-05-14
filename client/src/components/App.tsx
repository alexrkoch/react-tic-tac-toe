import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { RootState } from "../interfaces/interfaces";
import { resetBoard, makeMove, selectRole, moveMade } from "../state/reducer";
import Board from "./Board";
import socket, { MOVE_MADE } from "../socket/socket";

// before showing the board, offer player selection buttons
// make the web socket connection to join a room once selected.

function App() {
  const dispatch = useDispatch();

  const thisPlayer = useSelector((state: RootState) => state.game.yourRole);
  const nextPlayer = useSelector((state: RootState) => state.game.nextMove);
  const winner = useSelector((state: RootState) => state.game.winner);

  useEffect(() => {
    socket.on(MOVE_MADE, (index) => {
      dispatch(moveMade({index}))
      console.log(index);
    });
    return () => {
      // TO DO: figure out if this argument matters
      socket.off("disconnect");
    };
  }, []);

  const chooseRole = (role: string) => {
    dispatch(selectRole({role}));
  };

  const clickNewGame = () => {
    dispatch(resetBoard());
  };

  const roleSelectionOrBoard = () => {
    if (thisPlayer === " ") {
      return (
        <div>
          <h2>Please select your role:</h2>
          <div className="choose-role">
            <button className="role-button" onClick={() => chooseRole("X")}>X</button>
            <button className="role-button" onClick={() => chooseRole("O")}>O</button>
          </div>
        </div>
      );
    } else {
      return <Board></Board>;
    }
  };

  const handleNextGame = () => {
    if (winner === "in-progress") {
      return <h2>Next Move: {nextPlayer}</h2>;
    } else {
      return (
        <div className="win-section">
          <h2 className="winner-text">{winner} IS THE WINNER!</h2>
          <button className="new-game-button" onClick={clickNewGame}>
            New Game
          </button>
        </div>
      );
    }
  };

  return (
    <div className="app">
      <h1>Tic Tac Toe</h1>
      {roleSelectionOrBoard()}
      {handleNextGame()}
    </div>
  );
}

export default App;
