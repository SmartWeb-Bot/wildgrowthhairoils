import React from 'react';
import { Leaf, Instagram, Facebook, Twitter } from 'lucide-react';
const wildGrowthOilsLogo12 = require("../assets/images/wildGrowthOilsLogo.png");

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand-section">
            <div className="footer-brand">
              {/* <Leaf size={32} color="#059669" /> */}
              <img src={wildGrowthOilsLogo12} alt="Logo" style={{ width: '15%', height: 'auto', alignItems: 'center' }} />
              <span>WildGrowthOils</span>
            </div>
            <p className="footer-description">
              Empowering natural beauty through the power of organic hair care solutions.
            </p>
            <div className="social-links">
              <a href="#"><Instagram size={24} /></a>
              <a href="#"><Facebook size={24} /></a>
              <a href="#"><Twitter size={24} /></a>
            </div>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#products">Product</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#FAQ">FAQ</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Contact Us</h3>
            <ul className="footer-links">
              <li>1234 Nature Lane</li>
              <li>Green City, GC 12345</li>
              <li>Phone: (555) 123-4567</li>
              <li>Email: hello@wildgrowthhair.com</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} WildGrowthOils. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}