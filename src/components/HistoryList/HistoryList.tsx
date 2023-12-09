import React from "react";

import { SquareValue } from "types/globalTypes";

import styles from "./styles.module.css";

interface HistoryListProps {
  history: SquareValue[][];
  jumpTo: (move: number) => void;
  currentMove: number;
}

const HistoryList: React.FC<HistoryListProps> = ({
  history,
  jumpTo,
  currentMove,
}) => {
  const getDescription = (move: number): string => {
    return move > 0 ? "Go to move #" + move : "Go to game start";
  };

  const moves = history.map((squares, move) => (
    <li key={move}>
      <button
        onClick={() => jumpTo(move)}
        className={currentMove === move ? styles.current_move : ""}
      >
        {getDescription(move)}
      </button>
    </li>
  ));

  return <ol>{moves}</ol>;
};

export default HistoryList;
