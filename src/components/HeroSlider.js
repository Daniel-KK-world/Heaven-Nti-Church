import React from "react";
import Slider from "react-slick";

import pastor5 from "../assets/pastor5.jpg";
import pastor2 from "../assets/pastor2.jpg";
import churchmother from "../assets/churchmother.jpg";
import pastor3 from "../assets/pastor3.jpg";

function HeroSlider() {
const settings = {
  dots: true,
  infinite: true,
  autoplay: true,
  speed: 700,            // Slide transition speed
  autoplaySpeed: 4000,   // 4 seconds per slide
  fade: true,
  arrows: false,
  cssEase: "ease-in-out",
};

  const slides = [
    { image: pastor5, caption: "" },
    { image: pastor2, caption: "Jesus Christ is coming soon" },
    { image: churchmother, caption: "Join us to worship" },
    { image: pastor3, caption: "Experience the power of prayer" },
    
  ];

  return (
    <section className="hero-slider">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="position-relative">
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="img-fluid w-100"
              style={{
                maxHeight: "180vh",
                objectFit: "cover",
                marginTop: "3px",
                didplay: "block",
                filter: "brightness(95%)",
              }}
            />

            {/* Only show caption if it's present */}
            {slide.caption && (
              <div className="slider-caption position-absolute bottom-0 start-50 translate-middle-x text-center text-white bg-dark bg-opacity-25 px-3 py-2 rounded mb-3">
                <h6
                  className="fs-5 fw-normal mb-0"
                  style={{ opacity: 0.85, textShadow: "0 1px 3px rgba(0,0,0,0.5)" }}
                >
                  {slide.caption}
                </h6>
              </div>
            )}
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default HeroSlider;
