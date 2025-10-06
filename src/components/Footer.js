import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" text-light pt-5 pb-4 mt-5 navedit ">
      <div className="container text-center">
        <div className="row">

          {/* Church Description */}
          <div className="col-md-4 mb-4">
            <h5 className="text-warning fw-bold mb-3">Heaven Nti Church</h5>
            <p>
              A Holy Spirit-centered end-time church passionate about winning
              souls and preparing them for the second coming of Christ.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-2 mb-4">
            <h6 className="text-warning fw-bold mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              <li><Link to="/about" className="text-white text-decoration-none">About Us</Link></li>
              <li><Link to="/ministries" className="text-white text-decoration-none">Ministries</Link></li>
              <li><Link to="/contact" className="text-white text-decoration-none">Contact</Link></li>
              <li><Link to="/about" className="text-white text-decoration-none">Vision & Mission</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-3 mb-4 ">
            <h6 className="text-warning fw-bold mb-3">Contact</h6>
            <address>
              <p><i className="fa-solid fa-home me-2"></i> East Legon Hills, Accra</p>
              <p><i className="fa-solid fa-envelope me-2"></i> heavennti53@gmail.com</p>
              <p>
                <i className="fa-solid fa-phone me-2"></i>
                <a href="tel:+233247737452" className="text-white text-decoration-none">0247 737 452</a>
              </p>
              <p>
                <i className="fa-solid fa-phone me-2"></i>
                <a href="tel:+233546496712" className="text-white text-decoration-none">054 649 6712</a>
              </p>
            </address>
          </div>

          {/* Social Media */}
          <div className="col-md-3 mb-4 text-center">
            <h6 className="text-warning fw-bold mb-3">Follow Us</h6>
            <div className="d-flex gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-white">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-white">
                <i className="fa-brands fa-youtube"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-white">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
            </div>
          </div>

        </div>

        <hr className="border-secondary" />

        {/* Copyright */}
        <div className="text-center">
          <p className="mb-0">© {new Date().getFullYear()} Heaven Nti Church | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
