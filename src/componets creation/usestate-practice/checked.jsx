import { useState } from "react"



 const MyCheckbox=()=>{
    const[like, setLike]=useState(true)

    const likeHandler=(e)=>{
      setLike(e.target.checked)
    }

return(
    <>
    <label>
        <input type="checkbox" checked={like} onChange={likeHandler}></input>check here
    </label>
    <h1>{like? 'liked':'not liked'}</h1>
    </>
)

}
export default MyCheckbox