import { useContext } from "react";
import { SecretContext } from "../App";
import { Button } from "./Button";

export const KeyboardLine = ({ letters }) => {
  const { currentTry, setCurrentTry } = useContext(SecretContext);
  let rows = [];
  letters
    .split("")
    .forEach((letter) =>
      rows.push(
        <Button
          handleKeyClick={() => setCurrentTry(currentTry + letter)}
          key={letter}
          content={letter}
        />
      )
    );
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>{rows}</div>
  );
};
