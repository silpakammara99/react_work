import { Link, NavLink } from "react-router-dom"
import "./navBar.css"
import { useContext } from "react"
import { UserDetails } from "../navigations/navigationstack"


export const NavigationBar=()=>{

const theme=useContext(UserDetails)
    
    const liStyle={
        margin:"10px",
        
    }
    return(
        <nav className={`navbar navbar-expand-sm bg-${theme.darkTheme ? "dark":"light"} navbar-${theme.darkTheme ? "dark":"light"}`}>
  <div className="container-fluid">
    <ul className="navbar-nav">
      <li className="nav-item" style={liStyle}>
        <NavLink to={"/"}>Main</NavLink>
      </li>
      <li className="nav-item" style={liStyle}>
      <NavLink to={"/about"}>About</NavLink>
      </li>
      <li className="nav-item" style={liStyle}>
        <NavLink to={"/category"} >
          Categories
        </NavLink>
      </li>
      <li className="nav-item" style={liStyle}>
        <NavLink to={"/products"} >
          Products
        </NavLink>
      </li>
      
    </ul>
  </div>
</nav>

    )
}