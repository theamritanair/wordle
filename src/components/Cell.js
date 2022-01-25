export const Cell = ({attempt, index, secret, solved}) =>{
    let letter
    let checkLetter = attempt[index]!== undefined
    
    function getBgColor(attempt, index) {
        let correctLetter = secret[index]
        let attemptLetter = attempt[index]
        if (
          attemptLetter === undefined ||
          secret.indexOf(attemptLetter) === -1
        ) {
          return '#111'
        }else if (correctLetter !== attemptLetter) {
          return '#b59f3b'
        }else{
        return '#538d4e'
        }
    }
      
    if(checkLetter){
        letter = attempt[index]
    }
    let color = getBgColor(attempt, index)
    return(
        <div className="cell" style={{
            backgroundColor: solved ? color : '#111'
        }}>
            {letter}
        </div>
    )
}