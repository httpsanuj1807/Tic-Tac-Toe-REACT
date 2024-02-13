import Player from "./Components/Player";
import GameBoard from "./Components/GameBoard";
import Logs from "./Components/Logs";
import { useState } from "react";
function App() {
  
  const [activePlayer, setActivePlayer] = useState('X');
  function buttonClickHandler(){
    setActivePlayer((prevActive)=>{
      return ((prevActive ) == "X" ? "O" : "X");
    })
  }

  return (
    <main> 
      <div id="game-container"> 
        <ol id="players" className="highlight-player">
        <Player initialName={"Player 1"} symbol={"X"} isActive={activePlayer === "X"}/> 
        <Player initialName={"Player 2"} symbol={"O"} isActive={activePlayer === "O"} /> 
        </ol>
        <GameBoard onSelect={buttonClickHandler} activePlayerSymbol={activePlayer} />
      </div>
      <Logs />
    </main>
  )
}

export default App;
