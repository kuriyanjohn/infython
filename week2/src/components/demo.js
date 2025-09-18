import {useEffect, useState} from 'react';

function Color(){
  const [count, setCount]=useState(1)

  useEffect(()=>{
    setTimeout(() => {
      setCount((count)=>count+1                   )
    }, 1000);
  },[])
  return(
    <div>
      <h2>color is {count}</h2>
    </div>
    )
}

export default Color