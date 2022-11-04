import { useContext } from "react";
import { SecretContext } from "../App";
import { Button } from "./Button";

export const KeyboardLine = ({ letters }) => {
  const { currentTry, setCurrentTry } = useContext(SecretContext);
  console.log(currentTry);
  let rows = [];
  letters.split("").forEach((letter) =>
    rows.push(
      <Button
        handleKeyClick={() => {
          console.log(currentTry);
          setCurrentTry(currentTry + letter);
        }}
        key={letter}
        content={letter}
      />
    )
  );
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>{rows}</div>
  );
};
