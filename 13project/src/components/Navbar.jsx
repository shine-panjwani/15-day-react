import React from 'react';
import { NavLink } from 'react-router-dom';

// Active link styling
const styleOfNavbar = ({ isActive }) => ({
  fontWeight: isActive ? 'bold' : 'normal',
  textDecoration: 'none',
  color: isActive ? '#007bff' : '#white',
  padding: '8px 12px',
  borderRadius: '4px',
});

const Navbar = () => {
  return (
    <>
      <nav
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '90%',
          maxWidth: '1200px',
          margin: '20px auto',
          padding: '12px 20px',
          borderRadius: '8px',
          // backgroundColor: '#f8f9fa',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
          fontFamily: 'sans-serif',
        }}
      >
        {/* 👇 Brand Name */}
        <div style={{ fontSize: '22px', fontWeight: 'bold', color: '#white' }}>
          🛒 MyShop
        </div>

        {/* 👇 Navigation Links */}
        <div style={{ display: 'flex', gap: '20px' }}>
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
          <NavLink to="/cart" style={styleOfNavbar}>
            Cart
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
