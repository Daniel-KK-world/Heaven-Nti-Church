import React from "react";
import pastor4 from "../assets/pastor4.jpg";
import churchmother from "../assets/churchmother.jpg";
import asafomame from "../assets/asafomame.jpg";
import "../App.css";

function Founders() {
  return (
    <section className="founders-section py-5 bg-white">
      <div className="container text-center">
        <h2 className="fw-bold mb-4 text-primary">Meet Our Leadership</h2>
        <p className="mb-5 lead text-muted">
          Visionary Shepherds, Servants of the Most High God
        </p>
        
        {/* Founder - Top Section */}
        <div className="row justify-content-center mb-5">
          <div className="col-md-8 col-lg-6">
            <div className="card shadow border-0 founder-card overflow-hidden">
              <div className="image-container">
                <img 
                  src={pastor4} 
                  alt="Prophet Joseph Osei" 
                  className="card-img-top ken-burns-image" 
                />
              </div>
              <div className="card-body p-4">
                <h3 className="card-title text-success fw-bold">Prophet Joseph Osei</h3>
                <p className="card-text fst-italic">Founder and Senior Prophet</p>
                <p className="card-text">
                  Founder and Overseer of Heaven Nti Church.  A passionate man of God who dissects the word of God like no other to teach, impart the Holy Spirit and direct souls into the kingdom of Heaven
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Leadership Team - Bottom Row */}
        <div className="row justify-content-center">
          <div className="col-md-5 mb-4">
            <div className="card shadow border-0 founder-card overflow-hidden h-100">
              <div className="image-container">
                <img 
                  src={churchmother} 
                  alt="Prophetess Doris Anane" 
                  className="card-img-top ken-burns-image" 
                />
              </div>
              <div className="card-body p-4">
                <h4 className="card-title text-success fw-bold">Prophetess Doris Anane</h4>
                <p className="card-text">
                
                 A dedicated woman of God with a strong prophetic anointing. Prophetess is passionate about prayer, intercession, and guiding believers into a closer walk with Christ.
                </p>
              </div>
            </div>
          </div>
          
          <div className="col-md-5 mb-4">
            <div className="card shadow border-0 founder-card overflow-hidden h-100">
              <div className="image-container">
                <img 
                  src={asafomame} 
                  alt="Church Mother" 
                  className="card-img-top ken-burns-image" 
                />
              </div>
              <div className="card-body p-4">
                <h4 className="card-title text-success fw-bold">Firstlady  Pastor Asafomaame Soraya Obaapa Esther  Osei </h4>
                <p className="card-text">
                  Head Pastor for all Young Pastors and Wife of Prophet Joseph Osei
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