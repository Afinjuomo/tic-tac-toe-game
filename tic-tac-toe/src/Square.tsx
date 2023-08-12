import React from "react";

type SquareProps = {
  value: string | null;
  onSquareClick: (nextSquares: any) => void;
  highlighted: boolean | null; // Make the type nullable
};

const Square: React.FC<SquareProps> = ({ value, onSquareClick, highlighted }) => {
  const isHighlighted = highlighted === true; // Convert null to false

  return (
    <button className={`square ${isHighlighted ? "highlighted" : ""}`} onClick={onSquareClick}>
      {value}
    </button>
  );
};

export default Square;
