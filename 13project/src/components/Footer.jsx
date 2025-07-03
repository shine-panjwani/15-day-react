// Footer.jsx
import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "#222", color: "#fff", padding: "40px 20px" }}>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        maxWidth: "1200px",
        margin: "0 auto"
      }}>
        {/* About Section */}
        <div style={{ flex: "1", minWidth: "250px", margin: "10px" }}>
          <h3>About Us</h3>
          <p>We are a modern web development company helping businesses grow online with smart digital solutions.</p>
        </div>

        {/* Contact Info */}
        <div style={{ flex: "1", minWidth: "250px", margin: "10px" }}>
          <h3>Contact</h3>
          <p>Email: info@mywebsite.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Address: 123 Main Street, City, India</p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div style={{ textAlign: "center", marginTop: "40px", borderTop: "1px solid #444", paddingTop: "20px" }}>
        <p>&copy; 2025 MyWebsite. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
