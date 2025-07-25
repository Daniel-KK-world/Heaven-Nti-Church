import HeroSlider from "../components/HeroSlider";
import Branches from "../components/Branches";
import Footer from "../components/Footer";
import Contact from "../components/Contact"

function ContactPage() {
  return (
    <div>
      <HeroSlider />
      <Contact />
      <Branches /> 
      <h3 className="text-center my-5 fw-bold ">
      <span className="text-primary">Join the last</span> <span className="text-success">Bus to Heaven</span>
      </h3>

      <Footer />
    </div>
  );
}

export default ContactPage;