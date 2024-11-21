import { Link, NavLink } from "react-router-dom"
import "./navBar.css"


export const NavigationBar=()=>{


    
    const liStyle={
        margin:"10px",
        
    }
    return(
        <nav className="navbar navbar-expand-sm bg-light navbar-light">
  <div className="container-fluid">
    <ul className="navbar-nav">
      <li className="nav-item" style={liStyle}>
        <NavLink to={"/"}>Main</NavLink>
      </li>
      <li className="nav-item" style={liStyle}>
      <NavLink to={"/about"}>About</NavLink>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Link
        </a>
      </li>
      
    </ul>
  </div>
</nav>

    )
}