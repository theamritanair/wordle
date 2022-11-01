import { useState, useEffect } from "react";
import { Try } from "./Try";
export default function Canvas({ letterLength, list }) {
  useEffect(() => {
    // console.log(`Current state is ${currentTry}`)
    window.addEventListener("keydown", update);
    return () => window.removeEventListener("keydown", update);
  });
  const [currentTry, setCurrentTry] = useState("");
  const [attempts, setAttempts] = useState([]);

  function update(e) {
    let letter = e.key.toLowerCase();
    if (letter === "enter") {
      console.log(currentTry.length);
      if (currentTry.length < 5) {
        return;
      }
      if (!list.includes(currentTry)) {
        alert("Not in the list");
        return;
      }
      // let newHistory = [...attempts, currentTry]
      setAttempts([...attempts, currentTry]);
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
      console.log(i);
      rows.push(
        <Try
          letterLength={letterLength}
          key={i}
          attempt={attempts[i]}
          solved={true}
        />
      );
    } else if (i === attempts.length) {
      rows.push(
        <Try
          letterLength={letterLength}
          key={i}
          attempt={currentTry}
          solved={false}
        />
      );
    } else {
      //empty rows
      rows.push(
        <Try letterLength={letterLength} key={i} attempt="" solved={false} />
      );
    }
  }
  return <div>{rows}</div>;
}
