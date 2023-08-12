"use client"
import React, { useState }from "react";
import Board from "../Board";
import "@/app/style.css";

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const [isAscending, setIsAscending] = useState(true);
  const currentSquares = history[currentMove];

  const handlePlay = (nextSquares: any) => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(currentMove + 1); // Increment currentMove
  };

  const jumpTo = (nextMove: number) => {
    setCurrentMove(nextMove);
  };

  const moves = history.map((squares, move) => {
    const description = move > 0 ? `Go to move #${move}` : "Go to game start";
    const isActiveMove = move === currentMove;

    return (
      <li key={move}>
        {isActiveMove ? (
          <span>{`You are at move #${move}`}</span>
        ) : (
          <button onClick={() => jumpTo(move)}>{description}</button>
        )}
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board
         // onSquareClick={handlePlay}
         // highlighted={currentSquares}
        />
      </div>
      <div className="game-info">
        <div>
          <button onClick={() => setIsAscending(!isAscending)}>
            Toggle Sort Order
          </button>
        </div>
        <ol>{isAscending ? moves : moves.slice().reverse()}</ol>
      </div>
    </div>
  );
};

export default Game;
