import { useState } from "react"

export default function Todo(){
    let [todo,setTodo] = useState(["hello"]);
    let[newTodo,setNewTodo] = useState("");
    let handleOnchange = (event)=>{
        // console.log(event.target.value);
        setNewTodo(event.target.value);
    }

    let handleButton = ()=>{
        setTodo((todo)=>{
            return[...todo,newTodo];
        })
    }
    return(
        <div>
            <input type="text" placeholder="enter task"  onChange={handleOnchange} value={newTodo} />
            <br></br>
            <br></br>
            <button onClick={handleButton}>Add Tasks </button>
            <ul>
               {
                todo.map((todo)=>( 
                    <li>
                        <span>{todo}</span>
                    </li>
                ))
               }
            </ul>
        </div>
    )
}