import { useContext } from "react"
import { Link, NavLink, Outlet } from "react-router-dom"
import { GlobalCounter } from "../navigations/navigationstack"
import useAxios from "../hooks/customhooks/useAxios"





export const CategoryScreen=()=>{

const{dispatch}=useContext(GlobalCounter)

const[products,error,loading]=useAxios('https://dummyjson.com/products/categories')
console.log(products)


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