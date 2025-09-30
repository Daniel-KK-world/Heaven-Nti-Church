// components/Navbar.js
import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="w-100">
      {/* Top Strip */}
      <div className="bg-dark text-light small px-4 py-1 d-flex justify-content-between align-items-center text-center">
        <p className="mb-0">Sunday Service: 9:00 AM | Midweek: Tue 6:00 PM | Fri 6:00 PM</p>
        <p className="mb-0">Call: +233 247737452 | +233 532059359 | +233 540450160 | +233 0532547924 </p>
      </div>

      {/* Main Navbar */}
      <nav className="navbar navbar-expand-md navbar-light bg-white shadow-sm px-4 py-3 sticky-top">
        <div className="container-fluid">
          {/* Logo + Title */}
          <div className="d-flex align-items-center gap-3">
            <img
              src={logo}
              alt="Heaven NTI Church Logo"
              className="img-fluid"
              style={{ height: "40px", width: "auto" }}
            />
            <h1 className="h5 fw-bold text-dark mb-0">Heaven NTI Church</h1>
          </div>

          {/* Toggle Button */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navigation Links */}
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav me-3 mb-2 mb-md-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/ministries">Ministries</Link>
              </li>
              
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
            </ul>

            {/* CTA */}
            <a href="/" className="btn btn-danger text-white px-4 py-2 rounded-pill fw-semibold">
              Revelator Show
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
