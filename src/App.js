import { useState, useEffect, createContext } from "react";
import Canvas from "./components/Canvas";
import { Keyboard } from "./components/Keyboard";

function App() {
  const [letterLength] = useState(5);
  const [secret, setSecret] = useState("");
  const [error, setError] = useState({
    isVisible: false,
    message: "",
  });

  //other way to populate list
  let list = ["horse", "patio", "crown", "jewel", "robot", "point"];

  const [currentTry, setCurrentTry] = useState("");
  useEffect(() => {
    setSecret(list[Math.floor(Math.random() * list.length)]);
    //eslint-disable-next-line
  }, []);

  let secretMap = new Map();
  secret.split("").map((ch) => {
    secretMap.set(ch, (secretMap[ch] || 0) + 1);
    return secretMap;
  });

  return (
    <div className="App">
      <h1>Wordle</h1>
      {/* choose letter length dialog */}
      <SecretContext.Provider
        value={{
          secret,
          secretMap,
          currentTry,
          setCurrentTry,
          error,
          setError,
        }}
      >
        <Canvas letterLength={letterLength} list={list} />
        <Keyboard />
      </SecretContext.Provider>
    </div>
  );
}
export const SecretContext = createContext("");
export default App;
