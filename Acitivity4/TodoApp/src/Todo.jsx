import { useState } from "react"

export default function Todo(){
    let [arr, setArr] = useState(["sleep","code"]);
    let [newArr, setNewArr] = useState("");

     let inputHandle = (event)=>{
        console.log(event.target.value);
        // setNewArr()
     }
    return(
        <div>
            <input type="text" onChange={inputHandle} value={newArr} placeholder="enter task" />
            <br></br>
            <br></br>
            <button>Add Task</button>
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