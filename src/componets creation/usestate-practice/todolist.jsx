import { useState } from "react"
import { createTodoList } from "./jshelpers"




const CustomTodo=()=>{
const[todos, setTodos]=useState(createTodoList)

const addHandler=()=>{
    const currentLength=todos.length
    const myObject={
        id:currentLength+1,
        text:`Item ${currentLength+1}`
    }
setTodos([...todos, myObject])
}

const deleteHandler=(targetId)=>{
    const filterItems=todos.filter(eachTodo=>eachTodo.id!=targetId)
setTodos(filterItems)

}

return(
    <>
    <h1>Custom Todo</h1>
    <button onClick={addHandler}>Add todos</button>
    <ol>
    {
       
        todos.map(each=>{
            return(
                <li key={each.id}>
                    {each.text}
                   <button onClick={()=>deleteHandler(each.id)}>deletedodo</button> 
                </li>
                
            )
        })
    
    }
    </ol>
    </>
)
}
export default CustomTodo