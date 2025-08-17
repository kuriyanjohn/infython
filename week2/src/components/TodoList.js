import React from "react";

function TodoList(){
     const todos=['item1','item2','item3','item4']

     return(
        <div>
            <h2>TodoList</h2>
            <ul>
                {todos.map((todo,index)=>(
                    <li key={index}>{todo}</li>
                ))}
            </ul>
        </div>
     )
}

export default TodoList