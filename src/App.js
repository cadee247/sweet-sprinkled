// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import './assets/css/style.css';

// Components
import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import HomePage from "./Pages/HomePage";
import About from './Pages/about';
import Service from './Pages/service';
import Products from './Pages/product';
import Testimonial from './Pages/testimonial';
import Contact from './Pages/contact';
import TestDummy from './Pages/TestDummy';
import Terms from './Pages/terms';

function Layout() {
  const location = useLocation();

  // Show Topbar only on non-home pages
  const showTopbar = location.pathname !== "/";

  // Set top offset for main content so it doesn't overlap fixed navbar
  const topOffset = 80 + (showTopbar ? 40 : 0); // adjust according to navbar & topbar height

  return (
    <>
      {showTopbar && <Topbar />}
      <Navbar />

      <main style={{ paddingTop: `${topOffset}px`, flexGrow: 1 }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Service />} />
          <Route path="/products" element={<Products />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/test" element={<TestDummy />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Layout />
      </div>
    </Router>
  );
}
