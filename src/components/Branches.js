import React from "react";
import womenscrowd from '../assets/womenscrowd.jpg';
import youthcrowd from '../assets/youthcrowd.jpg';
import menscrowd from '../assets/menscrowd.jpg';
import childrencrowd from '../assets/childrenscrowd.jpg';
import churchcrowd5 from '../assets/churchcrowd7.jpg';
import churchcrowd6 from '../assets/churchcrowd6.jpg';
import '../App.css';

function Branches() {
  const cardData = [
    {
      img: youthcrowd,
      title: 'East-Legon Hills',
      desc: 'Accra'
    },
    {
      img: menscrowd,
      title: 'Gbetsile',
      desc: 'Accra'
    },
    {
      img: childrencrowd,
      title: 'Apolonia',
      desc: 'Accra' 
    },
    {
      img: womenscrowd,
      title: 'Bechem Breme',
      desc: 'Bechem Breme'
    },
    {
      img: churchcrowd5,
      title: 'Techiman',
      desc: 'Brong Ahafo Region' 
    },
    {
      img: churchcrowd6,
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