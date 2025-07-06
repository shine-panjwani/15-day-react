import { useState } from "react";
import "./App.css";
import { useDebounce } from "./hooks/useDebounce";

function App() {
  const [inputData, setInputData] = useState("");
  const debounced = useDebounce(inputData, 500);
  return (
    <>
      <h1>Input : {inputData}</h1>
      <h1>Debounced : {debounced}</h1>
      <input
        type="text"
        value={inputData}
        onChange={(e) => {
          setInputData(e.target.value);
        }}
        id=""
      />
      <br />
      <br />
      <button>Search</button>
      <br />
    </>
  );
}

export default App;
