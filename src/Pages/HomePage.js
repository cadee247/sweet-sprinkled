// src/Pages/HomePage.jsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import cake5 from "../assets/cake5.jpg";
import cake1 from "../assets/cake1.jpg";
import cake4 from "../assets/cake4.jpg";

function HomePage() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div>
      <style>{`
        :root {
          --primary: #FADADD;
          --primary-hover: #FFB6C1;
          --secondary: #5C3A21;
          --light: #FFF0F5;
          --dark: #D46A87;
          --fun-pink1: #FF69B4;
          --fun-pink2: #FF85B3;
        }

        body {
          background: var(--light);
          font-family: 'Poppins', sans-serif;
          color: var(--secondary);
          margin: 0;
        }

        h1,h2,h3,h4,h5,h6 { font-weight: 700; color: var(--dark); }
        h1:hover,h2:hover,h3:hover { color: var(--fun-pink1); }
        .text-pink { color: var(--fun-pink1); }

        .btn-pink {
          background: var(--primary);
          color: var(--secondary);
          border-radius: 50px;
          padding: 0.7rem 2rem;
          font-weight: 600;
          border: none;
          transition: all 0.3s ease;
          display: inline-block;
        }
        .btn-pink:hover {
          background: var(--fun-pink1);
          color: #fff;
          transform: scale(1.05);
        }

        .hero-overlay {
          background-color: rgba(255,182,193,0.8);
          border-radius: 16px;
          padding: 2rem;
          max-width: 90%;
          margin: auto;
        }

        /* Welcome Section */
        .welcome-section {
          display: flex;
          flex-wrap: wrap;
          align-items: flex-start;
          gap: 2rem;
          justify-content: center;
        }
        .welcome-text {
          flex: 1;
          min-width: 280px;
        }
        .welcome-text p { line-height: 1.8; }

        .about-images {
          flex: 1;
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          justify-content: center;
        }
        .about-images img {
          width: 100%;
          max-width: 300px;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          transition: transform 0.3s ease;
        }
        .about-images img:hover { transform: scale(1.05); }

        .section-block {
          background: var(--primary-hover);
          border-radius: 16px;
          padding: 2rem 1rem;
          margin: 2rem 0;
          text-align: center;
        }

        @media (max-width: 992px) {
          .welcome-section {
            flex-direction: column;
            text-align: center;
          }
          .about-images {
            flex-direction: row;
            gap: 1rem;
          }
          .about-images img { max-width: 45%; }
        }

        @media (max-width: 576px) {
          .about-images img { max-width: 100%; }
          .hero-overlay { padding: 1rem; }
          h1 { font-size: 1.8rem; }
          h2 { font-size: 1.5rem; }
          p { font-size: 0.95rem; }
          .btn-pink { width: 100%; padding: 0.7rem 0; }
        }
      `}</style>

      {/* Hero Section */}
      <div className="position-relative" style={{ width: "100%", overflow: "hidden" }}>
        <img
          className="w-100"
          src={cake5}
          alt="Delicious Cake"
          style={{ maxHeight: "650px", objectFit: "cover", width: "100%" }}
        />
        <div
          className="position-absolute top-50 start-50 translate-middle text-center hero-overlay"
        >
          <p className="text-pink text-uppercase fw-bold mb-2">// The Best Bakery</p>
          <h1 className="display-5 mb-3">We Bake With Passion</h1>
          <p className="fs-6 mb-4">
            Welcome to <strong>Sweet & SPRINKLED</strong>, where every treat is a masterpiece.
            Freshly baked, crafted with love, and designed to bring joy to every occasion.
          </p>
          <Link to="/products" className="btn-pink">Browse Our Menu</Link>
        </div>
      </div>

      {/* Welcome Section */}
      <div className="container-xxl py-6">
        <div className="container welcome-section">
          {/* Welcome Text */}
          <div className="welcome-text" data-aos="fade-down">
            <p className="text-pink text-uppercase fw-bold mb-2">// Welcome</p>
            <h2 className="mb-3">Welcome to Sweet & SPRINKLED!</h2>
            <p>
              Step into a world where every treat is a masterpiece, crafted with love and sprinkled with joy. At Sweet & SPRINKLED, we believe that baking is an art, and every cake or cupcake we make tells its own story. From the soft, velvety layers to the perfect swirl of frosting on top, every bite is designed to delight your senses.  
              <br/><br/>
              Our passion for baking goes beyond just making desserts it's about creating memories. Whether it's a birthday, wedding, or a simple treat to brighten your day, we put our heart into each creation. Our team hand-selects the finest ingredients, ensuring each cake is moist, flavorful, and visually stunning.  
              <br/><br/>
              From classic flavors to custom creations, we cater to your every sweet desire. Every sprinkle, every chocolate drizzle, every carefully crafted decoration is a celebration in itself. Welcome to a place where sweetness meets creativity, and every visit leaves you craving for more.
            </p>
          </div>

          {/* Images */}
          <div className="about-images" data-aos="fade-right">
            <img src={cake1} alt="Cake 1" />
            <img src={cake4} alt="Cake 4" />
          </div>
        </div>
      </div>

      {/* Section Blocks */}
      <div className="section-block" data-aos="fade-up">
        <h2>Our Sweet Promise</h2>
        <p>
          Every cake we bake is made with love, using the finest ingredients and freshly crafted each day. Sweet & Sprinkled ensures every bite is unforgettable.
        </p>
      </div>

      <div className="section-block" data-aos="fade-up" data-aos-delay="200">
        <h2>Custom Cakes & Cupcakes</h2>
        <p>
          From birthdays to weddings, our custom designs make every occasion special. Tell us your vision and we bring it to life!
        </p>
      </div>
    </div>
  );
}

export default HomePage;
