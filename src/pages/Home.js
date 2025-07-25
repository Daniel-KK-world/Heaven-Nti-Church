import HeroSlider from "../components/HeroSlider";
import HeroCards from "../components/HeroCards";
import css from "../App.css";
import MinistryCards from "../components/MinistryCards";
import Testimonies from "../components/Testimonies";
import MissionVision from "../components/MissionVision";
import Founders from "../components/founders";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

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

      <HeroCards/>
      <h3 className="text-center my-5 fw-bold ">
        <span className="text-primary">Our Ministries</span> &amp; <span className="text-success">Conventions</span>
      </h3>

      <MinistryCards/>

      <h3 className="text-center my-5 fw-bold ">
        <span className="text-primary">About Heaven</span>
        <span className="text-success">Nti</span>
      </h3>
      <Founders />
      <MissionVision />
      <Testimonies />
      <Contact />

      {/* Footer Section */}
      <Footer />
      </div>
  );
}

export default Home;
