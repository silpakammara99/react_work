import { Link, NavLink, Outlet } from "react-router-dom"





export const CategoryScreen=()=>{
    const liStyle={
        margin:'10px',
    }
    return (
        <>
    
    {/* <h3>this is category screen</h3> */}
    <NavLink to={"jewellery"} style={liStyle}>Jewellery</NavLink>
    <NavLink to={"electronics"}>Electronics</NavLink>
<Outlet/>

    </>
    )
}