import HeroSlider from "../components/HeroSlider";
import HeroCards from "../components/HeroCards";
import MinistryCards from "../components/MinistryCards";
import Testimonies from "../components/Testimonies";
import MissionVision from "../components/MissionVision";
import Founders from "../components/founders";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="home-page">
      <HeroSlider />

      {/* Welcome Section */}
      <section className="welcome-section text-center py-5 bg-light">
        <div className="container">
          <h2 className="display-4 fw-bold page-headers mb-3">Welcome to Heaven NTI</h2>
          <p className="lead text-secondary mb-4">
            Jesus Christ is coming back soon 
          </p>
          <div className="welcome-divider mx-auto"></div>
        </div>
      </section>

      <HeroCards/>
      
      {/* Ministries Header */}
      <section className="ministries-header py-4 bg-white">
        <div className="container">
          <h2 className="text-center fw-bold mb-0">
            <span className="text-primary">Our Ministries</span> &amp; <span className="text-success">Conventions</span>
          </h2>
        </div>
      </section>

      <MinistryCards/>
      <Founders />
      <MissionVision />
      <Testimonies />
      <Contact />

      {/* Call to Action */}
      <section className="cta-section text-center py-5 bg-light">
        <div className="container">
          <h2 className="fw-bold mb-4">
            <span className="text-primary">Join the last</span> <span className="text-success">Bus to Heaven</span>
          </h2>
          <p className="lead text-muted mb-4">
            Don't miss your chance for eternal salvation. Accept Jesus Christ today.
          </p>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}

export default Home;