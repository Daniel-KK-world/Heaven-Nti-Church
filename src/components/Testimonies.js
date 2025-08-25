import HeroCards from "../components/HeroCards";
function Testimonies() {
  return (
    <div className="testimonies">
      {/* Testimonies Section */}
      <section className="hero-cards py-5 bg-light">
        <div className="container text-center">
          <h2 className="fw-bold mb-4 heading-underline">Testimonies of Faith</h2>
          <p className="lead mb-5">
            Lives are being transformed by the power of Jesus Christ. Here are just a few stories from members of our community.
          </p>
          <HeroCards />
        </div>
      </section>
    </div>
  );
}

export default Testimonies;