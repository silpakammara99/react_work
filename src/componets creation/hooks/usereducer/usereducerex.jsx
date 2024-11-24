import React, { useReducer, useState } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT_AGE":
      return { ...state, age: state.age + 1 };
    case "CHANGENAME":
      return { ...state, username: action.payload };
    case "ADDTODO":
      return { ...state, todos: [...state.todos, action.payload] };
    case "DELETTODO":
      return {
        ...state,
        todos: state.todos.filter((_, index) => index != action.payload),
      };

    default:
      return state;
  }
};

const UseReducerEx = () => {
  const initialState = {
    username: "raju",
    age: 33,
    todos: ["woke up at 8am", "breakfast at 10am"],
    homeaddress: {},
  };

  const [currentState, dispatch] = useReducer(reducer, initialState);
  const [name, setName] = useState("");
  const [enterTodo, setEnterTodo] = useState("");

  const nameHanler = (event) => {
    setName(event.target.value);
  };
  const onSubmit = () => {
    if (name) {
      dispatch({
        type: "CHANGENAME",
        payload: name,
      });
    }
  };
  const incrementAgeHandler = () => {
    dispatch({
      type: "INCREMENT_AGE",
      payload: 1,
    });
  };
  const todoHandler = (event) => {
    setEnterTodo(event.target.value);
  };

  const submitTodo = () => {
    if (enterTodo) {
      dispatch({
        type: "ADDTODO",
        payload: enterTodo,
      });
      setEnterTodo("");
    }
  };

  const deleteHandler = (index) => {
    dispatch({
      type: "DELETTODO",
      payload: index,
    });
  };

  return (
    <div>
      <input type="text" value={name} onChange={nameHanler}></input>
      <button onClick={onSubmit}>submit</button>

      <h1>{currentState.username}</h1>
      <h3>{currentState.age}</h3>
      <button onClick={incrementAgeHandler}>Increment age</button>
      <br></br>
      <br></br>
      <input type="text" onChange={todoHandler} value={enterTodo}></input>
      <button onClick={submitTodo}>submitTOdo</button>

      {currentState.todos.map((eachTodo, index) => (
        <>
          <h5>{eachTodo}</h5>
          <button onClick={() => deleteHandler(index)}>delete</button>
        </>
      ))}
    </div>
  );
};

export default UseReducerEx;
