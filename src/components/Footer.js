import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-4 mt-5">
      <div className="container text-md-left">
        <div className="row text-md-left">

          {/* Church Description */}
          <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Heaven Nti Church</h5>
            <p>
              Heaven Nti is a Holy Spirit-centered end-time church passionate about winning souls and preparing them for the second coming of Christ.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Quick Links</h5>
            <p><a href="/about" className="text-white text-decoration-none">About Us</a></p>
            <p><a href="/ministries" className="text-white text-decoration-none">Ministries</a></p>
            <p><a href="/contact" className="text-white text-decoration-none">Contact</a></p>
            <p><a href="/about" className="text-white text-decoration-none">Vision & Mission</a></p>
          </div>

          {/* Contact */}
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Contact</h5>
            <p><i className="fas fa-home mr-3"></i> East Legon Hills, Accra, Ghana</p>
            <p><i className="fas fa-envelope mr-3"></i> heaventichurch@gmail.com</p>
            <p><i className="fas fa-phone mr-3"></i> 0247 737 452</p>
            <p><i className="fas fa-phone mr-3"></i> 0532 059 359</p>
          </div>

          {/* Social Media */}
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Follow Us</h5>
            <a href="#" className="text-white me-4"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="text-white me-4"><i className="fab fa-youtube"></i></a>
            <a href="#" className="text-white me-4"><i className="fab fa-instagram"></i></a>
            <a href="#" className="text-white"><i className="fab fa-whatsapp"></i></a>
          </div>

        </div>

        <hr className="mb-4"/>

        {/* Copyright */}
        <div className="row align-items-center">
          <div className="col-md-7 col-lg-8">
            <p>© {new Date().getFullYear()} Heaven Nti Church. All Rights Reserved.</p>
          </div>
          <div className="col-md-5 col-lg-4">
            <p className="text-end">Built by +233508514620</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;