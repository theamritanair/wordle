import { useState, useEffect, useContext } from "react";
import { SecretContext } from "../App";
import { Alert } from "./Alert";
import { Try } from "./Try";
export default function Canvas({ letterLength, list }) {
  const { currentTry, setCurrentTry } = useContext(SecretContext);
  const { error, setError } = useContext(SecretContext);
  const [currentRowAnimate, setCurrentRowAnimate] = useState("");

  useEffect(() => {
    window.addEventListener("keydown", update);
    return () => window.removeEventListener("keydown", update);
  });

  useEffect(() => {
    console.log("Error changed");
    setTimeout(() => {
      setCurrentRowAnimate("");
      setError({
        isVisible: false,
      });
    }, 2000);
    //if I set the error in the dependency array, useEffect is called multiple times. TODO: look into why this is happening
    //eslint-disable-next-line
  }, [error.isVisible]);

  console.log(`Current animation ${currentRowAnimate}`);
  const [attempts, setAttempts] = useState([]);

  function update(e) {
    let letter = e.key.toLowerCase();
    if (letter === "enter") {
      console.log(currentTry.length);
      if (currentTry.length < 5) {
        setCurrentRowAnimate("jiggle");
        setError({ message: "Word length should be 5", isVisible: true });
        return;
      }
      if (!list.includes(currentTry)) {
        setCurrentRowAnimate("jiggle");
        setError({ message: "Word not in the list", isVisible: true });
        return;
      }
      setCurrentRowAnimate("guessed");

      setTimeout(() => {
        setCurrentRowAnimate("");
        setAttempts([...attempts, currentTry]);
      }, 950);
      setCurrentTry("");
    } else if (letter === "backspace") {
      setCurrentTry(currentTry.slice(0, currentTry.length - 1));
    } else if (/^[a-z]$/.test(letter)) {
      if (currentTry.length < 5) {
        setCurrentTry(currentTry + letter);
      }
    }
  }

  const rows = [];
  for (let i = 0; i < 6; i++) {
    if (i < attempts.length) {
      rows.push(
        <Try
          letterLength={letterLength}
          key={i}
          attempt={attempts[i]}
          solved={true}
          // currentRowAnimate={currentRowAnimate}
        />
      );
    } else if (i === attempts.length) {
      rows.push(
        <Try
          letterLength={letterLength}
          key={i}
          attempt={currentTry}
          solved={false}
          currentRowAnimate={currentRowAnimate}
        />
      );
    } else {
      //empty rows
      rows.push(
        <Try letterLength={letterLength} key={i} attempt="" solved={false} />
      );
    }
  }
  return (
    <>
      <Alert setCurrentRowAnimate={setCurrentRowAnimate} />
      <div>{rows}</div>
    </>
  );
}
