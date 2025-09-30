import React from "react";
import mensfellowhip from '../assets/Mensfellowship.jpg';
//import youth from '../assets/youth.jpg';
import youth2 from '../assets/youth2.jpg';
import womensfellowship from '../assets/Womens fellowship.jpg';
import christmasconvention from '../assets/Christmass Convention.jpg';
import easterconvention from '../assets/Easter Convention .jpg';
import sundaychool from '../assets/sunday shool.jpg';
import '../App.css'; 

function Branches() {
  const cardData = [
    {
      img: youth2,
      title: 'East-Legon Hills',
      desc: 'Accra'
    },
    {
      img: mensfellowhip,
      title: 'Gbetsile',
      desc: 'Accra'
    },
    {
      img: sundaychool,
      title: 'Apolonia',
      desc: 'Accra' 
    },
    {
      img: womensfellowship,
      title: 'Bechem Breme',
      desc: 'Bechem Breme'
    },
    {
      img: christmasconvention,
      title: 'Techiman',
      desc: 'Brong Ahafo Region' 
    },
    {
      img: easterconvention,
      title: 'Kintampo',
      desc: 'Brong Ahafo Region'
    },
  ];

  return (
    <section className="branches-section py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5 fw-bold text-primary display-5">Our Branches</h2>
        <div className="row">
          {cardData.map((card, idx) => (
            <div key={idx} className="col-lg-4 col-md-6 mb-4">
              <div className="branch-card card h-100 shadow-sm">
                <div className="img-container overflow-hidden">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="card-img-top branch-image"
                  />
                  <div className="image-overlay"></div>
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title fw-bold text-success">{card.title}</h5>
                  <p className="card-text">{card.desc}</p>
                </div>
                <div className="branch-stripe"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Branches;