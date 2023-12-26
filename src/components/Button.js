import React, { useState } from 'react'
import Square from './Square'

const Button = () => {
    const [squares, setSquares] = useState(Array(9).fill(null))
    const [currentPlayer, setCurrentPlayer] = useState("❄")
    const [winner, setWinner] = useState(null)

    const startOver = () => {
        setSquares(Array(9).fill(null))
        setCurrentPlayer("❄")
        setWinner(null)
    }
    
    const handleSquareClick = (index) => {
      if (squares[index] === null && !winner) {
        const updatedSquares = [...squares];
        updatedSquares[index] = currentPlayer;
        setSquares(updatedSquares);
        setCurrentPlayer(currentPlayer === '❄' ? '🎅🏻' : '❄');
        checkWinner();
      }
    };
  
    const checkWinner = () => {
      const winningRules = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
  
      winningRules.forEach((value) => {
        const [first, second, third] = value;
        if (
          squares[first] &&
          squares[first] === squares[second] &&
          squares[first] === squares[third]
        ) {
          setWinner(squares[first]);
        }
      });
    };
  

    return (
    <>
      <h1>Tic Tac Toe</h1>
      <div className="game-board">
        {squares.map((value, index) => (
          <Square
            key={index}
            value={value}
            onClick={() => handleSquareClick(index)}
          />
        ))}
      </div>
      <button onClick={startOver}>Restart Game</button>
    </>
    )
}
export default Button