import { useState } from "react";

const CrudOPerations = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addHandler=()=>{
  
    setTodos(input)


  }


  return (
    <>
      <form>
        <input type="text" />
        <button onClick={addHandler}>enter todo data</button>
        
      </form>
    </>
  );
};
export default CrudOPerations