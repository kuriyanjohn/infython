import React,{useState} from "react";

function NameForm(){
    const [firstName,setFirstName]=useState('')
    const [lastName,setLastName]=useState('')

    return (
        <div>
            <h2>user form</h2>
            <form>
                <div>
                    <label>firstName: </label>
                    <input type="text" value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
                </div>
                <div>
                    <label>lastName: </label>
                    <input type="text" value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
                </div>
            </form>

            <h3>
                {firstName||lastName?`Hello,${firstName} ${lastName}`:'please enter your name'}
            </h3>
        </div>
    )
}

export default NameForm