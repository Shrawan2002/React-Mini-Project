import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
export default function Todo(){
    let [arr, setArr] = useState([{task:"sleep",id:uuidv4()}]);
    let [newArr, setNewArr] = useState("");

     let inputHandle = (event)=>{
        console.log(event.target.value);
        setNewArr(event.target.value);
     }

     let handleButtonClick = ()=>{
        setArr((currArr)=>{
            return [...currArr,{task:newArr,id:uuidv4()}]
        })
        setNewArr("");
     }

      let handleAllUpper = ()=>{
        setArr((currArr)=>(
                currArr.map((todos)=>{
                    return{...todos, task:todos.task.toUpperCase()}
                })
        ))
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
                  return  <li key={el.id}>{el.task}</li>
                })}
            </ul>
            <br></br>
            <br></br>
            <button onClick={handleAllUpper}> All UpperCase</button>
        </div>
    )
}