import React, { useState, useEffect } from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const desktopImages = [
  require('../assets/images/Heros/desktop/wildGrowthOilsFrontImage1.png'),
  require('../assets/images/Heros/desktop/wildGrowthOilsFrontImage2.png'),
  require('../assets/images/Heros/desktop/wildGrowthOilsFrontImage3.png'),
  require('../assets/images/Heros/desktop/wildGrowthOilsFrontImage4.png'),
  require('../assets/images/Heros/desktop/wildGrowthOilsFrontImage5.png'),
  require('../assets/images/Heros/desktop/wildGrowthOilsFrontImage6.png'),
];

const mobileImages = [
  require('../assets/images/Heros/mobile/wildGrowthOilsMobile1.png'),
  require('../assets/images/Heros/mobile/wildGrowthOilsMobile2.png'),
  require('../assets/images/Heros/mobile/wildGrowthOilsMobile3.png'),
  require('../assets/images/Heros/mobile/wildGrowthOilsMobile4.png'),
  require('../assets/images/Heros/mobile/wildGrowthOilsMobile5.png'),
  require('../assets/images/Heros/mobile/wildGrowthOilsMobile6.png'),
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [images, setImages] = useState(desktopImages);

  useEffect(() => {
    const updateImages = () => {
      const isMobile = window.matchMedia('(max-width: 768px)').matches;
      setImages(isMobile ? mobileImages : desktopImages);
    };

    updateImages(); // Initial check
    window.addEventListener('resize', updateImages); // Listen for screen size changes

    return () => window.removeEventListener('resize', updateImages); // Cleanup on unmount
  }, []);

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="hero" id="home">
      <div className="hero-bg">
        <Slide arrows={false} onChange={handleSlideChange}>
          {images.map((image, index) => (
            <div
              key={index}
              className={`each-slide-effect ${currentSlide === index ? 'active' : ''}`}
            >
              <div style={{ backgroundImage: `url(${image})` }}></div>
            </div>
          ))}
        </Slide>
        <div className="dots-container">
          {images.map((_, index) => (
            <div
              key={index}
              className={`dot ${currentSlide === index ? 'active' : ''}`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
}
