import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav>
      <style>{`
        :root {
          --primary: #FADADD;
          --fun-pink1: #FF69B4;
          --fun-pink2: #FF85B3;
          --dark: #D46A87;
          --text-dark: #5C3A21;
        }

        .navbar-custom {
          background: var(--primary);
          border-radius: 12px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 2rem;
          position: fixed;
          width: 100%;
          top: 0;
          z-index: 1000;
        }

        .navbar-brand h1 {
          margin: 0;
          color: var(--dark);
        }
        .navbar-brand h1:hover { color: var(--fun-pink1); }

        .nav-link {
          margin: 0 0.5rem;
          color: var(--dark);
          font-weight: 500;
          transition: 0.3s;
        }
        .nav-link:hover {
          color: var(--fun-pink2);
          transform: scale(1.05);
        }

        .desktop-menu { display: flex; gap: 1rem; align-items: center; }
        .navbar-toggler {
          display: none;
          flex-direction: column;
          gap: 5px;
          border: none;
          background: none;
          cursor: pointer;
        }
        .navbar-toggler span {
          width: 25px;
          height: 3px;
          background: var(--dark);
          border-radius: 2px;
          transition: all 0.3s;
        }
        .navbar-toggler.open span:nth-child(1) {
          transform: rotate(45deg) translate(5px,5px);
        }
        .navbar-toggler.open span:nth-child(2) { opacity: 0; }
        .navbar-toggler.open span:nth-child(3) {
          transform: rotate(-45deg) translate(5px,-5px);
        }

        /* Mobile Menu */
        .mobile-menu {
          display: none;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: var(--primary);
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 2rem;
          z-index: 999;
        }
        .mobile-menu.show { display: flex; }

        @media (max-width: 992px) {
          .desktop-menu { display: none; }
          .navbar-toggler { display: flex; }
        }
      `}</style>

      <div className="navbar-custom">
        <Link to="/" className="navbar-brand">
          <h1>Sweet & SPRINKLED</h1>
        </Link>

        {/* Desktop Menu */}
        <div className="desktop-menu">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/services" className="nav-link">Services</Link>
          <Link to="/products" className="nav-link">Products</Link>
          <Link to="/terms" className="nav-link">Terms</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </div>

        {/* Hamburger */}
        <button className={`navbar-toggler ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? "show" : ""}`}>
        <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/about" className="nav-link" onClick={() => setIsOpen(false)}>About</Link>
        <Link to="/services" className="nav-link" onClick={() => setIsOpen(false)}>Services</Link>
        <Link to="/products" className="nav-link" onClick={() => setIsOpen(false)}>Products</Link>
        <Link to="/terms" className="nav-link" onClick={() => setIsOpen(false)}>Terms</Link>
        <Link to="/contact" className="nav-link" onClick={() => setIsOpen(false)}>Contact</Link>
      </div>
    </nav>
  );
}
