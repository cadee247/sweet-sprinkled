// src/Pages/Products.js
import React from "react";
import cake6 from "../assets/cake6.jpg";
import cake7 from "../assets/cake7.jpg";
import cake8 from "../assets/cake8.jpg";
import cake9 from "../assets/cake9.jpg";
import cake10 from "../assets/cake10.jpg";
import cake11 from "../assets/cake11.jpg";
import cake12 from "../assets/cake12.jpg";
import cake13 from "../assets/cake13.jpg";
import cake14 from "../assets/cake14.jpg";
import cake15 from "../assets/cake15.jpg";
import cake16 from "../assets/cake16.jpg";
import cake17 from "../assets/cake17.jpg";

export default function Products() {
  const galleryImages = [cake6, cake7, cake8, cake9, cake10, cake11, cake12, cake13, cake14, cake15, cake16, cake17];

  return (
    <div className="container-xxl py-6">
      {/* Page Header */}
      <section className="text-center mb-5">
        <h1 className="display-4 text-dark mb-3">Our Sweet Creations</h1>
        <p className="fs-5 text-secondary">
          At <strong>Sweet & Sprinkled</strong>, we cater for any event – birthdays, weddings,anniversaries, corporate events, or just a sweet treat for yourself. Each item is freshly baked, handcrafted, and designed to impress. Have a look at some of our delicious creations below!:
        </p>
      </section>

      {/* Gallery */}
      <section className="row g-3">
        {galleryImages.map((img, i) => (
          <div key={i} className="col-6 col-md-4 col-lg-3">
            <div className="product-item rounded shadow-sm overflow-hidden">
              <img
                src={img}
                alt={`Gallery item ${i + 1}`}
                className="img-fluid"
                style={{ transition: "transform 0.3s" }}
              />
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
