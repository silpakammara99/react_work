import { useState } from "react"
import { mobileValidation } from "./validations"




export const ControlledForm=()=>{

    const[model, setModel]=useState("")
    
    const [modelerror,setModelError]=useState("")
    const[mobile, setMobile]=useState("")
    const[mobileerr,setMobileerr]=useState("")

    const modelHandler=(event)=>{
        const data=event.target.value
        setModel(data)
        console.log(data)
       
    const errordata=modelValidator(data)
    console.log(errordata)
    if(errordata){
        setModelError(errordata)
    }
    else{
        setModelError("")
    }

    }

    const modelValidator=(e)=>{
        let error=""
        const modelRegex=/^samsung/i

        if(!e){
            error="Please enter model name"

        }
        else if(!modelRegex.test(e))
           {
             error="please enter proper samsung model"
            }

            return error
        }
    

        const onSubmit=(e)=>
        {
            e.preventDefault()
             if(modelerror || mobileerr){
                alert("please fill properly")
            }
            else{
                alert("form submitted successfully")
                setModel("")
                setMobile("")
            }

           
        }
    

        const mobileHandler=(event)=>{
         const number=event.target.value;
         setMobile(number)
        const error= mobileValidation(number)
if(error){
    setMobileerr(error)
}
else{
    setMobileerr("")
}


        }

    return(
        <>
        <form onSubmit={onSubmit}>
  <div className="form-group">

    <h1>Samsung service form</h1>
    <label htmlFor="username">Enter device model</label>
    <input type="text" className="form-control" id="email" value={model} onChange={modelHandler}/>
  </div>
  {modelerror && <span style={{color:"red"}}>{modelerror}</span>}

  <label htmlFor="mobilenumber">Enter mobile number</label>
    <input type="number" className="form-control" id="mobilenumber" value={mobile} onChange={mobileHandler}/>
  
  {mobileerr && <span style={{color:"red"}}>{mobileerr}</span>}

  
 
  <button type="submit" className="btn btn-default">
    Submit
  </button>
</form>
        </>
    )

}