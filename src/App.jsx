import Player from "./Components/Player";
import GameBoard from "./Components/GameBoard";
import Logs from "./Components/Logs";
import { useState } from "react";

function getActivePlayer(prevValuesOrGamesTurns){
  let currentPlayer = 'X';
  if(prevValuesOrGamesTurns.length > 0 && prevValuesOrGamesTurns[0].player === 'X'){
    currentPlayer = 'O';
  }
  return currentPlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const activePlayer = getActivePlayer(gameTurns);
  function handleSelectSquare(rowIndex, colIndex){
    setGameTurns((prevValues)=>{
      const currentPlayer = getActivePlayer(prevValues);
      const updatedGameTurns = [
        {
        square : {
          row : rowIndex,
          col : colIndex,
        },
        player : currentPlayer,
      },
      ...prevValues];
      return updatedGameTurns;

    })
  }

  return (
    <main> 
      <div id="game-container"> 
        <ol id="players" className="highlight-player">
        <Player initialName={"Player 1"} symbol={"X"} isActive={activePlayer === "X"}/> 
        <Player initialName={"Player 2"} symbol={"O"} isActive={activePlayer === "O"} /> 
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns}/>
      </div>
      <Logs turns={gameTurns} />
    </main>
  )
}

export default App;
