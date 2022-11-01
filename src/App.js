import { useState, useEffect, createContext } from "react";
import Canvas from "./components/Canvas";
import { Keyboard } from "./components/Keyboard";

function App() {
  const [letterLength] = useState(5);
  const [secret, setSecret] = useState("");
  let list = ["horse", "patio", "crown", "jewel", "robot", "point"];

  useEffect(() => {
    setSecret(list[Math.floor(Math.random() * list.length)]);
    //eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <h1>Wordle</h1>
      {/* choose letter length dialog */}
      <SecretContext.Provider value={secret}>
        <Canvas letterLength={letterLength} list={list} />
      </SecretContext.Provider>
      <Keyboard />
    </div>
  );
}
export const SecretContext = createContext("");
export default App;
