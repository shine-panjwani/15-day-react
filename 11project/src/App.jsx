import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  return (
    <>

      <Carousel/>
    </>
  );
}

export default App;


function Carousel(){
  const [count,setCount] = useState(1)
  const [image,setImage] = useState([])
  useEffect(()=>{
    async function fetchData() {
      const response = await fetch("https://dummyjson.com/products");
      const responseInJson = await response.json();
      setImage(responseInJson.products)
    }
    fetchData()
  },[])
  return <>
  <h1>{count}</h1>
  <div>
    {/* {image.map((e)=>{
      return <img key={e.id} src={e.thumbnail} alt="" />
    })} */}
    {image.length > 0 && (
      <img src={image[count-1].thumbnail}
      style={{ width: "300px", height: "300px", objectFit: "cover" }}
     alt="" />
    )}
  </div>
  <button onClick={()=>{
    setCount((prev)=> (prev === 1 ? image.length: prev-1))
  }}>prev</button>
  <button onClick={()=>{
    setCount((prev) => (prev === image.length? 1 : prev + 1));
  }}
  >next</button>
  <div style={{display :"flex", justifyContent :"center", alignItems :"center"}}>
    {...Array(3).keys().map((e)=>{
      const activeDot =( (count-1)%3) + 1
      return <div
      onClick={()=>{
        setCount(e+1)
      }} key={e.id} style={{backgroundColor :(activeDot === e+1) ? "black" : "gray",cursor :"pointer",height :"10px", width : "10px", borderRadius : "50%", margin:"10px"}}></div>
    })}
  </div>
  </>
}