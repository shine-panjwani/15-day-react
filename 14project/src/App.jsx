import { useContext, useEffect, useReducer, useRef, useState } from "react";
import "./App.css";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const { isDark, themeSetter } = useContext(ThemeContext);
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
      <br />
      <EnterInput />
    </>
  );
}

export default App;

function CounterUserReducer() {
  const [counter, dispatch] = useReducer(countReducer, 0);
  return (
    <>
      <h1>Counter : {counter}</h1>
      <button
        onClick={() => {
          dispatch({ type: "increment" });
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrement" });
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          dispatch({ type: "reset" });
        }}
      >
        Reset
      </button>
    </>
  );
}
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

// useRef
// Refrence to a value, such that when you cange the value, the component
// DOES NOT RE-RENDER
function EnterInput() {
  const inputRef = useRef();
  console.log(inputRef);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <>
      <input ref={inputRef} type="text" />
    </>
  );
}
