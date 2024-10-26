import { useState } from "react"

export default function Todo(){
    let [todo,setTodo] = useState(["hello"]);
    let[newTodo,setNewTodo] = useState("");
    return(
        <div>
            <input type="text" placeholder="enter task" value={newTodo} />
            <br></br>
            <br></br>
            <button>Add Tasks </button>
            <ul>
                <li>Sleep</li>
            </ul>
        </div>
    )
}