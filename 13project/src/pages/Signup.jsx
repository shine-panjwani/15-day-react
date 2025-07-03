import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Signup = () => {
  const navigate = useNavigate();
  const { signup } = useContext(AuthContext);
  const [form, setform] = useState({ name: "", email: "", password: "" });
  function handleSubmit(e) {
    e.preventDefault();
    if (signup(form)) {
      navigate("/")
    }
  }
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Create Your Account</h1>
      <p style={styles.text}>
        Join <strong>BrandX</strong> and start your shopping journey today!
      </p>

      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>
          Full Name
          <input
            type="text"
            placeholder="Enter your name"
            onChange={(e) => {
              setform({ ...form, name: e.target.value });
            }}
            style={styles.input}
          />
        </label>

        <label style={styles.label}>
          Email
          <input
            type="email"
            onChange={(e) => {
              setform({ ...form, email: e.target.value });
            }}
            placeholder="Enter your email"
            style={styles.input}
          />
        </label>

        <label style={styles.label}>
          Password
          <input
            onChange={(e) => {
              setform({ ...form, password: e.target.value });
            }}
            type="password"
            placeholder="Enter your password"
            style={styles.input}
          />
        </label>

        <button type="submit" style={styles.button}>
          Sign Up
        </button>
      </form>

      <p style={styles.switchText}>
        Already have an account?{" "}
        <NavLink to={"/login"} style={styles.link}>
          Login
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

export default Signup;
