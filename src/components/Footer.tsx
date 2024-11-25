import React from 'react';
import { Leaf, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand-section">
            <div className="footer-brand">
              <Leaf size={32} color="#059669" />
              <span>WildGrowthHair</span>
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
              <li><a href="#about">About Us</a></li>
              <li><a href="#products">Products</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#contact">Contact</a></li>
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
          <p>&copy; {new Date().getFullYear()} WildGrowthHair. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}