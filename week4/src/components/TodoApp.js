import React,{ useState} from "react";
import "../App.css"

function TodoApp(){

    const [input,setInput]=useState("")
    const [items,setItems]=useState([])
    
    const handleChange=event=>{
            setInput(event.target.value)
    }

    const storeItems=(event)=>{
        event.preventDefault()
        if (input.trim() !== "") {
            setItems([...items, input]);
            setInput("");
        }

    }
    const deleteItem=key=>{
        const updatedItems = items.filter((_, index) => index !== key);
        setItems(updatedItems);
    }
  
        
        return (
            <div className="todo-container">
                <form className="input-section" onSubmit={storeItems}>
               <h1>Todo List </h1>
               
                <input type="text" value={input} onChange={handleChange} placeholder="enter items"/>
                </form>   
                <ul>
                    {items.map((data,index)=>(
                        <li key={index}>
                            {data}
                            <i class='fas fa-trash-alt' onClick={()=>deleteItem(index)}></i>
                        </li>
                    ))}
                </ul>                                
            </div>
        )
    }


export default TodoApp