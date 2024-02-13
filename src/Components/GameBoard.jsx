import { useState } from "react";

const initialGameBoard = [
    [null, null , null],
    [null, null , null],
    [null, null , null],
]

function GameBoard({onSelect, activePlayerSymbol}){
    const [gameBoard , setGameBoard] = useState(initialGameBoard);
    
    function buttonClickHandler(rowIndex, colIndex){
        setGameBoard((prevState)=>{
            const updatedGameBoard = [...prevState.map((row) => {
                return [...row];
            })]
            updatedGameBoard[rowIndex][colIndex] = activePlayerSymbol;
            return updatedGameBoard;
        });
        onSelect();
    }
    return(
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => {
               return( <li key={rowIndex}>
                    <ol>
                        {row.map((activePlayerSymbol, colIndex)=>{
                            return (<li key={colIndex}>
                                <button onClick={() => {
                                    buttonClickHandler(rowIndex,colIndex)
                                }}>{activePlayerSymbol}</button>
                            </li>)
                        })}
                    </ol>
                </li>)
            })}
        </ol>
    );
}

export default GameBoard;