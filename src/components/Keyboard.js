import { KeyboardLine } from "./KeyboardLine"
export const Keyboard = () =>{
    return(
        <div className="keyboard">
            <KeyboardLine style={{width: 10, height: 10}}letters='qwertyuiop' />
            <KeyboardLine letters="asdfghjkl"/>
            <KeyboardLine letters="xcvbnm"/>
        </div>
    )
}