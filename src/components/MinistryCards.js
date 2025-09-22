import mensfellowhip from '../assets/mensfellowship.jpg';
//import youth from '../assets/youth.jpg';
import youth2 from '../assets/youth2.jpg';
import womensfellowship from '../assets/Womens fellowship.jpg';
import christmasconvention from '../assets/Christmass Convention.jpg';
import easterconvention from '../assets/Easter Convention .jpg';
import sundaychool from '../assets/sunday shool.jpg';
import '../App.css'; 

function MinistryCards() {

     const cardData = [
    {
      img: mensfellowhip,
      title: 'Mens Ministry',
      desc: 'Join a community of men moving with purpose and a vision to serve God..',
    },
    {
      img: womensfellowship,
      title: 'Womens Ministry',
      desc: 'Join numerous women of god as they study, praise and worship God',
    },
    {
      img: youth2,
      title: 'Youth Ministry',
      desc: 'Remember your creator in the time of your youth',
    },
    {
      img: sundaychool,
      title: 'Sunday School',
      desc: 'Raising tomorrow’s leaders from a young age',
    },
    {
      img: christmasconvention,
      title: 'Christmas Convention',
      desc: 'Three day convention to celebrate the birth of Jesus Christ and spread the gospel',
    },
    {
      img: easterconvention,
      title: 'Easter Convention',
      desc: 'Three day convention to celebrate the death and resurection of Jesus Christ',
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

export default MinistryCards;