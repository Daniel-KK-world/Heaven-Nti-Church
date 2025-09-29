import React from "react";

function Contact() {
  return (
    <section className="contact-section py-5 bg-light">
      <div className="container">
        <h2 className="text-center text-primary fw-bold mb-4">Get in Touch</h2>
        <p className="text-center text-muted mb-5">
          For Prayer requests, Testimonies or to visit, we'd love to hear from you!
        </p>

        <div className="row">
          {/* Contact Form */}
          <div className="col-md-6 mb-4">
            <form className="p-4 shadow bg-white rounded">
              <div className="mb-3">
                <label className="form-label fw-semibold">Full Name</label>
                <input type="text" className="form-control" placeholder="Your Name" required />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Email Address</label>
                <input type="email" className="form-control" placeholder="name@example.com" required />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Message</label>
                <textarea className="form-control" rows="5" maxlength="200" placeholder="Type your message here(less than 200 chars)..." required></textarea>
              </div>

              <button type="submit" className="btn btn-primary w-100 fw-bold">
                Send Message ✉️
              </button>
            </form>
          </div>

          {/* Contact Info + Map */}
          <div className="col-md-6 mb-4">
            <div className="p-4 shadow bg-white rounded h-100 d-flex flex-column justify-content-between">
              <div className="mb-4">
                <h5 className="fw-bold">Heaven Nti Church HQ</h5>
                <p className="mb-1">
                  📍 Heaven Nti at Adjei Kojo Santeo RD, East legon Hills
                </p>
                <p className="mb-1">
                  📞 +233 247737452
                </p>
                <p className="mb-1">
                  📧 contact heavennti53@gmail.com
                </p>
              </div>

              <div style={{ height: "250px", width: "100%" }}>
                <iframe
                  title="Church Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.9474045088236!2d-0.19647968469036994!3d5.614818195961969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9b1234567890%3A0xf4e8b98b3a56!2sAccra%2C%20Ghana!5e0!3m2!1sen!2sgh!4v1620000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;