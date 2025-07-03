import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const ProductCard = ({ id, title, price, images, returnPolicy }) => {
  const {cartItems,addToCart} = useContext(CartContext)
  return (
    <div
      key={id}
      style={{
        border: "1px solid #ddd",
        borderRadius: "12px",
        width: "300px",
        height: "350px",
        overflow: "hidden",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        margin: "10px",

      }}
    >
      <img
        src={images[0]}
        alt={title}
        style={{
          width: "100%",
          height: "180px",
          objectFit: "cover",
          
        }}
      />
      <div style={{ padding: "15px" }}>
        <h3 style={{ margin: "0 0 10px 0" }}>{title}</h3>
        <p style={{ margin: "0 0 8px 0", fontWeight: "bold" }}>${price}</p>
        <p style={{ margin: 0 }}>{returnPolicy}</p>
        <div style={{display :"flex" , alignItems :"center", justifyContent :"space-evenly"}}>
          <Link to={`/products/${id}`}>
            <button>View more</button>
          </Link>
          

          <button onClick={()=>{
            addToCart({ id, title, price, images, returnPolicy })}}>
            Add to cart
            </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
