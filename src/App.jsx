import Player from "./Components/Player";
import GameBoard from "./Components/GameBoard";
import Logs from "./Components/Logs";
import { useState } from "react";
import GameOver from "./Components/GameOver";
import WINNING_COMBINATIONS from "../winningCombination";

const initialGameBoard = [
  [null, null , null],
  [null, null , null],
  [null, null , null],
]

function getActivePlayer(prevValuesOrGamesTurns){
  let currentPlayer = 'X';
  if(prevValuesOrGamesTurns.length > 0 && prevValuesOrGamesTurns[0].player === 'X'){
    currentPlayer = 'O';
  }
  return currentPlayer;
}

function App() {

  const [playersName, setPlayersName] = useState({
    X : 'Player 1',
    Y : 'Player 2',
  });

  function handlePlayerNameChange(symbol, newName){
    setPlayersName((prevState)=>{
      return {
        ...prevState,
        [symbol] : newName,
      }
    })
  }
    
  const [gameTurns, setGameTurns] = useState([]);
 
  let gameBoard = [...initialGameBoard.map((array) => [...array])];
  for (const turn of gameTurns){
      const {square, player} = turn;
      const {row, col} = square;
      gameBoard[row][col] = player;
  }  

  let winner;

  for(const combination of WINNING_COMBINATIONS){
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];

    if( firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol){
      winner = playersName[firstSquareSymbol];
    }
  }

  const hasDraw = gameTurns.length === 9 && !winner;

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

  function handleRematch(){
    setGameTurns([]);
  }

  return (
    <main> 
      <div id="game-container"> 
        <ol id="players" className="highlight-player">
        <Player initialName={"Player 1"} symbol={"X"} isActive={activePlayer === "X"} onNameChange={handlePlayerNameChange}/> 
        <Player initialName={"Player 2"} symbol={"O"} isActive={activePlayer === "O"} onNameChange={handlePlayerNameChange} /> 
        </ol>
        {(winner || hasDraw) && <GameOver onRestart={handleRematch} winner={winner}/>}
        <GameBoard onSelectSquare={handleSelectSquare} gameBoard={gameBoard}/>
      </div>
      <Logs turns={gameTurns} />
    </main>
  )
}

export default App;
