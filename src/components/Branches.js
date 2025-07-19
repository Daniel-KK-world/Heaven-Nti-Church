import churchcrowd1 from '../assets/churchcrowd1.webp';
import churchcrowd2 from '../assets/churchcrowd2.jpg';
import churchcrowd3 from '../assets/churchcrowd3.jpg';
import churchcrowd4 from '../assets/churchcrowd4.webp';
import churchcrowd5 from '../assets/churchcrowd5.jpg';
import churchcrowd6 from '../assets/churchcrowd6.jpg';
import '../App.css'; // Assuming your custom styles go here

function Branches() {
  const cardData = [
    {
      img: churchcrowd1,
      title: 'East-Legon Hills ',
      desc: 'Accra | Headquaters - Join us every Sunday at 9:00 AM to encounter God’s presence together.',
    },
    {
      img: churchcrowd2,
      title: 'Gbetsile ',
      desc: 'Accra | Join us every Sunday at 9:00 AM to encounter God’s presence together.',
    },
    {
      img: churchcrowd3,
      title: 'Apolonia',
      desc: 'Accra | Join us every Sunday at 9:00 AM to encounter God’s presence together.',
    },
    {
      img: churchcrowd4,
      title: 'Bechem Breme',
      desc: 'Bechem Breme | Join us every Sunday at 9:00 AM to encounter God’s presence together.',
    },
    {
      img: churchcrowd5,
      title: 'Techiman',
      desc: 'Brong Ahago Region | Join us every Sunday at 9:00 AM to encounter God’s presence together.',
    },
    {
      img: churchcrowd6,
      title: 'Kintampo',
      desc: 'Brong Ahago Region | Join us every Sunday at 9:00 AM to encounter God’s presence together.',
    },
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row text-center">
          {cardData.map((card, idx) => (
            <div key={idx} className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm card-hover">
                <div className="img-container">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="card-img-top"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{card.title}</h5>
                  <p className="card-text">{card.desc}</p>
                </div>
                <div className="bottom-stripe"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Branches;