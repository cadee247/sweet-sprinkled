// src/Pages/Terms.js
import React from "react";
import { FaMoneyBillWave, FaTruck, FaBirthdayCake, FaExclamationTriangle, FaCopyright, FaShieldAlt, FaClock } from "react-icons/fa";

export default function Terms() {
  return (
    <div className="container py-6">
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
        }

        h1,h2,h3,h4,h5,h6 {
          font-weight: 700;
          color: var(--dark);
        }

        h1 { font-size: 2.5rem; }
        h5 { font-size: 1.25rem; margin-bottom: 0.5rem; display: flex; align-items: center; }
        h5 svg { margin-right: 0.5rem; color: var(--fun-pink1); }

        p { line-height: 1.6; margin-bottom: 1rem; }
        .terms-block {
          background: var(--primary);
          border-radius: 16px;
          padding: 2rem;
          margin-bottom: 1.5rem;
          box-shadow: 0 4px 15px rgba(0,0,0,0.05);
          transition: all 0.3s ease;
        }
        .terms-block:hover { background: var(--fun-pink2); color: #fff; }

        .text-pink { color: var(--fun-pink1); font-weight: 600; }
        .container { max-width: 900px; margin: auto; }

        @media (max-width: 768px) {
          h1 { font-size: 2rem; }
          h5 { font-size: 1.1rem; }
          .terms-block { padding: 1.5rem; }
        }
      `}</style>

      <h1 className="text-center mb-5 text-pink">Terms & Conditions</h1>

      <div className="terms-block">
        <p>
          Welcome to Sweet & Sprinkled Bakery! By using our website and services,
          you agree to comply with and be bound by the following terms and conditions.
        </p>
      </div>

      <div className="terms-block">
        <h5><FaMoneyBillWave /> Orders and Payments</h5>
        <p>
          A 50% deposit is required to confirm your order. In case of cancellations,
          20% of the deposit will be retained as a cancellation fee. Full payment
          is due before delivery or collection.
        </p>
      </div>

      <div className="terms-block">
        <h5><FaTruck /> Delivery & Pick-up</h5>
        <p>
          We strive to deliver your order on time. Any delivery delays due to
          unforeseen circumstances will be communicated promptly.
        </p>
        <p><FaClock className="me-2" /> Estimated time frame: 24–48 hours for standard orders; special event orders may require longer notice.</p>
      </div>

      <div className="terms-block">
        <h5><FaBirthdayCake /> Custom Orders</h5>
        <p>
          All custom designs and special requests must be confirmed with us in
          advance. We reserve the right to decline orders that cannot be reasonably fulfilled.
        </p>
      </div>

      <div className="terms-block">
        <h5><FaExclamationTriangle /> Allergies & Ingredients</h5>
        <p>
          We take care to use quality ingredients. Customers are responsible
          for checking ingredients and notifying us of allergies or dietary restrictions.
        </p>
      </div>

      <div className="terms-block">
        <h5><FaCopyright /> Intellectual Property</h5>
        <p>
          All content, images, and designs on this website are the property of
          Sweet & Sprinkled Bakery and may not be reproduced without permission.
        </p>
      </div>

      <div className="terms-block">
        <h5><FaShieldAlt /> Liability</h5>
        <p>
          Sweet & Sprinkled Bakery is not liable for any damages arising from the
          use of our products or website beyond the purchase value.
        </p>
      </div>

      <div className="terms-block">
        <p>
          By placing an order or using our website, you agree to these terms and
          conditions. Thank you for trusting Sweet & Sprinkled Bakery!
        </p>
      </div>
    </div>
  );
}
