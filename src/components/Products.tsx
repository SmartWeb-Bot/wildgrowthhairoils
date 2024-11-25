import React from 'react';
import { Star, ShoppingCart } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Growth Elixir",
    description: "Premium blend of natural oils for maximum hair growth",
    price: 29.99,
    rating: 5,
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    name: "Scalp Nourisher",
    description: "Deep conditioning treatment for healthy scalp",
    price: 24.99,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    name: "Repair Serum",
    description: "Intensive repair for damaged hair",
    price: 34.99,
    rating: 5,
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80"
  }
];

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
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="product-content">
                <div className="product-header">
                  <h3 className="product-title">{product.name}</h3>
                  <div className="product-rating">
                    <Star size={20} fill="currentColor" />
                    <span>{product.rating}</span>
                  </div>
                </div>
                <p className="product-description">{product.description}</p>
                <div className="product-footer">
                  <span className="product-price">${product.price}</span>
                  <button className="btn btn-primary add-to-cart">
                    <ShoppingCart size={16} />
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}