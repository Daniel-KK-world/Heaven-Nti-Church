import React from "react";
import pastor4 from "../assets/pastor4.jpg";
import churchmother from "../assets/churchmother.jpg";
import "../App.css"; // Assuming your custom styles go here

function Founders() {
  return (
    <section className="founders-section py-5 bg-white">
      <div className="container text-center">
        <h2 className="fw-bold mb-4 text-primary">Meet Our Founders</h2>
        <p className="mb-5 lead text-muted">
          Visionaries. Shepherds. Servants of the Most High God.
        </p>
        <div className="row justify-content-center">
          {/* Pastor */}
          <div className="col-md-5 mb-4">
            <div className="card shadow-sm border-0">
              <img src={pastor4} alt="Pastor" className="card-img-top rounded-top" />
              <div className="card-body">
                <h4 className="card-title text-success fw-bold">Prophet Joseph Osei </h4>
                <p className="card-text">
                  Founder and Senior Pastor of Heaven Nti Church. A passionate preacher of holiness,
                  deliverance, and the power of the Holy Ghost. Called to raise kingdom champions.
                </p>
              </div>
            </div>
          </div>

          {/* First Lady */}
          <div className="col-md-5 mb-4">
            <div className="card shadow-sm border-0">
              <img src={churchmother} alt="First Lady" className="card-img-top rounded-top" />
              <div className="card-body">
                <h4 className="card-title text-warning fw-bold">Prophetess Doris Asumadu </h4>
                <p className="card-text">
                  A powerful intercessor and co-laborer in the ministry. She leads the women's ministry with
                  grace, wisdom, and compassion raising daughters of virtue and vision.
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