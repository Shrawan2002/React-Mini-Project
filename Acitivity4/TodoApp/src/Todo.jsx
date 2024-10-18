import { useState } from "react"

export default function Todo(){
    let [arr, setArr] = useState(["sleep","code"]);
    let [newArr, setNewArr] = useState("");

     let inputHandle = (event)=>{
        console.log(event.target.value);
        setNewArr(event.target.value);
     }

     let handleButtonClick = ()=>{
        setArr((currArr)=>{
            return [...currArr,newArr]
        })
        setNewArr("");
     }
    return(
        <div>
            <input type="text" onChange={inputHandle} value={newArr} placeholder="enter task" />
            <br></br>
            <br></br>
            <button onClick={handleButtonClick}>Add Task</button>
            <br></br>
            <br></br>
            <ul>
                {arr.map((el)=>{
                  return  <li>{el}</li>
                })}
            </ul>
        </div>
    )
}