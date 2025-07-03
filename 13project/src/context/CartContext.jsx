import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    try {
      const storedData = localStorage.getItem("cartData");
      if (storedData) {
        const parsedData = JSON.parse(storedData);
        if (Array.isArray(parsedData)) setCartItems(parsedData);
      }
    } catch (error) {
      console.warn("local parse error : ", error)
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("cartData", JSON.stringify(cartItems));
  }, [cartItems]);
  function addToCart(items) {
    setCartItems((prev) => {
      const found = prev.find((p) => p.id === items.id);
      if (found) {
        console.log("added", items);

        return prev.map((p) =>
          p.id === items.id ? { ...p, qty: p.qty + 1 } : p
        );
      }
      return [...prev, { ...items, qty: 1 }];
    });
  }
  function removeOne(id) {
    setCartItems((prev) =>
      prev
        .map((item) => (item.id === id ? { ...item, qty: item.qty - 1 } : item))
        .filter((item) => item.qty > 0)
    );
  }

  const total = cartItems.reduce((accumulator, currValue) => {
    return (accumulator += currValue.qty);
  }, 0);

  function deleteFromCart(id) {
    setCartItems((prev) => prev.filter((p) => p.id !== id));
  }
  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, deleteFromCart, removeOne, total }}
    >
      {children}
    </CartContext.Provider>
  );
}
