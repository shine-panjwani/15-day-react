import { useState } from "react";
import "./App.css";
import { useRef} from "react";
import { useEffect } from "react";
function App() {
  return (
    <>
      {/* clock with start and end button */}
      {/* <Timer /> */}
      <br />
      {/* input with focus feature */}
      {/* <FocusOnInput /> */}
      <br />
      {/*  Show Previous Value */}
      {/* <ShowPrevValue /> */}
      {/*Scroll to Input on Button Click*/}
      {/* <Scroll /> */}

    </>
  );
}

export default App;

function Timer() {
  const [time, setTime] = useState(0);
  let timeRef = useRef();

  function startTime() {
    timeRef.current = setInterval(() => {
      setTime((p) => p + 1);
    }, 1000);
  }
  function endTime() {
    clearInterval(timeRef.current);
  }
  return (
    <>
      <h1>Timer : {time}</h1>
      <div>
        <button onClick={startTime}>Start</button>
        <button onClick={endTime}>Stop</button>
      </div>
    </>
  );
}
function FocusOnInput() {
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <>
      <input ref={inputRef} type="text" placeholder="Type something" />
    </>
  );
}
function ShowPrevValue() {
  const [count, setCount] = useState(0);
  const prevcount = useRef();
  useEffect(() => {
    prevcount.current = count;
  }, [count]);

  return (
    <>
      <h1>Current count : {count}</h1>
      <h1>Previous count : {prevcount.current}</h1>
      <button
        onClick={() => {
          setCount((p) => p + 1);
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          setCount((p) => p - 1);
        }}
      >
        Decrease
      </button>
      <button
        onClick={() => {
          setCount(0);
        }}
      >
        Reset
      </button>
    </>
  );
}

function Scroll() {
  const inputRef = useRef(null);
  return (
    <>
      <div style={{ height: "100vh" }}>
        <button
          onClick={() => {
            inputRef.current.scrollIntoView({
              behavior: "smooth",
              block: "end",
              inline: "nearest",
            });
            inputRef.current.focus()
          }}
        >
          Scroll
        </button>
      </div>
      <div style={{height : "300px"}} >
        <input ref={inputRef} type="text" />
      </div>
    </>
  );
}

