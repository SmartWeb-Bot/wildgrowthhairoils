import React from 'react';
import { Star } from 'lucide-react';
import { productMock } from '../mocks/products';

export default function Products() {
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
              <picture>
                <source media="(min-width: 1024px)" srcSet={productMock.images.large} />
                <source media="(min-width: 768px)" srcSet={productMock.images.medium} />
                <img 
                  src={productMock.images.small} 
                  alt={productMock.name}
                  loading="lazy"
                />
              </picture>
            </div>
            <div className="product-content">
              <div className="product-header">
                <h3 className="product-title">{productMock.name}</h3>
                <div className="product-rating">
                  <Star size={20} fill="currentColor" />
                  <span>{productMock.rating}</span>
                </div>
              </div>
              <p className="product-description">{productMock.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}