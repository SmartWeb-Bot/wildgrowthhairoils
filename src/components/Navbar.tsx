import React from 'react';
const wildGrowthOilsLogo = require("../assets/images/wildGrowthOilsLogo.png");

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <a href="#" className="navbar-brand">
          <img src={wildGrowthOilsLogo} alt="Logo" style={{ width: '12%', height: 'auto',alignItems: 'center'}}/>
          <span>WildGrowthOils</span>
        </a>
        
        <div className="navbar-menu">
          <a href="#home">Home</a>
          <a href="#products">Product</a>
          <a href="#about">About</a>
          <a href="#testimonials">Testimonials</a>
        </div>
      </div>
    </nav>
  );
}