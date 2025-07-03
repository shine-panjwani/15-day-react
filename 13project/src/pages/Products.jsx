import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import useDebounce from "../utils/useDebounce";
const Products = () => {
  const [data, setData] = useState([]);
  const itemsPerpage = 10;
  const totalItems = data.length;
  const totalPages = Math.ceil(totalItems / itemsPerpage);
  const [count, setCount] = useState(1);
  const startIndex = (count - 1) * itemsPerpage;
  const endIndex = startIndex + itemsPerpage;
  const currentItems = data.slice(startIndex, endIndex);

  const [filteredData, setFilteredData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  // stateVar for categories

  const [category, setCategory] = useState([]);
  const [countCat, setCountCat] = useState(1);
  const catPerPage = 5;
  const totalCatPages = Math.ceil(category.length / catPerPage);
  const startCategory = (countCat - 1) * catPerPage;
  const endCategory = startCategory + catPerPage;
  const currentCategories = category.slice(startCategory, endCategory);

  // stateVar for search btn
  const [searchVal, setSearchVal] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const debounceValue = useDebounce(searchVal, 500);

  useEffect(()=>{
    async function name() {
      const response = await fetch(`https://dummyjson.com/products/search?q=${searchQuery}`)
      const responseInjson =await response.json()
      setFilteredData(responseInjson.products);
    }
    name()
  },[searchQuery])

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://dummyjson.com/products/?limit=200");
      const responseInJson = await response.json();
      setData(responseInJson.products);
      console.log(responseInJson.products);
      
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchCategories() {
      const response = await fetch("https://dummyjson.com/products/categories");
      const results = await response.json();
      setCategory(results);
      console.log(results);
    }
    fetchCategories();
  }, []);

  async function handleBtn(slug) {
    const response = await fetch(
      `https://dummyjson.com/products/category/${slug}`
    );
    const results = await response.json();
    setFilteredData(results.products);
    setSelectedCategory(slug);
  }
  if (data.length === 0) {
    return <h2>Loading data</h2>;
  }

  const displayItems = filteredData.length > 0 ? filteredData : currentItems;
  return (
    <>
      <h1>Categories</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          margin: "20px 0",
        }}
      >
        <button
          onClick={() => setCountCat((p) => p - 1)}
          disabled={countCat === 1}
          style={{
            padding: "10px 16px",
            borderRadius: "6px",
            backgroundColor: countCat === 1 ? "#ccc" : "#007bff",
            color: "white",
            border: "none",
            cursor: countCat === 1 ? "not-allowed" : "pointer",
            transition: "0.3s",
          }}
        >
          Prev
        </button>

        {currentCategories.map((val, index) => (
          <button
            key={index}
            onClick={() => {
              setSelectedCategory(val.slug);
              handleBtn(val.slug);
            }}
            style={{
              padding: "10px 14px",
              borderRadius: "6px",
              backgroundColor:
                selectedCategory === val.slug ? "#343a40" : "#6c757d",
              color: "#fff",
              border: "none",
              cursor: "pointer",
              fontWeight: "500",
              textTransform: "capitalize",
              transition: "0.3s",
            }}
          >
            {val.name}
          </button>
        ))}

        <button
          onClick={() => setCountCat((p) => p + 1)}
          disabled={countCat === totalCatPages}
          style={{
            padding: "10px 16px",
            borderRadius: "6px",
            backgroundColor: countCat === totalCatPages ? "#ccc" : "#007bff",
            color: "white",
            border: "none",
            cursor: countCat === totalCatPages ? "not-allowed" : "pointer",
            transition: "0.3s",
          }}
        >
          Next
        </button>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "20px 0",
          gap: "10px",
        }}
      >
        <button 
        onClick={()=>{
          
          console.log(filteredData.map((e)=>{return e.price}));
          const arr =[...filteredData].sort((a,b)=>{return a.price - b.price});
          setFilteredData(arr)
        }}>₹Low to high</button>

        <button
        onClick={()=>{
          console.log(filteredData.map((e)=>{return e.price}));
          const newData = [...filteredData].sort((a,b)=>{return b.price-a.price})
          setFilteredData(newData);
          
        }}
        >₹High to low</button>
        <button onClick={()=>{
          setFilteredData([]);
        }}>clear filters</button>
        <input
          style={{
            padding: "12px 16px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "16px",
            width: "300px",
            outline: "none",
            transition: "all 0.3s ease",
          }}
          type="text"
          value={searchVal}
          onChange={(e) => {
            console.log(e.target.value);
            setSearchVal(e.target.value);
          }}
        />
        <button
          style={{
            padding: "12px 20px",
            borderRadius: "8px",
            backgroundColor: "#007bff",
            color: "white",
            fontSize: "16px",
            border: "none",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
          onClick={()=>{
            setSearchQuery(debounceValue)
          }}
        >
          Search
        </button>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {displayItems.map((e) => {
          const { id, title, price, images, returnPolicy } = e;
          return (
            <ProductCard
              key={id}
              id={id}
              title={title}
              price={price}
              images={images}
              returnPolicy={returnPolicy}
            />
          );
        })}
      </div>
      {currentItems && (
        <div>
          <button
            onClick={() => {
              setCount((p) => p - 1);
            }}
            disabled={count === 1}
          >
            Prev
          </button>
          {...Array(totalPages)
            .keys()
            .map((e) => {
              return (
                <button
                  style={{
                    backgroundColor: count === e + 1 ? "black" : "gray",
                  }}
                  onClick={() => {
                    setCount(e + 1);
                  }}
                  key={e + 1}
                >
                  {e + 1}
                </button>
              );
            })}
          <button
            onClick={() => {
              setCount((p) => p + 1);
            }}
            disabled={count+1 === data.length}
          >
            Next
          </button>
        </div>
      )}
    </>
  );
};

export default Products;
