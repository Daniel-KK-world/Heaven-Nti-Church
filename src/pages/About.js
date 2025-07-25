import HeroSlider from "../components/HeroSlider";
import MissionVission from "../components/MissionVision"
import Branches from "../components/Branches"
import Contact from "../components/Contact";
import Founders from "../components/founders";
import Footer from "../components/Footer";   

function About() {
  return (
    <div className="about-page">
      <HeroSlider/>
      <MissionVission />
      <Founders />
      <h3 className="text-center my-5 fw-bold ">
        <span className="text-primary">Our</span> <span className="text-success">Branches</span>
      </h3>
      <Branches />
      <Contact />
      <h3 className="text-center my-5 fw-bold ">
      <span className="text-primary">Join the last</span> <span className="text-success">Bus to Heaven</span>
      </h3>
      <Footer />

    </div>

    
  );
} 

export default About;