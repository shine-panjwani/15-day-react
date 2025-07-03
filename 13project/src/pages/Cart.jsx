import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cartItems, deleteFromCart, addToCart, removeOne } =
    useContext(CartContext);

  /* ----------  Inline style objects  ---------- */
  const styles = {
    container: {
      maxWidth: "900px",
      margin: "40px auto",
      padding: "0 20px",
      color: "#fff",
      fontFamily: "sans‑serif",
    },
    card: {
      display: "flex",
      gap: "16px",
      alignItems: "center",
      background: "#222",
      padding: "16px",
      borderRadius: "8px",
      marginBottom: "12px",
      boxShadow: "0 2px 6px rgba(0,0,0,0.25)",
    },
    img: {
      width: "80px",
      height: "80px",
      objectFit: "cover",
      borderRadius: "6px",
    },
    info: { flexGrow: 1 },
    price: { fontWeight: 600 },
    qtyWrap: { display: "flex", alignItems: "center", gap: "8px" },
    btn: {
      padding: "6px 10px",
      background: "#444",
      color: "#fff",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
    },
    removeBtn: {
      padding: "6px 12px",
      background: "#e74c3c",
      color: "#fff",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
    },
  };
  /* -------------------------------------------- */

  function handleGrandTotal() {
    const total = cartItems.reduce((accumulator, currVal) => {
      return (accumulator += currVal.price * currVal.qty);
    }, 0);
    return total;
  }
  return (
    <>
      <div style={styles.container}>
        <h1 style={{ marginBottom: "24px", textAlign: "center" }}>🛒 Cart</h1>

        {cartItems.length === 0 ? (
          <p style={{ textAlign: "center" }}>Cart is empty</p>
        ) : (
          cartItems.map((item) => (
            <div style={styles.card} key={item.id}>
              <img src={item.images[0]} alt={item.title} style={styles.img} />

              <div style={styles.info}>
                <p>{item.title}</p>
                <p style={styles.price}>Price • ${item.price}</p>
                <p>
                  Total • ${item.price} × {item.qty} = 
                  <strong>${item.price * item.qty}</strong>
                </p>

                <div style={styles.qtyWrap}>
                  <button style={styles.btn} onClick={() => addToCart(item)}>
                    +
                  </button>
                  <span>{item.qty}</span>
                  <button
                    style={styles.btn}
                    onClick={() => removeOne(item.id)}
                    disabled={item.qty === 1}
                  >
                    −
                  </button>
                </div>
              </div>

              <button
                style={styles.removeBtn}
                onClick={() => deleteFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>
      <div>
        
        <h3>Grand total : {handleGrandTotal()}</h3>
      </div>
    </>
  );
}

export default Cart;
