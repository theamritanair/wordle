import { useContext } from "react";
import { SecretContext } from "../App";
import { Cell } from "./Cell";
export const Try = ({ letterLength, attempt, solved, currentRowAnimate }) => {
  const { secret } = useContext(SecretContext);

  function getBgColor(attempt, index) {
    let correctLetter = secret[index];
    let attemptLetter = attempt[index];
    if (attemptLetter === undefined || secret.indexOf(attemptLetter) === -1) {
      return "#111";
    } else if (correctLetter === attemptLetter) {
      return "#538d4e";
    } else if (correctLetter !== attemptLetter) {
      return "#b59f3b";
    }
  }
  let cells = [];
  for (let i = 0; i < letterLength; i++) {
    cells.push(
      <Cell
        key={i}
        letter={attempt[i]}
        solved={solved}
        color={getBgColor(attempt, i)}
        className={`${currentRowAnimate}`}
      />
    );
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      {cells}
    </div>
  );
};
