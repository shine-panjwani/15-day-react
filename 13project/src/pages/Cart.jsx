import { useContext } from "react";
import { CartContext } from "../context/CartContext";
// { cartItems, addToCart, deleteFromCart ,removeOne}
function Cart() {
  const { cartItems, deleteFromCart,addToCart ,removeOne} = useContext(CartContext);
  return (
    <>
      <div>
        <h1>Cart </h1>
        {cartItems.length === 0 ? (
          <p>Cart is empty</p>
        ) : (
          cartItems.map((item) => {
            return (
              <div style={{border : "1px solid white"}} key={item.id}>
                <img src={item.images[0]} alt="" />
                <p>{item.title}</p>
                <p>Price : ${item.price}</p>
                <p>Total amount : ${item.price} x {item.qty}</p>
                <div>
                  <button onClick={()=>{
                    addToCart(item)
                  }}>+</button>
                  <button onClick={()=>{
                    console.log(cartItems);
                   removeOne(item.id)
                  }}>-</button>
                </div>
                <button onClick={()=>{deleteFromCart(item.id)}}>Remove</button>
              </div>
            );
          })
        )}
      </div>
    </>
  );
}
export default Cart;