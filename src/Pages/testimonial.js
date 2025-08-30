import React from "react";

export default function TestimonialPage() {
  const testimonials = [
    {
      img: "img/testimonial-1.jpg",
      name: "Client Name 1",
      profession: "Profession 1",
      text: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit."
    },
    {
      img: "img/testimonial-2.jpg",
      name: "Client Name 2",
      profession: "Profession 2",
      text: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit."
    },
    {
      img: "img/testimonial-3.jpg",
      name: "Client Name 3",
      profession: "Profession 3",
      text: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit."
    },
    {
      img: "img/testimonial-4.jpg",
      name: "Client Name 4",
      profession: "Profession 4",
      text: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit."
    }
  ];

  return (
    <div className="container-xxl bg-light my-6 py-6 pb-0" style={{ margin: "12rem 0" }}>
      <div className="container">
        {/* Header */}
        <div className="text-center mx-auto mb-5 wow fadeInUp" style={{ maxWidth: "500px" }}>
          <p className="text-primary text-uppercase mb-2">// Client's Review</p>
          <h1 className="display-6 mb-4">More Than 20000+ Customers Trusted Us</h1>
        </div>

        {/* Testimonial carousel */}
        <div className="owl-carousel testimonial-carousel wow fadeInUp">
          {testimonials.map((t, index) => (
            <div key={index} className="testimonial-item bg-white rounded p-4">
              <div className="d-flex align-items-center mb-4">
                <img className="flex-shrink-0 rounded-circle border p-1" src={t.img} alt={t.name} />
                <div className="ms-4">
                  <h5 className="mb-1">{t.name}</h5>
                  <span>{t.profession}</span>
                </div>
              </div>
              <p className="mb-0">{t.text}</p>
            </div>
          ))}
        </div>

        {/* Newsletter subscription */}
        <div className="bg-primary text-light rounded-top p-5 my-6 mb-0 wow fadeInUp">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1 className="display-4 text-light mb-0">Subscribe Our Newsletter</h1>
            </div>
            <div className="col-md-6 text-md-end">
              <div className="position-relative">
                <input
                  className="form-control bg-transparent border-light w-100 py-3 ps-4 pe-5"
                  type="text"
                  placeholder="Your email"
                />
                <button type="button" className="btn btn-dark py-2 px-3 position-absolute top-0 end-0 mt-2 me-2">
                  SignUp
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
