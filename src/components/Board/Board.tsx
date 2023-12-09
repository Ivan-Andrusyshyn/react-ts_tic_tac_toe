import { FC, ReactNode } from "react";

import { Square } from "components/Square";

import calculateWinner from "utils/calculateWinner";

import { SquareValue } from "types/globalTypes";
import getWinningComboStyle from "utils/getWinningComboStyle";

import styles from "./styles.module.css";
import crossOut from "./crossOut.module.css";

interface Props {
  xIsNext: boolean;
  squares: SquareValue[];
  onPlay: (nextSquares: SquareValue[]) => void;
  children: ReactNode;
}

const Board: FC<Props> = ({ xIsNext, squares, onPlay, children }) => {
  const winnerData = calculateWinner(squares);
  console.log(squares);

  const handleClick = (i: number) => {
    if (winnerData?.winner || squares[i]) {
      return;
    }

    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? "X" : "O";
    onPlay(nextSquares);
  };

  const status = winnerData?.winner
    ? `Winner: ${winnerData?.winner}`
    : `Next player: ${xIsNext ? "X" : "O"}`;

  const winningComboStyle = () => {
    if (winnerData?.line) {
      return winnerData?.line.length > 0
        ? getWinningComboStyle(winnerData?.line)
        : "";
    }
  };

  const renderSquare = (i: number) => {
    return (
      <Square
        key={i}
        line={winnerData?.line}
        value={squares[i]}
        onSquareClick={() => handleClick(i)}
      />
    );
  };
  const stylesWinnerRow = winningComboStyle();

  return (
    <div className={styles.main_container}>
      <div>
        <h2 className={winnerData?.winner ? styles.winnerGreeting : ""}>
          {status}
        </h2>
        <div className={styles.wrapper}>
          {[0, 1, 2].map((row, i) => (
            <div
              key={row}
              className={`${styles.row_container} ${
                crossOut[stylesWinnerRow ? stylesWinnerRow : ""]
              }`}
            >
              {[0, 1, 2].map((col) => renderSquare(row * 3 + col))}
            </div>
          ))}
        </div>
      </div>
      {children}
    </div>
  );
};

export default Board;
