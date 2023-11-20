import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [currentPlayer, setCurrentPlayer] = useState("❄")
  const [winner, setWinner] = useState(null)

  const gamePlay = (index) => {
    if (squares[index] === null && !winner) {
      squares[index] = currentPlayer
      setSquares([...squares])
      playerSelection()
    }
    howToWin()
  }

  const playerSelection = () => {
    if (currentPlayer === "❄") {
      setCurrentPlayer("🎅🏻")
    } else {
      setCurrentPlayer("❄")
    }
  }

  const howToWin = () => {
    const winningRules = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]
    winningRules.forEach(value => {
      const [first, second, third] = value
      if (
        squares[first] === "❄" &&
        squares[second] === "❄" &&
        squares[third] === "❄"
      ) {
        setWinner("❄")
      } else if (
        squares[first] === "🎅🏻" &&
        squares[second] === "🎅🏻" &&
        squares[third] === "🎅🏻"
      ) {
        setWinner("🎅🏻")
      }
    })
  }

  const catsGame = squares.every(value => value !== null)

  const startOver = () => {
    setSquares(Array(9).fill(null))
    setCurrentPlayer("❄")
    setWinner(null)
  }

  return (
    <>
      <h1>Tic Tac Toe</h1>
      {winner && <h2> {winner} is the winner!</h2>}
      {(catsGame && !winner) && <h2> Game Over, try again</h2>}
      <div className="game-board">
        {squares.map((value, index) => {
          return (
            <Square
              value={value}
              index={index}
              key={index}
              gamePlay={gamePlay}
            />
          )
        })}
      </div>
      <br />
      <button onClick={startOver}>Restart Game</button>
    </>
  )
}

export default App