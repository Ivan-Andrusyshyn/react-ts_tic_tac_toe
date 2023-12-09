import { FC } from "react";

import { Square } from "components/Square";

import calculateWinner from "utils/calculateWinner";

import styles from "./styles.module.css";
import { SquareValue } from "types/globalTypes";

interface Props {
  xIsNext: boolean;
  squares: SquareValue[];
  onPlay: (nextSquares: SquareValue[]) => void;
}

const Board: FC<Props> = ({ xIsNext, squares, onPlay }) => {
  function handleClick(i: number) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? "X" : "O";
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);

  const status = winner
    ? `Winner: ${winner}`
    : `Next player: ${xIsNext ? "X" : "O"}`;

  const renderSquare = (i: number) => (
    <Square key={i} value={squares[i]} onSquareClick={() => handleClick(i)} />
  );

  return (
    <>
      <h2 className="status">{status}</h2>
      <div className={styles.wrapper}>
        {[0, 1, 2].map((row) => (
          <div key={row} className="board-row">
            {[0, 1, 2].map((col) => renderSquare(row * 3 + col))}
          </div>
        ))}
      </div>
    </>
  );
};

export default Board;
