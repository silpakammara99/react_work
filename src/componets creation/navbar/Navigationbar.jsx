import { Link, NavLink } from "react-router-dom"
import "./navBar.css"


export const NavigationBar=()=>{


    
    const liStyle={
        margin:"10px",
        
    }
    return(
        <nav className="navbar navbar-expand-sm navbar-light" style={{ backgroundColor: 'skyblue' }}>
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