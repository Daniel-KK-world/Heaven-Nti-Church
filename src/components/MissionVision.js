import React, { useEffect, useRef } from "react";

function VisionAndMission() {
  const visionRef = useRef(null);
  const missionRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.3,
      rootMargin: "0px"
    };

    const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    if (visionRef.current) observer.observe(visionRef.current);
    if (missionRef.current) observer.observe(missionRef.current);

    return () => {
      if (visionRef.current) observer.unobserve(visionRef.current);
      if (missionRef.current) observer.unobserve(missionRef.current);
    };
  }, []);

  return (
    <section className="vision-mission-section py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5 fw-bold text-primary display-5">Our Vision & Mission</h2>
        <div className="row">
          <div className="col-md-6 mb-4" ref={visionRef}>
            <div className="p-4 shadow-sm rounded bg-white h-100 vision-card">
              <div className="icon-container mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-eye-fill text-success" viewBox="0 0 16 16">
                  <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                  <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                </svg>
              </div>
              <h3 className="text-success mb-3">Our Vision</h3>
              <p className="fs-5">
                To raise a generation of Spirit-filled believers who are equipped to impact the world,
                walk in truth, and enter Heaven with joy. We aim to spread the message of salvation and
                kingdom power through the Gospel of Jesus Christ.
              </p>
            </div>
          </div>
          <div className="col-md-6 mb-4" ref={missionRef}>
            <div className="p-4 shadow-sm rounded bg-white h-100 mission-card">
              <div className="icon-container mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-compass-fill text-warning" viewBox="0 0 16 16">
                  <path d="M15.5 8.516a7.5 7.5 0 1 1-9.462-7.24A1 1 0 0 1 7 0h2a1 1 0 0 1 .962 1.276 7.5 7.5 0 0 1 5.538 7.24zm-3.61-3.905L6.94 7.439 4.11 12.39l4.2-1.256 2.848-5.547a.5.5 0 0 0-.7-.7z"/>
                </svg>
              </div>
              <h3 className="text-warning mb-3">Our Mission</h3>
              <p className="fs-5">
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