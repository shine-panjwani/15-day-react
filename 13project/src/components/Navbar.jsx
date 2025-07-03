import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";

// Active link styling
const styleOfNavbar = ({ isActive }) => ({
  fontWeight: isActive ? "bold" : "normal",
  textDecoration: "none",
  color: isActive ? "#007bff" : "#white",
  padding: "8px 12px",
  borderRadius: "4px",
});

const Navbar = () => {
  const { total } = useContext(CartContext);
  const navigate = useNavigate();
  const { isAuth, users, logout } = useContext(AuthContext);
  return (
    <>
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          // width: "90%",
          // maxWidth: "1200px",
          margin: "20px auto",
          padding: "12px 20px",
          borderRadius: "8px",
          // backgroundColor: '#f8f9fa',
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          fontFamily: "sans-serif",
        }}
      >
        {/* 👇 Brand Name */}
        <NavLink to={"/"} style={styleOfNavbar}>
          <div
            style={{ fontSize: "22px", fontWeight: "bold", color: "#white" }}
          >
            🛒 MyShop
          </div>
        </NavLink>

        {/* 👇 Navigation Links */}
        <div style={{ display: "flex", gap: "20px" }}>
          <NavLink to="/" style={styleOfNavbar}>
            Home
          </NavLink>
          <NavLink to="/products" style={styleOfNavbar}>
            Products
          </NavLink>
          <NavLink to="/about" style={styleOfNavbar}>
            About
          </NavLink>
          <NavLink to="/contact" style={styleOfNavbar}>
            Contact
          </NavLink>
          <NavLink to="/cart" style={{ display: "flex" }}>
            🛒
            <span
              style={{
                padding: "5px",
                width: "7px",
                height: "5px",
                borderRadius: "50%",
              }}
            >
              {total}
            </span>
          </NavLink>
          <div style={{ display: "flex", alignItems: "center" }}>
            {isAuth ? (
              <>
                <p>Welcome , {users?.name}</p>
                <button
                  onClick={() => {
                    console.log("logout");
                    logout();
                    navigate("/signup");
                  }}
                >
                  Logout
                </button>
              </>
            ) : (
              <NavLink to={"/signup"}>Signup</NavLink>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
