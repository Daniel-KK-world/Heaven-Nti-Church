import Branches from "../components/Branches";
import Footer from "../components/Footer";
import HeroSlider from "../components/HeroSlider";
import MinistryCards from "../components/MinistryCards";
import MissionVission from "../components/MissionVision";


function Ministries() {
  return (
    <div className="ministries-page">
     <HeroSlider />
     <MissionVission />
     <MinistryCards />
     <h3 className="text-center my-5 fw-bold ">
        <span className="text-primary">Come</span> &amp; <span className="text-success">Be Blessed</span>
      </h3>
     <Branches />
     <h3 className="text-center my-5 fw-bold ">
      <span className="text-primary">Join the last</span> <span className="text-success">Bus to Heaven</span>
      </h3>
     <Footer />


    </div>
  );
}

export default Ministries;