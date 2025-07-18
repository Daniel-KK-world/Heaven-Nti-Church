import HeroSlider from "../components/HeroSlider";
import HeroCards from "../components/HeroCards";
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

      <HeroCards/>
      </div>
  );
}

export default Home;
