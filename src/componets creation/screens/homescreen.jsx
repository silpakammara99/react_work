import { useContext } from "react"
import { UseEffectExample } from "../hooks/useEffect hook/useEffect"
import { UserDetails } from "../navigations/navigationstack"
// import { NavigationBar } from "../navbar/Navigationbar"






const HomeScreen=()=>{
const {salaryHandler,salary}=useContext(UserDetails)


    return(
        <>
        {/* <NavigationBar/> */}
       <h1>Welcome to homescreen</h1> 
       <h2>The salary of the person{salary}</h2>
       <UseEffectExample/>
        </>
    )
}
export default HomeScreen