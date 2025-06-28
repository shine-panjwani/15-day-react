import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [currTab,setCurrTab] = useState("home")
  return (
    <>
      <div>
        <ul>
          <button onClick={()=>{
            setCurrTab("home")
          }} style={{backgroundColor : currTab === "home" ? "blue" : "black"}}>Home {}</button>
          <button onClick={()=>{
            setCurrTab("network")
          }} style={{backgroundColor : currTab === "network" ? "blue" : "black"}}>Network {}</button>
           <button onClick={()=>{
            setCurrTab("chat")
          }} style={{backgroundColor : currTab  === "chat" ? "blue" : "black"}}>Chat {}</button>
          <button onClick={()=>{
            setCurrTab("work")
          }} style={{backgroundColor : currTab ==="work" ? "blue" : "black"}}>Work {}</button>
        </ul>
      </div>
    </>
  );
}

export default App;
