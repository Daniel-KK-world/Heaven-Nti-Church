import React from "react";

function VisionAndMission() {
  return (
    <section className="vision-mission-section py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4 fw-bold text-primary">Our Vision & Mission</h2>
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="p-4 shadow-sm rounded bg-white h-100">
              <h3 className="text-success mb-3">Our Vision</h3>
              <p>
                To raise a generation of Spirit-filled believers who are equipped to impact the world,
                walk in truth, and enter Heaven with joy. We aim to spread the message of salvation and
                kingdom power through the Gospel of Jesus Christ.
              </p>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="p-4 shadow-sm rounded bg-white h-100">
              <h3 className="text-warning mb-3">Our Mission</h3>
              <p>
                To disciple souls through sound doctrine, prayer, and prophetic insight. 
                We are committed to teaching the undiluted Word of God, empowering believers,
                and preparing the saints for the second coming of Christ.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VisionAndMission;
