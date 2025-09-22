import mensfellowhip from '../assets/mensfellowship.jpg';
//import youth from '../assets/youth.jpg';
import youth2 from '../assets/youth2.jpg';
import womensfellowship from '../assets/Womens fellowship.jpg';
import christmasconvention from '../assets/Christmass Convention.jpg';
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
      desc: 'Tuesdays at 6:30 PM — recharge with teaching, worship, and fellowship.',
    },
    {
      img: womensfellowship,
      title: 'Friday Service',
      desc: 'Friday evenings at 6:30 PM. Step into prayer, revival, and growth.',
    },
    {
      img: easterconvention,
      title: 'Youth Fellowship',
      desc: 'Raising tomorrow’s leaders — energetic worship & real talk for youth.',
    },
    {
      img: christmasconvention,
      title: 'Women’s Ministry',
      desc: 'A safe space for women to thrive, grow, and build each other up in Christ.',
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
        
        {/* Bottom row with 2 cards, centered */}
        <div className="row justify-content-center">
          {cardData.slice(3, 5).map((card, idx) => (
            <div key={idx} className="col-md-6 col-lg-5 col-xl-4 mb-4">
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
      
      <style jsx>{`
        .card {
          border-radius: 12px;
          overflow: hidden;
          transition: all 0.3s ease;
          border: none;
        }
        
        .card-hover:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 20px rgba(0,0,0,0.15);
        }
        
        .img-container {
          height: 200px;
          overflow: hidden;
        }
        
        .card-img-top {
          object-fit: cover;
          width: 100%;
          height: 100%;
          transition: transform 0.5s ease;
        }
        
        .card:hover .card-img-top {
          transform: scale(1.05);
        }
        
        .card-title {
          font-weight: 600;
          margin-bottom: 0.75rem;
        }
        
        .card-text {
          color: #666;
          margin-bottom: 1.2rem;
        }
        
        .bottom-stripe {
          height: 6px;
          background: linear-gradient(90deg, #4e8cff, #8e44ad);
          width: 100%;
        }
      `}</style>
    </section>
  );
}

export default HeroCards;