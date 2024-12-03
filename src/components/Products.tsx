import React, { useState } from 'react';
import { Star } from 'lucide-react';
import { productMock } from '../mocks/products';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Products() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % productMock.images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + productMock.images.length) % productMock.images.length
    );
  };

  return (
    <section className="products" id="products">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Premium Collection</h2>
          <p className="section-description">
            Discover our range of natural hair oils, carefully formulated to promote healthy hair growth
          </p>
        </div>

        <div className="products-grid">
          <div className={`product-card ${productMock.size}`}>
            <div className="product-image">
              <div className="image-slider">
                <picture>
                  <source
                    media="(min-width: 1024px)"
                    srcSet={productMock.images[currentImageIndex].large}
                  />
                  <source
                    media="(min-width: 768px)"
                    srcSet={productMock.images[currentImageIndex].medium}
                  />
                  <img
                    src={productMock.images[currentImageIndex].small}
                    alt={productMock.name}
                    loading="lazy"
                  />
                </picture>
                <button className="slider-arrow slider-arrow-left" onClick={handlePrevImage}>
                    <ChevronLeft size={24} />
                </button>
                <button className="slider-arrow slider-arrow-right" onClick={handleNextImage}>
                    <ChevronRight size={24} />
                </button>
              </div>
            </div>
            <div className="product-content">
              <div className="product-header">
                <h3 className="product-title">{productMock.name}</h3>
              </div>
              <p className="product-description">{productMock.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
