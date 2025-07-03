import { useEffect, useState } from "react";
import "./App.css";
import NotFound from "./pages/NotFound";
import { Route, Routes, BrowserRouter, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
function App() {
  return (
    <>
      {/* <BrowserRouter> */}
        <Navbar />

        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
