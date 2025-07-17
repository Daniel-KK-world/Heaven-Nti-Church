import HeroSlider from "../components/HeroSlider";
import css from "../App.css";

function Home() {
  return (
    <div>
      <HeroSlider />

      {/* Welcome Section */}
      <section className="text-center py-5 bg-light">
        <div className="container">
          <h3 className="display-4 fw-bold page-headers ">Welcome to Heaven NTI</h3>
          <p className="lead text-secondary">
            Jesus Christ is coming back soon. 
          </p>
        </div>
      </section>

      {/* Services Section */}
    <section className="py-5">
      <div className="container">
        <div className="row text-center">
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img 
                src="/images/sunday.jpg" 
                alt="Sunday Worship" 
                className="card-img-top" 
                style={{ height: '200px', objectFit: 'cover' }} 
              />
              <div className="card-body">
                <h5 className="card-title">Sunday Worship</h5>
                <p className="card-text">Every Sunday at 9:00 AM. Come praise and worship with us.</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img 
                src="/images/midweek.jpg" 
                alt="Midweek Service" 
                className="card-img-top" 
                style={{ height: '200px', objectFit: 'cover' }} 
              />
              <div className="card-body">
                <h5 className="card-title">Midweek Services</h5>
                <p className="card-text">Tuesday nights at 6:00 PM – 9:00 PM Word, Worship, and Fellowship.</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img 
                src="/images/youth.jpg" 
                alt="Youth Fellowship" 
                className="card-img-top" 
                style={{ height: '200px', objectFit: 'cover' }} 
              />
              <div className="card-body">
                <h5 className="card-title">Evening Service</h5>
                <p className="card-text">Fridays at 5:00 PM. A time  to grow and thrive in faith.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}

export default Home;
