import womenscrowd from '../assets/womenscrowd.png';
import youthcrowd from '../assets/youthcrowd.webp';
import menscrowd from '../assets/menscrowd.jpg';
import childrencrowd from '../assets/childrencrowd.webp';
import churchcrowd5 from '../assets/churchcrowd5.jpg';
import churchcrowd6 from '../assets/churchcrowd6.jpg';
import '../App.css'; // Assuming your custom styles go here
function Branches() {
  const cardData = [
    {
      img: youthcrowd,
      title: 'East-Legon Hills ',
      desc: 'Accra | Headquaters - Join us every Sunday at 9:00 AM to encounter God’s presence together.',
    },
    {
      img: menscrowd,
      title: 'Gbetsile ',
      desc: 'Accra | Join us every Sunday at 9:00 AM to encounter God’s presence together.',
    },
    {
      img: childrencrowd,
      title: 'Apolonia',
      desc: 'Accra | Join us every Sunday at 9:00 AM to encounter God’s presence together.',
    },
    {
      img: womenscrowd,
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