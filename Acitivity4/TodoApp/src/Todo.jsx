import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
export default function Todo(){
    let [todo,setTodo] = useState([{task:"hello",id:uuidv4()}]);
    let[newTodo,setNewTodo] = useState("");
    let handleOnchange = (event)=>{
        // console.log(event.target.value);
        setNewTodo(event.target.value);
    }

    let handleButton = ()=>{
        setTodo((todo)=>{
            return[...todo,{task:newTodo,id:uuidv4()}];
        })
        setNewTodo("");
    }

    let handleDelete = (id)=>{
        setTodo((todo)=>(
            todo.filter((task)=>task.id !=id)
        ))
    }

    let handleAllUpperCase = ()=>{
        setTodo((todo)=>(
            todo.map((todo)=>{
                return{...todo,task:todo.task.toUpperCase()}
            })
        ))
    }

    let handleToUpper = (id)=>{
        setTodo((todo)=>(
            todo.map((todo)=>{
                if(todo.id == id){
                    return{...todo,task:todo.task.toUpperCase()}
                }else{
                    return{...todo}
                }
            })
        ))
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
                    <li key={todo.id}>
                        <span>{todo.task}</span>
                        <button onClick={()=>handleDelete(todo.id)}>delete</button>
                        <button onClick={()=>handleToUpper(todo.id)}>To Upper</button>
                    </li>
                ))
               }
            </ul>
            <button onClick={handleAllUpperCase}>All Todo Upper Case</button>
        </div>
    )
}