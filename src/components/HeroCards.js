import mensfellowhip from '../assets/mensfellowship.jpg';
// import youth from '../assets/youth.jpg';
import youth2 from '../assets/youth2.jpg';
import womensfellowship from '../assets/Womens fellowship.jpg';
import christmasconvention from '../assets/Christmass Convention.jpg';
import sundayschool from '../assets/sunday shool.jpg';
import easterconvention from '../assets/Easter Convention .jpg';
import '../App.css';

function HeroCards() {
  const cardData = [
    {
      img: mensfellowhip,
      title: 'Sunday Worship',
      desc: 'Join us every Sunday at 9:00 AM to encounter God’s presence together.',
    },
    {
      img: youth2,
      title: 'Midweek Services',
      desc: 'Tuesdays at 6:00 PM — recharge with teaching, worship, and fellowship.',
    },
    {
      img: womensfellowship,
      title: 'Friday Service',
      desc: 'Friday evenings at 6:00 PM. Step into prayer, revival, and growth.',
    },
    {
      img: christmasconvention,
      title: 'Christmas Convention',
      desc: 'Celebrate the birth of Christ with worship, drama, and fellowship.',
    },
    {
      img: sundayschool,
      title: 'Sunday School',
      desc: 'Building the next generation with faith and biblical foundations.',
    },
    {
      img: easterconvention,
      title: 'Easter Convention',
      desc: 'Rejoice in Christ’s resurrection with powerful worship and teaching.',
    },
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5 text-primary">Church Services & Ministries</h2>

        {/* Top row with 3 cards */}
        <div className="row justify-content-center mb-4">
          {cardData.slice(0, 3).map((card, idx) => (
            <div key={idx} className="col-md-6 col-lg-4 mb-4">
              <div className="card h-100 shadow-sm card-hover">
                <div className="img-container">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="card-img-top"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title text-success">{card.title}</h5>
                  <p className="card-text">{card.desc}</p>
                </div>
                <div className="bottom-stripe"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom row with next 3 cards */}
        <div className="row justify-content-center">
          {cardData.slice(3).map((card, idx) => (
            <div key={idx} className="col-md-6 col-lg-4 mb-4">
              <div className="card h-100 shadow-sm card-hover">
                <div className="img-container">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="card-img-top"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title text-success">{card.title}</h5>
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
