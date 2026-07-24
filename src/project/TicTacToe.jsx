import React, { useState } from "react";

function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [gameOver, setGameOver] = useState(false);

  const handleClick = (index) => {
    if (board[index] === null && !gameOver) {
      setBoard((prevBoard) => {
        return prevBoard.map((cell, i) => {
          if (i === index) {
            return currentPlayer;
          }
          return cell;
        });
      });
      setCurrentPlayer(() => (currentPlayer === "X" ? "O" : "X"));
    }
  };

  const checkWin = () => {
    const winConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const condition of winConditions) {
      if (
        board[condition[0]] !== null &&
        board[condition[0]] === board[condition[1]] &&
        board[condition[1]] === board[condition[2]]
      ) {
        setGameOver(true);
        return;
      }
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer("X");
    setGameOver(false);
  };

  const renderCell = (index, cellValue) => (
    <button
      key={index}
      onClick={() => handleClick(index)}
      className={`cell ${cellValue === "X" ? "x" : ""}${cellValue === "O" ? "o" : ""}`}
    >
      {cellValue}
    </button>
  );

  const renderBoard = () => {
    return (
      <div className="board">
        {board.map((cellValue, index) => (
          <renderCell key={index} index={index} cellValue={cellValue} />
        ))}
      </div>
    );
  };

  return (
    <div>
      {renderBoard()}
      <button onClick={resetGame}>Reset Game</button>
      {gameOver && <p>The game is over!</p>}
    </div>
  );
}

export default TicTacToe;
