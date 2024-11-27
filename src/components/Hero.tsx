import React,{useState} from 'react';
import { ArrowRight } from 'lucide-react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
const image1=require('../assets/images/wildGrowthOilsFrontImage1.png');
const image2=require('../assets/images/wildGrowthOilsFrontImage2.png');
const image3=require('../assets/images/wildGrowthOilsFrontImage3.png');


export default function Hero() {

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="hero" id="home">
     <div className="hero-bg">
        <Slide arrows={false}  onChange={handleSlideChange}>
          <div className={`each-slide-effect ${currentSlide === 0 ? 'active' : ''}`}>
            <div style={{ 'backgroundImage': `url(${image1})` }}>
            </div>
          </div>
          <div className={`each-slide-effect ${currentSlide === 1 ? 'active' : ''}`}>
            <div style={{ 'backgroundImage': `url(${image2})` }}>
            </div>
          </div>
          <div className={`each-slide-effect ${currentSlide === 2 ? 'active' : ''}`}>
            <div style={{ 'backgroundImage': `url(${image3})` }}>
            </div>
          </div>
        </Slide>
        <div className="dots-container">
          <div className={`dot ${currentSlide === 0 ? 'active' : ''}`}></div>
          <div className={`dot ${currentSlide === 1 ? 'active' : ''}`}></div>
          <div className={`dot ${currentSlide === 2 ? 'active' : ''}`}></div>
        </div>
      </div>

      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Nurture Your Natural Beauty
          </h1>
          <p className="hero-description">
            Experience the power of nature with our premium hair oils, crafted to enhance your hair's natural growth and vitality.
          </p>
          
        </div>
      </div>
    </section>
  );
}