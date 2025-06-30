import { useEffect } from "react";
import "./App.css";
import { useState } from "react";

function App() {
  const [input,setInput] = useState("")
  const [debounceValue,setDebounceValue] = useState("")
  useEffect(()=>{
    const time = setInterval(()=>{
      setDebounceValue(input)
    },500)
    return ()=>{
      clearInterval(time)
    }
  },[input])
  return (
    <>
    <label htmlFor="">Enter name</label>
    <br />
    <input type="text" onChange={(e)=>setInput(e.target.value)} />
    <h1>Your name is : {debounceValue}</h1>
    </>
  );
}


export default App;
