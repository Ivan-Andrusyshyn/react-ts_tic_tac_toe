import { FC } from "react";

import styles from "./styles.module.css";

interface Props {
  value: string | null;
  onSquareClick: () => void;
}

const Square: FC<Props> = ({ value, onSquareClick }) => {
  return (
    <button className={styles.square} onClick={onSquareClick}>
      {value}
    </button>
  );
};

export default Square;
