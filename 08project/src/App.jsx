import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
function App() {
  return (
    <>
      <Pagination />
    </>
  );
}
export default App;
function Pagination() {
  const [data, setData] = useState([]);
  const pageSize = 5;
  const totalPages = Math.ceil(data.length /pageSize);
  const [currentPage,setCurrentPage] = useState(1)
  const startIndex= (currentPage-1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentPageData = data.slice(startIndex,endIndex)

  useEffect(() => {
    async function mainly() {
      const response = await fetch("https://dummyjson.com/recipes?limit=500");
      const data = await response.json();
      console.log(data.recipes);
      setData(data.recipes);
    }
    mainly();
  }, []);
  return (
    <>
      <h1>Food Description</h1>
      <button onClick={()=>{
        setCurrentPage(p => Math.max(p-1,1))
      }}
      disabled={currentPage === 1}
      >Previous</button>
      {[...Array(totalPages).keys().map((e)=>{
        return <button
        style={{
              margin: "0 5px",
              backgroundColor : currentPage ===e +1 ?"blue" : "gray",
              color: "white",
              border: "none",
              padding: "5px 10px",
              borderRadius: "4px",
              cursor: "pointer",
            }}
            onClick={()=>setCurrentPage(e+1)}
        key={e}>{e+1}</button>
      })]}
      <button onClick={()=>{
        setCurrentPage(p=> p < totalPages ? p+1 : p)
      }}
      disabled= {currentPage === totalPages}
      >Next</button>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyItems: "center",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {currentPageData.map((e, key) => {
          return (
            <div
              style={{
                margin: "10px",
                width: "300px",
                border: "1px solid white",
                height : "300px"
              }}
              key={key}
            >
              <h2>{e.name}</h2>
              <div>
                <img style={{ width: "120px" }} src={e.image} alt="" />
              </div>
              <p>Rating : {e.rating}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}