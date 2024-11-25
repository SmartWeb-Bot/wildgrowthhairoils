import React from 'react';
import { ShoppingCart, Menu, Leaf } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <a href="#" className="navbar-brand">
          <Leaf size={32} color="#059669" />
          <span>WildGrowthOils</span>
        </a>
        
        <div className="navbar-menu">
          <a href="#home">Home</a>
          <a href="#products">Products</a>
          <a href="#about">About</a>
          <a href="#testimonials">Testimonials</a>
        </div>

        <div className="navbar-actions">
          <button>
            <ShoppingCart size={24} />
          </button>
          <button className="menu-button">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
}