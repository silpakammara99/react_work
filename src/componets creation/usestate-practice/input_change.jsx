import { useState } from "react"



const DataChange=()=>{
    const[data,setData]=useState("hello")
   
    const changeHandle=(e)=>{
        setData(e.target.value)
    }
    const resetState=()=>{
        setData("hello")
    }

    return(
        <>
        <input value={data} onChange={changeHandle}></input>
        <h1>data:{data}</h1>
        <button onClick={resetState}>reset</button>
        </>
    )

}
export default  DataChange