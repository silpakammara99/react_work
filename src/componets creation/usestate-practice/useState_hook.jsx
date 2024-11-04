import { useState } from "react"




const Counter=()=>{
   const[counter, setCounter]=useState(0)

//    const increaseHandler=()=>{
//    setCounter(counter+1);
//    }
//    const decreaseHandler=()=>{
//     setCounter(counter-1)
//    }
//    const reset=()=>{
//     setCounter(0)
//    }

const ageHandler=(type)=>{
    switch(type){
        case "INCREMENT":
        
                setCounter(counter+1)
                break
           case "DECREMENT":
         if(counter>0)
            setCounter(counter-1)
        else
        alert("age should be above 0")
   break
   case "RESET":
    setCounter(0)
    break;
    default:
        break
    }
}

    return(
        <>
        <h1>AGE Counter: {counter}</h1>
<button onClick={()=>ageHandler("INCREMENT")}>age INcr</button>
<button onClick={()=>ageHandler("DECREMENT")}>age DEC</button>
<button onClick={()=>ageHandler("RESET")}>Reset age </button>


        {/* <button increase onClick={increaseHandler}>increase</button>
        <button onClick={decreaseHandler}>decrease</button>
        <button onClick={reset}>reset</button> */}
        </>
    )

}
export default Counter