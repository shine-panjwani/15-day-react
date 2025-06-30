import { useEffect, useState } from "react";
import "./App.css";
function App() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [hour, setHour] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    let interval;
    if (isRunning && time > 0) {
      interval = setInterval(() => {
        setTime((p) => p - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);
  function totalSec() {
    let timeTotal = hour * 3600 + minutes * 60 + seconds;
    return timeTotal;
  }
  function timeInFormat(totalSec) {
    const hours = String(Math.floor(totalSec / 3600)).padStart(2, "0");
    const minutes = String(Math.floor(((totalSec %3600)/60))).padStart(2, "0");
    const seconds = String(Math.floor(totalSec %60)).padStart(2, "0");
    return `${hours} : ${minutes} : ${seconds}`
  }
  return (
    <>
      <h1>React timer</h1>
      <p>Timer {timeInFormat(time)}</p>

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
      <div>
        <div>
          <label htmlFor="">Hour</label>
          <input
            value={hour}
            type="number"
            onChange={(e) => setHour(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">Minute</label>
          <input
            value={minutes}
            type="number"
            onChange={(e) => setMinutes(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">Second</label>
          <input
            value={seconds}
            type="number"
            onChange={(e) => setSeconds(e.target.value)}
          />
        </div>

        <br />
        <button
          onClick={() => {
            setTime(totalSec());
          }}
        >
          Submit
        </button>
      </div>

      <ReactTimer />
    </>
  );
}
export default App;

function ReactTimer() {
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
