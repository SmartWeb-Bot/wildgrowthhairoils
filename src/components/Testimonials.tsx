import React, { useState, useEffect, useMemo } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import StarRating from './StarRating';

const testimonials = [
  {
    id: 1,
    name: "Jods",
    role: "Verified Customer",
    content: "I’ve been using this oil for a while now & I’ve seen a lot of growth in my hair . I love it I’ve recommend it to friends & family !! 😍😍😍🥰😘. Don’t think twice just buy trust mee.",
    image: require('../assets/images/Testimonials/profile.png'),
    rating: 5
  },
  {
    id: 2,
    name: "Marinelly",
    role: "Verified Customer",
    content: "I've been using Wild Growth Hair Oil for just a few days, and I’m already impressed with the results😍🥰😘. I’m seeing.",
    image: require('../assets/images/Testimonials/profile.png'),
    rating: 5
  },
  {
    id: 3,
    name: "Mabel Rucker",
    role: "Verified Customer",
    content: "I love the scent of Wild Growth Hair Oil, and it feels like it provides excellent protection for my hair strands. However, I’ve found it works best when applied directly to the scalp.",
    image: require('../assets/images/Testimonials/profile.png'),
    rating: 4
  },
  {
    id: 4,
    name: "David Kim",
    role: "Long-term Customer",
    content: "Been using their products for over a year now. The transformation in my hair's health and growth is remarkable!",
    image: require('../assets/images/Testimonials/profile.png'),
    rating: 5
  },
  {
    id: 5,
    name: "martha smith",
    role: "Verified Customer",
    content: "This product is amazing! It helped my thick, coarse hair grow, softened it, and works great for detangling. My family loves it too—thank you for such a great product!",
    image: require('../assets/images/Testimonials/profile.png'),
    rating: 5
  },
];

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Create balanced pairs of testimonials
  const testimonialPairs = useMemo(() => {
    const pairs = [];
    for (let i = 0; i < testimonials.length; i += 2) {
      if (i + 1 < testimonials.length) {
        // If we have a pair, add both
        pairs.push([testimonials[i], testimonials[i + 1]]);
      } else {
        // If we have an odd number, pair the last one with the first one
        pairs.push([testimonials[i], testimonials[0]]);
      }
    }
    return pairs;
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % testimonialPairs.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonialPairs.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonialPairs.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => 
      (prev - 1 + testimonialPairs.length) % testimonialPairs.length
    );
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-description">
            Real stories from real people who have experienced the magic of WildGrowthHair oils
          </p>
        </div>

        <div className="testimonials-slider">
          <button className="slider-arrow slider-arrow-left" onClick={prevSlide}>
            <ChevronLeft size={24} />
          </button>

          <div className="testimonials-wrapper">
            <div 
              className="testimonials-track"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonialPairs.map((pair, groupIndex) => (
                <div key={groupIndex} className="testimonial-slide">
                  <div className="testimonial-group">
                    {pair.map((testimonial) => (
                      <div key={`${groupIndex}-${testimonial.id}`} className="testimonial-card">
                        <Quote className="testimonial-icon" size={32} />
                        <p className="testimonial-content">{testimonial.content}</p>
                        <div className="testimonial-author">
                          <div className="author-image">
                            <img src={testimonial.image} alt={testimonial.name} />
                          </div>
                          <div className="author-info">
                            <div className="author-name">{testimonial.name}</div>
                            <div className="author-role">{testimonial.role}</div>
                            <StarRating rating={testimonial.rating} />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="slider-arrow slider-arrow-right" onClick={nextSlide}>
            <ChevronRight size={24} />
          </button>

          <div className="slider-dots">
            {testimonialPairs.map((_, index) => (
              <button
                key={index}
                className={`slider-dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}