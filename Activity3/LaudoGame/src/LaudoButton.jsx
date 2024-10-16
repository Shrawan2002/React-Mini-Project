import { useState } from "react"

export default function LaudoButton(){
    let [moves,setMoves] = useState({blue:0,green:0,yellow:0,red:0})

    let updateBlue = ()=>{
        setMoves((preMoves)=>{
            return{...preMoves, blue:preMoves.blue+1}
        })
    }
    let updateGreen = ()=>{
           setMoves((preMoves)=>{
                return{...preMoves, green:preMoves.green+1}
            })
            // console.log(moves.blue);
    }  

    let updateYellow = ()=>{
        setMoves((preMoves)=>{
             return{...preMoves, yellow:preMoves.yellow+1}
         })
 }  

 let updateRed = ()=>{
    setMoves((preMoves)=>{
         return{...preMoves, red:preMoves.red+1}
     })
}  
      
    return(
        <div>
            <p>Blue Moves ={moves.blue} </p>
            <button style={{backgroundColor:"blue"}} onClick={updateBlue}>+1</button>
            <p>Green Moves ={moves.green} </p>
            <button  style={{backgroundColor:"green"}} onClick={updateGreen}>+1</button>
            <p>Yellow Moves = {moves.yellow} </p>
            <button  style={{backgroundColor:"yellow"}} onClick={updateYellow}>+1</button>
            <p>Red  Moves = {moves.red} </p>
            <button  style={{backgroundColor:"red"}} onClick={updateRed}>+1</button>
        </div>
    )
}