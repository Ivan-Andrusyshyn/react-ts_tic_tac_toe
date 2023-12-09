import { FC } from "react";

import styles from "./styles.module.css";

interface Props {
  value: string | null;
  onSquareClick: () => void;
  line: number[] | undefined;
}

const Square: FC<Props> = ({ value, onSquareClick, line }) => {
  return (
    <button className={styles.square} onClick={onSquareClick} type="button">
      {value}
    </button>
  );
};

export default Square;
