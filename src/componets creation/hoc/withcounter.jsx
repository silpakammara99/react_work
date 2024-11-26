import { useState } from "react"






const WithCount=(Component)=>{

    return()=>{
const[count,setCount]=useState(0)

const incrementHandler=()=>{
    setCount(count+1)
}

        return<Component count={count} incrementcount={incrementHandler}/>
    }

}

export default WithCount