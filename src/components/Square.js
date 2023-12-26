import React, {useState} from 'react';


const Square = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState('❄');
  const [winner, setWinner] = useState(null);

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

  const startOver = () => {
    setSquares(Array(9).fill(null));
    setCurrentPlayer('❄');
    setWinner(null);
  };

  const handleSquareClick = (index) => {
    if (squares[index] === null && !winner) {
      const updatedSquares = [...squares];
      updatedSquares[index] = currentPlayer;
      setSquares(updatedSquares);
      setCurrentPlayer(currentPlayer === '❄' ? '🎅🏻' : '❄');
      checkWinner(updatedSquares);
    }
  };

  const checkWinner = (currentSquares) => {
    winningRules.forEach((value) => {
      const [first, second, third] = value;
      if (
        currentSquares[first] &&
        currentSquares[first] === currentSquares[second] &&
        currentSquares[first] === currentSquares[third]
      ) {
        setWinner(currentSquares[first]);
      }
    });
  };

  const renderSquare = (index) => {
    return (
      <div
        key={index}
        className="square"
        onClick={() => handleSquareClick(index)}
      >
        {squares[index]}
      </div>
    );
  };

  const renderBoard = () => {
    const board = [];
    
    for (let i = 0; i < 3; i++) {
      const row = [];
      for (let j = 0; j < 3; j++) {
        const index = i * 3 + j;
        row.push(renderSquare(index));
      }
      board.push(
        <div key={i} className="board-row">
          {row}
        </div>
      );
    }
    
    return board;
  };

  return (
    <div className="tic-tac-toe">
      {/* <h1>Tic Tac Toe</h1> */}
      {renderBoard()}
      {winner && <p style={{ fontSize: '50px' }}>Winner: {winner}</p>}
      <button onClick={startOver}>Restart Game</button>
    </div>
  );
};
export default Square