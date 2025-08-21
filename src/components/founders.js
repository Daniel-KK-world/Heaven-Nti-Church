import React from "react";
import pastor4 from "../assets/pastor4.jpg";
import churchmother from "../assets/churchmother.jpg";
import "../App.css";

function Founders() {
  return (
    <section className="founders-section py-5 bg-white">
      <div className="container text-center">
        <h2 className="fw-bold mb-4 text-primary">Meet Our Founder</h2>
        <p className="mb-5 lead text-muted">
          Visionary Shepherd, Servant of the Most High God
        </p>
        <div className="row justify-content-center">
          {/* Pastor */}
          <div className="col-md-6 col-lg-5 mb-4">
            <div className="card shadow border-0 founder-card overflow-hidden">
              <div className="image-container">
                <img 
                  src={pastor4} 
                  alt="Pastor" 
                  className="card-img-top ken-burns-image" 
                />
              </div>
              <div className="card-body p-4">
                <h4 className="card-title text-success fw-bold">Prophet Joseph Osei</h4>
                <p className="card-text">
                  Founder and Senior Pastor of Heaven Nti Church. A passionate preacher of holiness,
                  deliverance, and the power of the Holy Ghost. Called to raise kingdom champions.
                </p>
              </div>
            </div>
          </div>          
        </div>


        <div className="row justify-content-center">
          {/* Pastor */}
          <div className="col-md-6 col-lg-5 mb-4">
            <div className="card shadow border-0 founder-card overflow-hidden">
              <div className="image-container">
                <img 
                  src={churchmother} 
                  alt="Pastor" 
                  className="card-img-top ken-burns-image" 
                />
              </div>
              <div className="card-body p-4">
                <h4 className="card-title text-success fw-bold">Prophetess Doris Anane</h4>
                <p className="card-text">
                  Assistant Pastor of Heaven Nti Church. A dedicated minister with a strong prophetic gift, passionate about prayer, intercession, and guiding believers into a deeper walk with Christ.
                </p>
              </div>
            </div>
          </div>          
        </div>
      </div>
    </section>
  );
}

export default Founders;