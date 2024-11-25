import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg">
        <img
          src="https://images.unsplash.com/photo-1522338242992-e1a54906a8da?auto=format&fit=crop&q=80"
          alt="Natural hair care"
        />
      </div>
      
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Nurture Your Natural Beauty
          </h1>
          <p className="hero-description">
            Experience the power of nature with our premium hair oils, crafted to enhance your hair's natural growth and vitality.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary">
              Shop Now
              <ArrowRight className="ml-2" size={20} />
            </button>
            <button className="btn btn-secondary">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}