// src/Components/Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#FADADD",
        padding: "15px 0",
        textAlign: "center",
        fontSize: "0.9rem",
        color: "#5C3A21",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1rem" }}>
        &copy; {new Date().getFullYear()} Sweet & Sprinkled. All rights reserved.
      </div>
    </footer>
  );
}
