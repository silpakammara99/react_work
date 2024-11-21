import { useNavigate } from "react-router-dom"



export const InvalidScreen=()=>{

    const navigate=useNavigate()

const handleNavigation=()=>{
    navigate("/")
}

    return(
        <>
        <h2>page not found 404</h2>
<button onClick={handleNavigation}>back to homepage</button>
</>
    )
}