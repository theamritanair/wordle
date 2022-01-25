import { useState, useEffect } from "react";
import Canvas from "./components/Canvas"
import { Keyboard } from "./components/Keyboard";
function App() {
  const [letterLength, setLetterLength] = useState(5)
  const [currentTry, setCurrentTry] = useState("");
  const [attempts, setAttempts] = useState([])
  const [secret, setSecret] = useState("")
  let list = [
    'horse',
    'patio',
    'crown',
    'jewel',
    'robot',
    'point'
  ]
  
  useEffect(()=>{
    setSecret(list[Math.floor(Math.random()* list.length)])
  },[])

  return (
    <div className="App">
      <h1>Wordle</h1>
      {/* choose letter length dialog */}
      <Canvas
        letterLength={letterLength}
        attempts ={attempts}
        currentTry= {currentTry}
        setCurrentTry={setCurrentTry}
        setAttempts={setAttempts}
        list={list}
        secret={secret}
      />
      <Keyboard />
    </div>
  );
}

export default App;
