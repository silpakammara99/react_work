import { useContext } from "react"
import { Link, NavLink, Outlet } from "react-router-dom"
import { GlobalCounter } from "../navigations/navigationstack"





export const CategoryScreen=()=>{

const{dispatch}=useContext(GlobalCounter)


    const liStyle={
        margin:'10px',
    }
const incrementHandler=()=>{
    dispatch({
        type: 'INCREMENT_AGE'
        
    })

}



    return (
        <>
    
    {/* <h3>this is category screen</h3> */}
    <button onClick={incrementHandler}>incrementHandler</button>
    <NavLink to={"jewellery"} style={liStyle}>Jewellery</NavLink>
    <NavLink to={"electronics"}>Electronics</NavLink>
<Outlet/>

    </>
    )
}