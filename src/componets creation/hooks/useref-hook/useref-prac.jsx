import { useRef, useState } from "react";



export const UseRefExample=()=>{
   const reference=useRef(0);

   const[count,setCount]=useState(0)
  
const clickHandler=()=>{
    reference.current+=1;
    setCount(count+1)
    console.log(reference.current)

}

    return(
        <>
        <h1>usestate--{count}</h1>
        <h2>useRef--{reference.current}</h2>
        <button onClick={clickHandler}>click to inc</button>
        
        
        </>
    )
}