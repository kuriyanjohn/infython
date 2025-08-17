import React,{useState} from "react";

function NameForm(){
    const [firstName,setFirstName]=useState('')
    const [lastName,setLastName]=useState('')
    const [submitted,setSubmitted]=useState(false)

    const handlesubmit=(e)=>{
        e.preventDefault();
        setSubmitted(true)
    }

    return (
        <div>
            <h2>user form</h2>
            {!submitted ?(
            <form onSubmit={handlesubmit}>
                <div>
                    <label>firstName: </label>
                    <input type="text" value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
                </div>
                <div>
                    <label>lastName: </label>
                    <input type="text" value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
                </div>
                <button type="submit">submit</button>
            </form>
            ):(
                <h3>Thank You,{firstName}</h3>
            )}

            <h3>
                {firstName||lastName?`Hello,${firstName} ${lastName}`:'please enter your name'}
            </h3>
        </div>
    )
}

export default NameForm