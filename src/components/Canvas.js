import {useEffect} from "react";
import { Try } from "./Try"
export default function Canvas({
    letterLength,
    attempts, 
    currentTry, 
    secret, 
    setCurrentTry, 
    setAttempts, 
    list
}){
    console.log("CANVAS",secret)
    useEffect(() => {
        window.addEventListener('keydown', update)
        return () => window.removeEventListener('keydown', update)
    })
    
      function update(e){
        let letter = e.key.toLowerCase()
        console.log("Typed Letter is", letter)
        if(letter === 'enter'){
            console.log(currentTry.length)
            if(currentTry.length <5){
                return
            }
            if(!list.includes(currentTry)){
                alert("Not in the list")
                return
            }
            let newHistory = [...attempts, currentTry]
            setAttempts(newHistory)
            setCurrentTry("")
    
        }else if(letter === 'backspace'){
            setCurrentTry(currentTry.slice(0, currentTry.length-1))
        }else if((/^[a-z]$/.test(letter))){
            if(currentTry.length <5){
                setCurrentTry(currentTry+letter)
            }
        }
      }

    const rows = []
    for(let i=0;i<6;i++){
        if(i < attempts.length){
            console.log(i)
            rows.push(
            <Try
                letterLength={letterLength}
                key={i}
                attempt={attempts[i]}
                solved={true}
                secret={secret}
            />
            )
        }else if(i === attempts.length){
            rows.push(
            <Try
                letterLength={letterLength}
                key={i} 
                attempt={currentTry}
                solved={false}
                secret={secret}
            />
            )
        }else{
            //empty rows
            rows.push(
            <Try
                letterLength={letterLength}
                key={i}
                attempt=""
                solved={false}
                secret={secret}
            />
            )
        }

    }        
    return(
        <div>
            {rows}
        </div>
    )
}