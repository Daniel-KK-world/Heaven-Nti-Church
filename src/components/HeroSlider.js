import React, { useState, useEffect } from "react";
import JesusPicture from "../assets/Jesuspicture.jpg";
import pastor5 from "../assets/pastor5.jpg";
import pastor2 from "../assets/pastor2.jpg";
import churchmother from "../assets/churchmother.jpg";
import pastor3 from "../assets/pastor3.jpg";
import "../App.css";

function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const slides = [
    { 
      image: JesusPicture, 
      caption: "Experience Divine Grace", 
      verse: "For God so loved the world that he gave his one and only Son - John 3:16",
      mobileImage: JesusPicture // You could use different images for mobile if needed
    },
    { 
      image: pastor3, 
      caption: "Spiritual Guidance", 
      verse: "Your word is a lamp for my feet, a light on my path - Psalm 119:105",
      mobileImage: pastor3
    },
    { 
      image: pastor2, 
      caption: "Jesus Christ is coming soon", 
      verse: "Therefore keep watch, because you do not know the day or the hour - Matthew 25:13",
      mobileImage: pastor2
    },
    { 
      image: churchmother, 
      caption: "Join us to worship", 
      verse: "Come, let us bow down in worship - Psalm 95:6",
      mobileImage: churchmother
    },
    { 
      image: pastor5, 
      caption: "Experience the power of prayer", 
      verse: "Pray without ceasing - 1 Thessalonians 5:17",
      mobileImage: pastor5
    },
  ];

  // Check screen size and adjust image positioning
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
    }, 5000);

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
                src={isMobile ? slide.mobileImage : slide.image}
                alt={`Slide ${index + 1}`}
                className="slide-image"
                style={{ objectPosition: isMobile ? "center center" : "center center" }}
              />
              <div className="image-overlay"></div>
            </div>
            
            <div className="slide-content">
              <div className="caption-container">
                <h2 className="slide-caption">{slide.caption}</h2>
                <p className="slide-verse">{slide.verse}</p>
                <div className="hero-buttons">
                  <button className="btn btn-primary">Join Us</button>
                  <button className="btn btn-outline-light">Learn More</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Navigation arrows */}
      <button className="slider-arrow slider-arrow-prev" onClick={goToPrev}>
        &#8249;
      </button>
      <button className="slider-arrow slider-arrow-next" onClick={goToPrev}>
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