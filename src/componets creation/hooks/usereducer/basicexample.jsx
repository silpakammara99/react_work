import React, { useReducer } from "react";

const counter = (state, action) => {
  switch (action.type) {
    case "DECREMENT":
      return state - action.payload;
    case "INCREMENT":
      return state + action.payload;
  }
};

const CounterReducer = () => {
  const [count, dispatch] = useReducer(counter, 0);

  const decHandler = () => {
    dispatch({
      type: "DECREMENT",
      payload: 1,
    });
  };
  const incHandler = () => {
    dispatch({
      type: "INCREMENT",
      payload: 1,
    });
  };

  return (
    <>
    <div className="container text-center mt-5 d-flex justify-content-center">
      <button onClick={decHandler} className="btn btn-danger m-2">dec</button>
      <h2>count:{count}</h2>
      <button onClick={incHandler} className="btn btn-primary m-2">inc</button>
      </div>
    </>
  );
};

export default CounterReducer;
