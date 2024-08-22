import "./greet.css"
import styling from "./greet.module.css"

export const Greet=()=>{
    return <div style={{backgroundColor:"red", fontSize:"30px"}}>inline styling</div>
}


export const Greet1=()=>{
    return <div className="wish">react styling</div>
}


export const Greet2=()=>{
    return <div className={styling.wish}>react styling</div>
}
