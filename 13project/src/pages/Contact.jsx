import React, { useState } from 'react';

function Contact() {
  const [name, setName]       = useState('');
  const [email, setEmail]     = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, message });
    setName(''); setEmail(''); setMessage('');
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>📬 Contact Us</h2>

      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div style={styles.fieldWrap}>
          <label style={styles.label}>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
            style={styles.input}
          />
        </div>

        {/* Email */}
        <div style={styles.fieldWrap}>
          <label style={styles.label}>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            style={styles.input}
          />
        </div>

        {/* Message */}
        <div style={styles.fieldWrap}>
          <label style={styles.label}>Message:</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write your message"
            required
            rows="4"
            style={{ ...styles.input, resize: 'vertical' }}
          />
        </div>

        <button
          type="submit"
          style={styles.button}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#0190d9')}
          onMouseOut ={(e) => (e.target.style.backgroundColor = '#00bfff')}
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

const styles = {
  /* same dark palette used in About page */
  container: {
    maxWidth: '600px',
    margin: '40px auto',
    padding: '32px',
    backgroundColor: '#1e1e2a',
    borderRadius: '12px',
    boxShadow: '0 6px 18px rgba(0,0,0,0.6)',
    fontFamily: 'Arial, sans-serif',
    lineHeight: 1.7,
  },
  heading: {
    fontSize: '30px',
    color: '#00bfff',
    textAlign: 'center',
    marginBottom: '28px',
  },
  fieldWrap: { marginBottom: '22px' },
  label: {
    display: 'block',
    marginBottom: '6px',
    fontWeight: 'bold',
    color: '#f0f0f0',
  },
  input: {
    width: '100%',
    padding: '12px',
    borderRadius: '8px',
    border: '1px solid #444',
    backgroundColor: '#2b2b3a',
    color: '#d3d3d3',
    fontSize: '16px',
  },
  button: {
    width: '100%',
    padding: '14px',
    backgroundColor: '#00bfff',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background-color 0.25s ease',
  },
};

export default Contact;
