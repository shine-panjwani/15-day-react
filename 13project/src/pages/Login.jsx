import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import {useLocation} from "react-router-dom"
const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation()
  console.log(location);
  console.log(location.pathname);
  
  
  const [error,setError] = useState("")
  function handleSubmit(e) {
    e.preventDefault();
    console.log(form);
    if(!form.email || !form.password ){
      setError("Fill all the fields")
    }
    const ok =login(form.email, form.password);
    if(ok){
      const redirectPage = location.state?.from?.pathname || "/"
      navigate(redirectPage, {replace :true})
    }else{
      setError("Invalid credentails")
    }
  }
  return (
    <div style={styles.container}>
      {error && (
        <p style={{ color: "red", textAlign: "center" }}>{error}</p>
      )}
      <h1 style={styles.heading}>Welcome Back</h1>
      <p style={styles.text}>
        Log in to continue shopping with <strong>BrandX</strong>.
      </p>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>
          Email
          <input
            type="email"
            placeholder="Enter your email"
            onChange={(e) => {
              setForm({ ...form, email: e.target.value });
            }}
            style={styles.input}
          />
        </label>

        <label style={styles.label}>
          Password
          <input
            type="password"
            onChange={(e) => {
              setForm({ ...form, password: e.target.value });
            }}
            placeholder="Enter your password"
            style={styles.input}
          />
        </label>

        <button type="submit" style={styles.button}>
          Log In
        </button>
      </form>

      <p style={styles.switchText}>
        New here?{" "}
        <NavLink to={"/signup"} style={styles.link}>
          Create an account
        </NavLink>
      </p>
    </div>
  );
};
const styles = {
  container: {
    maxWidth: "800px",
    margin: "40px auto",
    padding: "24px",
    backgroundColor: "#1e1e2a", // deep navy‑grey bg
    borderRadius: "12px",
    boxShadow: "0 6px 18px rgba(0,0,0,0.6)",
    fontFamily: "Arial, sans-serif",
    lineHeight: 1.7,
  },
  heading: {
    fontSize: "32px",
    color: "#00bfff", // cyan accent
    marginBottom: "20px",
    textAlign: "center",
  },
  text: {
    fontSize: "16px",
    color: "#d3d3d3", // light‑grey body text
    marginBottom: "24px",
    textAlign: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "18px",
  },
  label: {
    display: "flex",
    flexDirection: "column",
    fontSize: "16px",
    color: "#f0f0f0",
  },
  input: {
    marginTop: "8px",
    padding: "10px 14px",
    borderRadius: "8px",
    border: "1px solid #555",
    backgroundColor: "#2a2a3b",
    color: "#fff",
    fontSize: "14px",
  },
  button: {
    marginTop: "12px",
    padding: "12px",
    backgroundColor: "#00bfff",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: "bold",
    color: "#1e1e2a",
    cursor: "pointer",
  },
  switchText: {
    marginTop: "20px",
    fontSize: "14px",
    color: "#d3d3d3",
    textAlign: "center",
  },
  link: {
    color: "#00bfff",
    textDecoration: "underline",
  },
};
export default Login;
