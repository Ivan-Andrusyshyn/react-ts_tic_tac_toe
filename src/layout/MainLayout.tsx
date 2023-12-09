import { useState } from "react";

import { Board, HistoryList } from "components";

import { SquareValue } from "types/globalTypes";

import styles from "./styles.module.css";
import { log } from "console";

type HistoryItem = SquareValue[];

const MainLayout = () => {
  const [history, setHistory] = useState<HistoryItem[]>([
    Array(9).fill(null) as SquareValue[],
  ]);

  const [currentMove, setCurrentMove] = useState<number>(0);

  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  const handlePlay = (nextSquares: SquareValue[]) => {
    const nextHistory = history.slice(0, currentMove + 1).concat([nextSquares]);
    console.log(nextHistory);

    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  };

  const jumpTo = (nextMove: number) => {
    setCurrentMove(nextMove);
  };

  return (
    <div className={styles.game_container}>
      <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}>
        <HistoryList
          history={history}
          jumpTo={jumpTo}
          currentMove={currentMove}
        />
      </Board>
    </div>
  );
};

export default MainLayout;
