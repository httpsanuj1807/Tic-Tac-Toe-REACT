// import { useState } from "react";

const initialGameBoard = [
    [null, null , null],
    [null, null , null],
    [null, null , null],
]

function GameBoard({onSelectSquare, turns}){

    let gameBoard = initialGameBoard;
    for (const turn of turns){
        const {square, player} = turn;
        const {row, col} = square;
        gameBoard[row][col] = player;
    }
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