import { Button } from "./Button"
export const KeyboardLine = ({letters}) =>{
    let rows=[]
    letters.split('').forEach(letter => rows.push(<Button key={letter}content={letter}/>))
    return(
        <div style={{display:"flex", justifyContent:"center"}}>
            {rows}
        </div>
    )
}