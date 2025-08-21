import churchcrowd1 from '../assets/churchcrowd1.jpg';
import churchcrowd2 from '../assets/Easterconvention.jpg';
import churchcrowd3 from '../assets/churchcrowd3.jpg';
import churchcrowd4 from '../assets/prayingforman.jpg';
import churchcrowd5 from '../assets/churchcrowd5.jpg';
import churchcrowd6 from '../assets/churchcrowd6.jpg';
import '../App.css'; 

function HeroCards() {
  const cardData = [
    {
      img: churchcrowd1,
      title: 'Sunday Worship',
      desc: 'Join us every Sunday at 9:00 AM to encounter God’s presence together.',
    },
    {
      img: churchcrowd2,
      title: 'Midweek Services',
      desc: 'Tuesdays at 6:30 PM — recharge with teaching, worship, and fellowship.',
    },
    {
      img: churchcrowd3,
      title: 'Friday Service',
      desc: 'Friday evenings at 6:30 PM. Step into prayer, revival, and growth.',
    },
    {
      img: churchcrowd4,
      title: 'Youth Fellowship',
      desc: 'Raising tomorrow’s leaders — energetic worship & real talk for youth.',
    },
    {
      img: churchcrowd5,
      title: 'Women’s Ministry',
      desc: 'A safe space for women to thrive, grow, and build each other up in Christ.',
    },
    {
      img: churchcrowd6,
      title: 'Prayer Night',
      desc: 'Break chains and intercede every last Friday of the month at 10 PM.',
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

export default HeroCards;
