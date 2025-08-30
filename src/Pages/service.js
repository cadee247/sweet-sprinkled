// src/Pages/Services.js
import React from "react";
import {
  FaStar,
  FaBirthdayCake,
  FaTruck,
  FaUtensils,
  FaRibbon,
  FaRegSmile,
  FaHeart,
  FaClock,
  FaLeaf,
  FaGem,
} from "react-icons/fa";

const services = [
  { id: 1, title: "Professional Baking", description: "Expertly baked cakes and pastries.", icon: <FaStar size={40} /> },
  { id: 2, title: "Custom Designs", description: "Personalized cakes for every occasion.", icon: <FaBirthdayCake size={40} /> },
  { id: 3, title: "On-Time Delivery", description: "Your treats delivered right when you need them.", icon: <FaTruck size={40} /> },
  { id: 4, title: "Event Catering", description: "We cater for birthdays, weddings, and any special events.", icon: <FaUtensils size={40} /> },
  { id: 5, title: "High-Quality Ingredients", description: "Only the finest ingredients are used in every bake.", icon: <FaLeaf size={40} /> },
  { id: 6, title: "Unique Decorations", description: "Beautifully decorated cakes that wow every guest.", icon: <FaRibbon size={40} /> },
  { id: 7, title: "Customer Satisfaction", description: "We make sure every order exceeds expectations.", icon: <FaRegSmile size={40} /> },
  { id: 8, title: "Passionate Baking", description: "Every cake is baked with love and care.", icon: <FaHeart size={40} /> },
  { id: 9, title: "Flexible Scheduling", description: "We work with your timeline to ensure perfection.", icon: <FaClock size={40} /> },
  { id: 10, title: "Premium Creations", description: "Standout cakes and treats that leave an impression.", icon: <FaGem size={40} /> },
];

export default function Services() {
  return (
    <section className="services-section container py-5">
      <h1 className="section-title text-center mb-4">Our Services</h1>
      <div className="row g-4">
        {services.map((service) => (
          <div key={service.id} className="col-sm-6 col-md-4">
            <div className="service-item text-center p-4 rounded shadow-sm">
              <div className="service-icon mb-3">{service.icon}</div>
              <h5 className="service-title fw-bold">{service.title}</h5>
              <p className="service-description small">{service.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Deposit & Refund Note */}
      <div className="deposit-note text-center mt-5 p-3 rounded">
        <p className="small mb-0">
          Please note: A <strong>50% deposit</strong> is required to secure your order. If refunded, <strong>20%</strong> will be deducted.
        </p>
      </div>
    </section>
  );
}
