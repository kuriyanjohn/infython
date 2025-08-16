import React,{useState} from "react";

function Counter(){
    const [count,setCount]=useState(0)
    return(
        <div>
            <h2>Counter</h2>
            <p>current count:{count}</p>
            <button onClick={()=>setCount(count-1)}>-</button>
            <button onClick={()=>setCount(count+1)}>+</button>
        </div>
    )
}

export default Counter