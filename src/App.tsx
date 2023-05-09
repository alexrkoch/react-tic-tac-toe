import { useSelector } from "react-redux";
import { RootState } from "./interfaces";
import Board from "./Board";

function App() {

  const nextPlayer = useSelector((state: RootState) => state.game.nextPlayer);

  return (
    <div className="app">
      <h1>Tic Tac Toe</h1>
      <h2>Next Move: {nextPlayer}</h2>
      <Board></Board>
    </div>
  );
}

export default App;
