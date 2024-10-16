import { useState } from "react"

export default function LaudoButton(){
    let [moves,setMoves] = useState({blue:0,green:0,yellow:0,red:0})
    let updateBlue = ()=>{
        setMoves((preMoves)=>{
            return{...preMoves, blue:preMoves.blue+1}
        })
    }
    return(
        <div>
            <p>Blue Moves ={moves.blue} </p>
            <button style={{backgroundColor:"blue"}} onClick={updateBlue}>+1</button>
            <p>Green Moves ={moves.green} </p>
            <button  style={{backgroundColor:"green"}}>+1</button>
            <p>Yellow Moves = {moves.yellow} </p>
            <button  style={{backgroundColor:"yellow"}}>+1</button>
            <p>Red  Moves = {moves.red} </p>
            <button  style={{backgroundColor:"red"}}>+1</button>
        </div>
    )
}