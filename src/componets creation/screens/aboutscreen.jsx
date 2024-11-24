// import { NavigationBar } from "../navbar/Navigationbar"

import { useContext } from "react"
import { UserDetails } from "../navigations/navigationstack"
import UseReducerEx from "../hooks/usereducer/usereducerex"






const AboutScreen=()=>{

    const themechanger=useContext(UserDetails)

    const changeHandler=()=>{
       themechanger.handler()
    }

    const changeSalary=()=>{
        themechanger.salaryHandler()
    }


    return(
        <>
        
       <h1>Welcome to aboutscreen</h1> 
       <UseReducerEx/>
       <p>Current Theme: {themechanger.darkTheme ? "Dark" : "Light"}</p>
       <button onClick={changeHandler}> Switch to {themechanger.darkTheme ? "Light" : "Dark"} Theme</button>
       <button onClick={changeSalary}>setSalary</button>
        </>
    )
}
export default AboutScreen