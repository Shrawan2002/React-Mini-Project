import { useState } from "react"

export default function CountButton(){
    let [count, setCount] = useState(0);

    let increaseCout = ()=>{
        setCount((currCount)=>{
            return currCount+1;
        })
    }
    return(
        <div>
            <p> Count = {count}</p>
            <button onClick={increaseCout}>IncreaseCount</button>
        </div>
    )
}