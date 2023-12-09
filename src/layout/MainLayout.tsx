import { useState } from "react";

import { Board, HistoryList } from "components";

import styles from "./styles.module.css";
import { SquareValue } from "types/globalTypes";

type HistoryItem = (SquareValue | null)[];

const MainLayout = () => {
  const [history, setHistory] = useState<HistoryItem[]>([Array(9).fill(null)]);

  const [currentMove, setCurrentMove] = useState<number>(0);

  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares: SquareValue[]) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove: number) {
    setCurrentMove(nextMove);
  }

  return (
    <div className={styles.game_container}>
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <HistoryList
          history={history}
          jumpTo={jumpTo}
          currentMove={currentMove}
        />
      </div>
    </div>
  );
};

export default MainLayout;
