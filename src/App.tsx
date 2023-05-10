import { useSelector } from "react-redux";
import { RootState } from "./interfaces";
import Board from "./Board";

function App() {

  const nextPlayer = useSelector((state: RootState) => state.game.nextPlayer);

  const winner = useSelector((state: RootState) => state.game.winner);

  const getSubtitle = () => {
    if(winner === "in-progress") {
      return <h2>Next Move: {nextPlayer}</h2>
    } else {
      return <h2>{winner} IS THE WINNER!!!!</h2>
    }
  }

  return (
    <div className="app">
      <h1>Tic Tac Toe</h1>
      {getSubtitle()}
      <Board></Board>
    </div>
  );
}

export default App;
