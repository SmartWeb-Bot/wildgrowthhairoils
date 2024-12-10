import React, { useState, useEffect } from 'react';

const desktopImages = [
  require('../assets/images/Heros/desktop/wildGrowthOilsFrontImage1.png'),
  require('../assets/images/Heros/desktop/wildGrowthOilsFrontImage2.png'),
  require('../assets/images/Heros/desktop/wildGrowthOilsFrontImage3.png'),
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [images] = useState(desktopImages);

  // Go to the next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length); // Loop back to the first slide after the last
  };

  // Go to the previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length); // Loop to the last slide if at the start
  };

  // Automatic slide change
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 3 seconds

    // Cleanup the interval when the component unmounts
    return () => clearInterval(interval);
  }, [currentSlide]); // Only restart the interval when the slide changes

  // Render the slides manually
  return (
    <section className="hero" id="home">
      <div className="hero-bg">
        <div className="slider-container">
          <div
            className="slider-slide"
            style={{
              backgroundImage: `url(${images[currentSlide]})`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              aspectRatio: '19.8/9',
            }}
          ></div>
          {/* Move dots below the slider-slide */}
          <div className="slider-dots">
            {images.map((_, index) => (
              <div
                key={index}
                className={`dot ${currentSlide === index ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)} // Allow direct navigation via dots
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>

  );
}

