import { useRef, useState } from "react"


export const DataShowTable=()=>{

    const userName=useRef()
    const passwordRef=useRef()
      
    const[data,setData]=useState([]);
    const [error,setError]=useState({})

    
    const submitHandler=(e)=>{
        e.preventDefault()
        const userData=userName.current.value;
const passwordData=passwordRef.current.value;
       
if(validations(userData,passwordData)){
        setData([...data,{username:userData, password:passwordData}])
       //deleting the data after submit
       userName.current.value=""
       passwordRef.current.value=""
    }
        
    }

    const validations=(personname,personpwd)=>{

        let newerror={};
        if(!personname){
          newerror.personname="enter username"
        }
        else if(personname.length<=3){
            newerror.personname="username should be above 3 chars"
        }
        if(!personpwd){
          newerror.personpwd="enter password"
        }
        else if(personpwd.length<3){
          newerror.personpwd="password should be above 3 chars"
        }
        setError(newerror)
        return Object.keys(newerror).length===0;
  }
    return(
        <>
        <form onSubmit={submitHandler}>
  <div className="form-group">
    <label htmlFor="username">Username</label>
    <input type="text" className="form-control" id="username" ref={userName}/>
    <span style={{color:"red"}}>{error.personname}</span>
  </div>
  <div className="form-group">
    <label htmlFor="pwd">Password:</label>
    <input type="password" className="form-control" id="pwd" ref={passwordRef}/>
    <span style={{color:"red"}}>{error.personpwd}</span>
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
<table>
    <thead>
    <tr>
        <th>username</th>
        <th>password</th>
    </tr>
    </thead>
    <tbody>
            { data.map((e, index)=>{
                return(
                    <tr key={index}>
                        
                     <td>{e.username}</td>
                     <td>{e.password}</td>
                     </tr>
                     )
                })
            }
    </tbody>
</table>

        </>
    )

}
