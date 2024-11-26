import { useContext } from "react"
import { UseEffectExample } from "../hooks/useEffect hook/useEffect"
import { UserDetails } from "../navigations/navigationstack"
import { WithProfile } from "../hoc/withprofile"
import WithCount from "../hoc/withcounter"
// import { NavigationBar } from "../navbar/Navigationbar"






const HomeScreen=(props)=>{

console.log(props)

const {salary}=useContext(UserDetails)


    return(
        <>
        <h1>The present count: {props.count}</h1>
        <button onClick={props.incrementcount}>click to increment</button>




        {/* <NavigationBar/> */}
       {/* <h1>Welcome to homescreen</h1> 
       <h2>The salary of the person  {props.profile.firstName}</h2> */}
       {/* <UseEffectExample/> */}
        </>
    )
}
export default WithCount(HomeScreen)