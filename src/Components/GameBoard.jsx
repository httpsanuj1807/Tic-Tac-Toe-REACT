// import { useState } from "react";



function GameBoard({onSelectSquare, gameBoard}){

   
    // const [gameBoard , setGameBoard] = useState(initialGameBoard);
    
    // function buttonClickHandler(rowIndex, colIndex){
    //     setGameBoard((prevState)=>{
    //         const updatedGameBoard = [...prevState.map((row) => {
    //             return [...row];
    //         })]
    //         updatedGameBoard[rowIndex][colIndex] = activePlayerSymbol;
    //         return updatedGameBoard;
    //     });
    //     onSelect();
    // }


    return(
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => {   // error line
               return( <li key={rowIndex}>
                    <ol>
                        {row.map((activePlayerSymbol, colIndex)=>{
                            return (<li key={colIndex}>
                                <button onClick={() => {
                                    onSelectSquare(rowIndex,colIndex)
                                }} disabled={activePlayerSymbol !== null}>{activePlayerSymbol}</button>
                            </li>)
                        })}
                    </ol>
                </li>)
            })}
        </ol>
    );
}

export default GameBoard;