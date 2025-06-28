import { useEffect, useState } from "react";
import "./App.css";
function App() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const formatTime = (timeInSec) => {
    const hours = String(Math.floor(timeInSec / 3600)).padStart(2, "0");
    const minutes = String(Math.floor((timeInSec % 3600) / 60)).padStart(
      2,
      "0"
    );
    const min = String(Math.floor(timeInSec % 60)).padStart(2, "0");

    return `${hours}: ${minutes} : ${min}`;
  };
  const [hour, setHour] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((p) => p - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  function totalSum(hour, min, sec) {
    let total = Number(hour * 3600) + Number(min * 60) + Number(sec);
    return total;
  }
  return (
    <>
      <h1>⏱ React Timer</h1>
      <p>Time : {formatTime(time)}</p>
      <div>
        <button
          onClick={() => {
            setIsRunning((p) => !p);
          }}
        >
          {isRunning ? "Pause" : "Start"}
        </button>
        <button
          onClick={() => {
            setTime(0), setIsRunning(false);
          }}
        >
          Reset
        </button>
      </div>
      <br />
      <br />
      <div>
        <div>
          <label htmlFor="">Hours : </label>
          <input
            type="number"
            value={hour}
            onChange={(e) => {
              setHour(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="">Minutes : </label>
          <input
            type="number"
            value={minutes}
            onChange={(e) => {
              setMinutes(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="">Seconds : </label>
          <input
            type="number"
            value={seconds}
            onChange={(e) => {
              setSeconds(e.target.value);
            }}
          />
        </div>
        <button
          onClick={() => {
            setTime(totalSum(hour, minutes, seconds));
          }}
        >
          Submit
        </button>
      </div>
    </>
  );
}
export default App;
