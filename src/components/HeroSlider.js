import React from "react";
import Slider from "react-slick";

import poster1 from "../assets/poster1.jpg";
import poster2 from "../assets/poster2.jpg";
import poster3 from "../assets/poster3.jpg";

function HeroSlider() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    fade: true,
    arrows: false,
    cssEase: "ease-in-out",
  };

  const slides = [
    { image: poster1, caption: "join us" },
    { image: poster2, caption: "halleluyah" },
    { image: poster3, caption: "praise-fest" },
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
                maxHeight: "85vh",
                objectFit: "cover",
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
