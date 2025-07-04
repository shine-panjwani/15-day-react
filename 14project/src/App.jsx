import { useContext, useEffect, useReducer, useState } from "react";
import "./App.css";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const { isDark, themeSetter } = useContext(ThemeContext);
  const [counter, dispatch] = useReducer(countReducer, 0);
  return (
    <>
      <h1>Hii</h1>
      <button
        onClick={() => {
          themeSetter();
        }}
      >
        {isDark ? "Light" : "Dark"}
      </button>
      <h1>Counter : {counter}</h1>
      <button onClick={()=>{dispatch({type : "increment"})}}>+</button>
      <button onClick={()=>{dispatch({type : "decrement"})}}>-</button>
      <button onClick={()=>{dispatch({type : "reset"})}}>Reset</button>
    </>
  );
}

export default App;
function countReducer(state, action) {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return 0;
    default:
      return state;
  }
}
