const getWinningComboStyle = (line: number[]): string => {
  switch (JSON.stringify(line)) {
    case JSON.stringify([6, 7, 8]):
      return "winningCrossOut1";
    case JSON.stringify([3, 4, 5]):
      return "winningCrossOut2";
    case JSON.stringify([0, 1, 2]):
      return "winningCrossOut3";
    case JSON.stringify([0, 3, 6]):
      return "winningCrossOut4";
    case JSON.stringify([1, 4, 7]):
      return "winningCrossOut5";
    case JSON.stringify([2, 5, 8]):
      return "winningCrossOut6";
    case JSON.stringify([0, 4, 8]):
      return "winningCrossOut7";
    case JSON.stringify([2, 4, 6]):
      return "winningCrossOut8";
    default:
      return "";
  }
};

export default getWinningComboStyle;
