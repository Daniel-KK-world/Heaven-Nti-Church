import React, { useState, useEffect } from "react";
import JesusPicture from "../assets/Jesuspicture.jpg";
import pastor5 from "../assets/pastor5.jpg";
import pastor2 from "../assets/pastor2.jpg";
import churchmother from "../assets/churchmother.jpg";
import pastor3 from "../assets/pastor3.jpg";
import "../App.css";

function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { image: JesusPicture },
    { image: pastor3 },
    { image: pastor2 },
    { image: churchmother },
    { image: pastor5 },
  ];

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const goToPrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="church-hero-slider">
      <div className="slider-container">
        {slides.map((slide, index) => (
          <div 
            key={index} 
            className={`hero-slide ${currentSlide === index ? 'active' : ''}`}
          >
            <div className="slide-image-container">
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="slide-image"
              />
            </div>
          </div>
        ))}
      </div>
      
      {/* Navigation arrows */}
      <button className="slider-arrow slider-arrow-prev" onClick={goToPrev}>
        &#8249;
      </button>
      <button className="slider-arrow slider-arrow-next" onClick={goToNext}>
        &#8250;
      </button>
      
      {/* Dots indicator */}
      <div className="custom-dots">
        {slides.map((_, idx) => (
          <button 
            key={idx} 
            className={`dot ${currentSlide === idx ? 'active' : ''}`}
            onClick={() => goToSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          ></button>
        ))}
      </div>
    </section>
  );
}

export default HeroSlider;