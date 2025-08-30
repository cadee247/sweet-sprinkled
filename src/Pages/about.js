// src/Pages/About.jsx
import React from "react";
import cake2 from '../assets/cake2.jpg';
import cake5 from '../assets/cake5.jpg';

const testimonials = [
  {
    name: "Janis.",
    text: "Sweet & Sprinkled made my birthday cake—it was a red velvet dream! It was moist and delicious. Highly recommend.",
    avatar: "https://via.placeholder.com/80",
    rating: 5,
  },
  {
    name: "James L.",
    text: "I placed a last-minute order just a day before, and Sweet & Sprinkled came through! Perfect cake, amazing service, delivered on time.",
    avatar: "https://via.placeholder.com/80",
    rating: 5,
  },
  {
    name: "Mellissa.",
    text: "Friendly service, creative designs, and absolutely delicious bakes — Sweet & Sprinkled is our go-to for every celebration!",
    avatar: "https://via.placeholder.com/80",
    rating: 5,
  },
];

export default function About() {
  return (
    <>
      <style>{`
        :root {
          --primary: #FADADD;
          --dark: #D46A87;
          --fun-pink1: #FF69B4;
          --fun-pink2: #FF85B3;
          --text-dark: #5C3A21;
        }

        body {
          font-family: 'Poppins', sans-serif;
          background: #FFF0F5;
          color: var(--text-dark);
          margin: 0;
        }

        /* Page Header */
        .page-header {
          background: var(--primary);
          text-align: center;
          padding: 8rem 1rem 4rem;
          border-radius: 12px;
          margin-bottom: 2rem;
        }
        .page-header h1 {
          font-size: 3rem;
          font-weight: 700;
          color: var(--dark);
        }

        /* About Section */
        .about-section {
          background: #fff0f5;
          border-radius: 12px;
          padding: 4rem 1rem;
        }
        .about-text p {
          font-size: 1.05rem;
          line-height: 1.8;
        }
        .section-subtitle {
          text-transform: uppercase;
          color: var(--fun-pink1);
          font-weight: 700;
          margin-bottom: 0.5rem;
        }
        .section-title {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          color: var(--dark);
        }
        .section-description {
          margin-bottom: 2rem;
        }

        .img-twice {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .img-twice img {
          width: 100%;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
          transition: transform 0.3s;
        }
        .img-twice img:hover { transform: scale(1.05); }

        .check-icon { color: var(--fun-pink1); font-weight: 700; margin-right: 0.5rem; }

        /* Testimonials */
        .testimonial-item {
          background: var(--primary);
          border-radius: 16px;
          padding: 2rem;
          transition: all 0.3s ease;
          box-shadow: 0 4px 20px rgba(0,0,0,0.05);
          text-align: center;
        }
        .testimonial-item:hover { background: var(--fun-pink2); color: #fff; transform: translateY(-5px); }
        .testimonial-text { font-style: italic; margin-bottom: 0.75rem; }
        .testimonial-name { font-weight: 600; margin-bottom: 0.25rem; }
        .testimonial-rating { color: gold; font-size: 1rem; }

        @media (max-width: 768px) {
          .img-twice { flex-direction: row; flex-wrap: wrap; gap: 0.5rem; }
          .img-twice img { width: 48%; }
          .section-title { font-size: 1.75rem; }
          .section-description { font-size: 1rem; }
          .page-header h1 { font-size: 2.2rem; }
        }
      `}</style>

      {/* Page Header */}
      <section className="page-header">
        <h1>About Sweet & SPRINKLED</h1>
      </section>

      {/* About Section */}
      <section className="about-section container-xxl">
        <div className="container">
          <div className="row g-5 align-items-center">
            {/* Images */}
            <div className="col-lg-6">
              <div className="img-twice">
                <img src={cake2} alt="Bakery interior" />
                <img src={cake5} alt="Fresh pastries" />
              </div>
            </div>

            {/* Text */}
            <div className="col-lg-6">
              <div className="about-text">
                <p className="section-subtitle">// About Us</p>
                <h2 className="section-title">We Bake Every Item With Love</h2>
                <p className="section-description">
                  Sweet & Sprinkled is your local haven for handcrafted cakes and cupcakes.
                  Each creation tells a story of love and care. From elegant birthday tiers
                  to cheeky mini cupcakes, we craft every sweet moment to be unforgettable.
                  <br/><br/>
                  Our team uses only the finest ingredients, ensuring every bite is moist,
                  flavorful, and memorable. Custom designs capture the spirit of your
                  celebrations, and every sprinkle is a little celebration of joy.
                  <br/><br/>
                  Our commitment to quality is unwavering. We use only the finest ingredients, ensuring every bite is moist, rich, and flavorful. 
                  We avoid preservatives, artificial fillers, or shortcuts, so every dessert is as fresh and delectable as if it were made for our own family. 
                  Beyond taste, we strive to create an experience: a moment of delight, a touch of wonder, and a sprinkle of happiness for everyone who enjoys our baked goods.
                  <br/><br/>
                  Sweet & SPRINKLED is more than a bakery—it’s a place where creativity meets passion, and where every celebration becomes unforgettable. 
                  We invite you to explore our world of sweetness, to taste the love we bake into each creation, and to let us make your special moments even sweeter.
                </p>
                <div className="row g-2 mb-4">
                  {["Quality ingredients", "Custom designs", "No preservatives", "Freshly baked"].map((item, i) => (
                    <div className="col-sm-6 d-flex align-items-center" key={i}>
                      <span className="check-icon">✔</span> {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="testimonial-section container-xxl py-6">
        <div className="container">
          <div className="text-center mx-auto mb-5" style={{ maxWidth: "600px" }}>
            <p className="section-subtitle">// Happy Customers</p>
            <h2 className="section-title">What People Are Saying</h2>
          </div>
          <div className="row g-4">
            {testimonials.map((t, i) => (
              <div className="col-lg-4 col-md-6" key={i}>
                <div className="testimonial-item rounded shadow-sm">
                  <img src={t.avatar} alt={t.name} className="rounded-circle mb-3" width={80} height={80} />
                  <p className="testimonial-text">"{t.text}"</p>
                  <h5 className="testimonial-name">{t.name}</h5>
                  <div className="testimonial-rating">
                    {"★".repeat(t.rating)}{"☆".repeat(5 - t.rating)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
