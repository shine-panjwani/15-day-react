// Home.jsx
import React from 'react'
import Carousel from '../components/Carousel'
import { useLocation } from 'react-router-dom'
const Home = () => {
  const location = useLocation()
  console.log(location);
  
  return (
    <div
      style={{
        padding: '40px 20px',
        maxWidth: '1200px',
        margin: '0 auto',
        fontFamily: 'sans-serif',
        textAlign: 'center',
      }}
    >
      <h1
        style={{
          fontSize: '36px',
          marginBottom: '30px',
          color: '#007bff',
          letterSpacing: '1px',
        }}
      >
        🛍️ Welcome to MyShop
      </h1>
      <Carousel />
    </div>
  )
}

export default Home
