import { useNavigate } from "react-router-dom"

function Contact(){

    const navigate=useNavigate()

    const handleGoHome=()=>{
        navigate('/')
    }
    return(

        <div>
            <h3>Contact me</h3>
            <button onClick={handleGoHome}>Home</button>
        </div>
    )
}

export default Contact