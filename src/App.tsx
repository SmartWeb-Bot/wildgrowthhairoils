import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import ProductDetails from './components/ProductDetails/index';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <ProductDetails />
        <Products />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;