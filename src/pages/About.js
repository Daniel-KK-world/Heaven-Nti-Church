import HeroSlider from "../components/HeroSlider";

function About() {
  return (
    <div className="about-page">
      <HeroSlider/>
      <h1>About Us</h1>
      <p>Welcome to Heaven NTI Church! We are a community dedicated to spiritual growth and fellowship.</p>
      <p>Our mission is to spread love, hope, and faith through our teachings and community service.</p>

      <h3 className="text-center my-5 fw-bold ">
        <span className="text-primary">Our Mission</span> &amp; <span className="text-success">Vision</span>
      </h3>
      
      <MissionVission />
      <Branches />
      <Contact />
      <footer />

    </div>

    
  );
} 

export default About;