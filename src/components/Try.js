import { Cell } from "./Cell"
export const Try = ({letterLength, attempt, solved, secret}) => {
    let cells = []
    for(let i=0;i<letterLength;i++){
        cells.push(
            <Cell 
                key={i}
                index={i}
                attempt={attempt}
                solved={solved}
                secret={secret}
            />
        )
    }
    return(
        <div>
            {cells}
        </div>
    )
}