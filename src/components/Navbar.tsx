import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import MobileMenu from './MobileMenu';
const wildGrowthOilsLogo = require("../assets/images/wildGrowthOilsLogo.png");

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      if (window.innerWidth <= 768) {
        setIsMobileMenuOpen(true);
      }
    }
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMenuToggle = (event: React.MouseEvent) => {
    event.stopPropagation();
    setIsMobileMenuOpen(true);
  };
  
  return (
    <>
      <nav className="navbar">
        <div className="container navbar-container">
          <a href="#" className="navbar-brand">
            <img src={wildGrowthOilsLogo} alt="Logo" style={{ width: '12%', height: 'auto', alignItems: 'center' }} />
            <span>WildGrowthOils</span>
          </a>

          <div className="navbar-menu">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#products">Product</a>
            <a href="#faq">FAQ</a>
            <a href="#testimonials">Testimonials</a>
          </div>

          <div className="navbar-actions">
            <button
              className="menu-button"
              onClick={handleMenuToggle}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

    </>
  );
}