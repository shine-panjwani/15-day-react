import { useEffect, useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <ShowMore />
      {/* <NewShowMore/> */}
    </>
  );
}

function ShowMore() {
  const [count, setCount] = useState(1);
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://randomuser.me/api/?page=${count}&results=5`
      );
      const responseInJson = await response.json();
      console.log(responseInJson.results);
      console.log([...data, ...responseInJson.results]);

      setData((prev) => [...prev, ...responseInJson.results]);
    }
    fetchData();
  }, [count]);
  return (
    <>
      <h1>{count}</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: 10,
        }}
      >
        {data.map((e, key) => {
          return (
            <div style={{ border: "1px solid white" }} key={key}>
              <p>
                {e.name.title} {e.name.first}
              </p>
              <img src={e.picture.medium} alt="" />
              <p>{e.gender}</p>
            </div>
          );
        })}
      </div>
      <br />
      <br />
      <button
        onClick={() => {
          setCount((p) => p + 1);
        }}
      >
        Load more
      </button>
    </>
  );
}

// function NewShowMore(){
//   const [count,setCount] = useState(0)
//   const [data,setData] = useState([]);
//   useEffect(()=>{
//     async function fetchData() {
//       const response = await fetch(`https://randomuser.me/api/?page=${count}&results=5`)
//       const responseInJson = await response.json();
//       setData(prev => [...prev, ...responseInJson.results])
//       console.log(data);

//     }
//     fetchData();
//   },[count])
//   return<>
//   <h2>{count}</h2>
//   <div>
//     {data.map((e,key)=>{
//       return<div key={key}>
//         <h3>{e.name.first}</h3>
//         <img src={e.picture.medium} alt="" />
//       </div>
//     })}
//   </div>
//   <button onClick={()=>{
//     setCount(p=> p+1)
//   }}>Load more</button>
//   </>
// }
export default App;
