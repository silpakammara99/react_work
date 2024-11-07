import axios from "axios";
import { useRef, useState } from "react";

export const UncontrolledComponent=()=>{
    const usernameRef=useRef()
    const passwordRef=useRef()

    const[dataError,setDataError]=useState({})
    const[userData,setUserData]=useState([])


    const onSubmit=(event)=>{
        event.preventDefault()

        const usernameEntered=usernameRef.current.value;
        const passwordEntered=passwordRef.current.value;

 const formErrorData=validations(usernameEntered,passwordEntered)

 if(Object.keys(formErrorData).length>0){
  //trigger the errors
  setDataError(formErrorData) 
 }
 else{
  //hit the api
  setDataError({})
 loginApi(usernameEntered,passwordEntered)
setUserData([... userData,{username:usernameEntered,password:passwordEntered}])

 }



 console.log(formErrorData)

        console.log(usernameEntered)
        console.log(passwordEntered)
    }

   

    const validations=(username, password)=>{

        const FormErrors={}
      
        if(!username){
             FormErrors.usernameError="please enter the username"
        }
        else if(username.length>20){
            FormErrors.usernameError="username should be lessthan 20 chars"
        }
        else if(/^\d+$/.test(username)){
            FormErrors.usernameError="name should not be contains numbers"
        }

        if(!password){
            FormErrors.passwordError="please enter the password"
       }
       else if(password.length>20){
           FormErrors.passwordError="password should be lessthan 20 chars"
       }
      
       return FormErrors

    }

    const loginApi=async(username, password)=>{
      try{
      const response=await axios.post('https://dummyjson.com/auth/login',{
       "username":username,
       "password":password,
      })
      console.log(response)
    }
    catch(error){
      console.log(error)
    }
   }
    
    return(
        <>
        <form onSubmit={onSubmit}>
  <div className="form-group">
    <label htmlFor="username">Email address:</label>
    <input type="text" className="form-control" id="email" ref={usernameRef} />
    <span style={{color:"red"}}>{dataError?.usernameError}</span>
  </div>
  <div className="form-group">
    <label htmlFor="pwd">Password:</label>
    <input type="password" className="form-control" id="pwd" ref={passwordRef} />
    <span style={{color:"red"}}>{dataError?.passwordError}</span>
  </div>
  <div className="checkbox">
    <label>
      <input type="checkbox" /> Remember me
    </label>
  </div>
  <button type="submit" className="btn btn-default">
    Submit
  </button>
</form>
<table border="1" style={{ marginTop: "20px" }}>
                <thead>
                    <tr>
                        <th style={{border:"1px solid black"}}>Username</th>
                        <th style={{border:"1px solid black"}}>Password</th>
                    </tr>
                </thead>
                <tbody>
                    {userData.map((data, index) => (
                        <tr key={index}>
                            <td>{data.username}</td>
                            <td>{data.password}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </>
    )
}