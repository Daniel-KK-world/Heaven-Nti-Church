import womenscrowd from '../assets/womenscrowd.png';
import youthcrowd from '../assets/youthcrowd.webp';
import menscrowd from '../assets/menscrowd.jpg';
import childrencrowd from '../assets/childrencrowd.webp';
import churchcrowd5 from '../assets/churchcrowd5.jpg';
import churchcrowd6 from '../assets/churchcrowd6.jpg';
import '../App.css'; // Assuming your custom styles go here

function MinistryCards() {

     const cardData = [
    {
      img: menscrowd,
      title: 'Mens Ministry',
      desc: 'Join a community of men moving with purpose and a vision to serve God..',
    },
    {
      img: womenscrowd,
      title: 'Womens Ministry',
      desc: 'Join numerous women of god as they study, praise and worship God',
    },
    {
      img: youthcrowd,
      title: 'Youth Ministry',
      desc: 'Remember your creator in the time of your youth',
    },
    {
      img: childrencrowd,
      title: 'Sunday School',
      desc: 'Raising tomorrow’s leaders from a young age',
    },
    {
      img: churchcrowd5,
      title: 'Christmas Convention',
      desc: 'Three day convention to celebrate the birth of Jesus Christ and spread the gospel',
    },
    {
      img: churchcrowd6,
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