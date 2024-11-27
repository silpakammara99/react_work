import { useState } from "react";

const CrudExample = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [selecteditem, setSelecteditem] = useState(null);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const addTodo = (e) => {
    e.preventDefault();
    if (input) {
      setTodos([...todos, input]);
    }
    setInput("");
  };

  const deleteHanlder = (ind) => {
    setTodos(todos.filter((_, index) => index != ind));
  };

  const updateTodo=(event)=>{
    event.preventDefault()

    const todoscopy=[...todos]
todoscopy[selecteditem]=input
setTodos(todoscopy)
setInput('')

      

  }

  const handleUpdate = (ind) => {
    setSelecteditem(ind); 
     setInput(todos[ind])


  };

  return (
    <>
      <form onSubmit={selecteditem||selecteditem==0?updateTodo:addTodo}>
        <input type="text" value={input} onChange={handleChange} />
        <button type="submit">{selecteditem||selecteditem==0?'update todo':'add todo'}</button>
        <h3>My Todos</h3>
      </form>
      {todos?.map((each, index) => {
        return (
          <>
            <h2>{each}</h2>
            <button onClick={() => deleteHanlder(index)}>delete</button>
            <button onClick={() => handleUpdate(index)}>update</button>
          </>
        );
      })}
    </>
  );
};
export default CrudExample;
