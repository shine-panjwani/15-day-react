import React, { use } from 'react';
import {useLocation} from "react-router-dom"
const About = () => {
  const location = useLocation()
  console.log(location);
  
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>About Our Brand</h1>
      <p style={styles.text}>
        Welcome to <strong>BrandX</strong>, your number one destination for high-quality products.
        We're dedicated to giving you the very best of everything — from electronics to fashion — 
        with a focus on quality, affordability, and customer support.
      </p>

      <h2 style={styles.subheading}>Our Mission</h2>
      <p style={styles.text}>
        Our mission is simple: to make online shopping easier, more enjoyable, and affordable for everyone.
        We believe in great service, transparent pricing, and a seamless shopping experience.
      </p>

      <h2 style={styles.subheading}>Meet the Team</h2>
      <ul style={styles.list}>
        <li><strong>Shine Panjwani</strong> — Founder & CEO</li>
        <li><strong>Riya Sharma</strong> — Chief Product Officer</li>
        <li><strong>Aryan Mehta</strong> — Head of Development</li>
      </ul>

      <p style={styles.text}>
        We hope you enjoy our products as much as we enjoy offering them to you. 
        If you have any questions or comments, please don't hesitate to contact us!
      </p>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: '40px auto',
    padding: '24px',
    backgroundColor: '#1e1e2a',         // deep navy‑grey bg
    borderRadius: '12px',
    boxShadow: '0 6px 18px rgba(0,0,0,0.6)',
    fontFamily: 'Arial, sans-serif',
    lineHeight: 1.7,
  },
  heading: {
    fontSize: '32px',
    color: '#00bfff',                    // cyan accent
    marginBottom: '20px',
    textAlign: 'center',
  },
  subheading: {
    fontSize: '24px',
    marginTop: '30px',
    marginBottom: '12px',
    color: '#f0f0f0',
  },
  text: {
    fontSize: '16px',
    color: '#d3d3d3',                    // light‑grey body text
  },
  list: {
    paddingLeft: '20px',
    color: '#d3d3d3',
  },
};


export default About;
