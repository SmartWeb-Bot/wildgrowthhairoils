import React from 'react';

export const Description = () => (
  <div className="description-content">
    <div className="description-image">
      <img 
        src="https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&q=80"
        alt="WildGrowthHair Oil"
      />
    </div>
    <div className="description-text">
      <h3>Premium Hair Growth Formula</h3>
      <p>
        WildGrowthHair Oil is a revolutionary blend of natural ingredients designed to transform your hair care routine. 
        Our unique formula combines ancient wisdom with modern science to create a powerful solution for all hair types.
      </p>
      <div className="key-features">
        <div className="feature">
          <span className="feature-highlight">100% Natural</span>
          <p>Pure botanical ingredients with no harmful chemicals</p>
        </div>
        <div className="feature">
          <span className="feature-highlight">Scientifically Proven</span>
          <p>Clinically tested formula for optimal results</p>
        </div>
        <div className="feature">
          <span className="feature-highlight">Suitable for All Hair Types</span>
          <p>Gentle yet effective for every hair texture and condition</p>
        </div>
      </div>
    </div>
  </div>
);