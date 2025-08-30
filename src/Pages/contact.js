// src/Pages/Contact.js
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef();
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wbigdic",
        "template_uet5vtp",
        formRef.current,
        "GnL9N0oURa_ukoc-b"
      )
      .then(
        () => {
          setStatusMessage("✅ Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          console.error("EmailJS error:", error);
          setStatusMessage(
            "❌ Failed to send message. Please check your IDs and try again."
          );
        }
      );
  };

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
        }

        h1,h2,h3,h4,h5,h6 { font-weight: 700; color: var(--dark); }
        h1 { font-size: 2.8rem; margin-bottom: 0.5rem; }
        h2 { font-size: 2rem; margin-bottom: 1rem; }

        .text-pink { color: var(--fun-pink1); }

        .page-header {
          background: var(--primary);
          text-align: center;
          padding: 3rem 1rem 2rem; /* moved higher by reducing top padding */
          border-radius: 12px;
          margin-bottom: 2rem;
        }

        .page-header h1 { color: var(--dark); }

        .form-block {
          background: var(--primary);
          border-radius: 16px;
          padding: 3rem; /* bigger form block */
          margin-bottom: 1.5rem;
          box-shadow: 0 6px 20px rgba(0,0,0,0.08);
          transition: all 0.3s ease;
        }
        .form-block:hover { background: var(--fun-pink2); color: #fff; }

        .btn-pink {
          background: var(--primary);
          color: var(--secondary);
          border-radius: 50px;
          padding: 1rem 2.5rem; /* bigger button */
          font-weight: 600;
          border: none;
          transition: all 0.3s ease;
        }
        .btn-pink:hover {
          background: var(--fun-pink1);
          color: #fff;
          transform: scale(1.05);
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }

        .form-floating input,
        .form-floating textarea {
          border-radius: 12px;
          border: 1px solid var(--dark);
          padding: 1.25rem; /* larger input fields */
        }
        .form-floating label { padding-left: 0.75rem; }

        .status-message { font-weight: 600; font-size: 1rem; }

        @media (max-width: 768px) {
          .page-header { padding: 2rem 1rem 1rem; }
          h1 { font-size: 2.2rem; }
          h2 { font-size: 1.5rem; }
          .form-block { padding: 2rem; }
          .btn-pink { width: 100%; font-size: 1rem; padding: 0.75rem 1rem; }
        }
      `}</style>

      {/* Page Header */}
      <div className="page-header">
        <h1>Contact Us</h1>
      </div>

      {/* Contact Form */}
      <div className="container-xxl py-6">
        <div className="container">
          <div className="text-center mx-auto mb-5" style={{ maxWidth: "600px" }}>
            <p className="text-pink text-uppercase mb-2">// Contact Us</p>
            <h2>Have Any Questions? Get In Touch</h2>
          </div>

          <div className="row g-0 justify-content-center">
            <div className="col-lg-9"> {/* bigger column */}
              <p className="text-center mb-4">
                Please fill out the form below, and we’ll get back to you as soon
                as possible.
              </p>

              <form ref={formRef} onSubmit={handleSubmit}>
                <div className="form-block">
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input type="text" name="user_name" className="form-control" id="name" placeholder="Your Name" required />
                        <label htmlFor="name">Your Name</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input type="email" name="user_email" className="form-control" id="email" placeholder="Your Email" required />
                        <label htmlFor="email">Your Email</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <input type="text" name="subject" className="form-control" id="subject" placeholder="Subject" required />
                        <label htmlFor="subject">Subject</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea name="message" className="form-control" placeholder="Leave a message here" id="message" style={{ height: "220px" }} required></textarea>
                        <label htmlFor="message">Message</label>
                      </div>
                    </div>
                    <div className="col-12 text-center mt-3">
                      <button type="submit" className="btn-pink">Send Message</button>
                    </div>
                    {statusMessage && (
                      <div className="col-12 text-center mt-3">
                        <p className={`status-message ${statusMessage.startsWith("✅") ? "text-success" : "text-danger"}`}>
                          {statusMessage}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
