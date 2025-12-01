import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturedCollections from './components/FeaturedCollections';
import ProductGrid from './components/ProductGrid';
import AboutBoutique from './components/AboutBoutique';
import Testimonials from './components/Testimonials';
import OfferBanner from './components/OfferBanner';
import Footer from './components/Footer';
import Cart from './components/Cart';
import CollectionProducts from './components/CollectionProducts';
import ContactPage from './components/ContactPage';
import AboutPage from './components/AboutPage';
import ScrollToTop from './components/ScrollToTop';
import ScrollToTopButton from './components/ScrollToTopButton';
import AuthModal from './components/AuthModal';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  useEffect(() => {
    const handleOpenAuthModal = () => {
      setIsAuthModalOpen(true);
    };

    window.addEventListener('openAuthModal', handleOpenAuthModal);

    return () => {
      window.removeEventListener('openAuthModal', handleOpenAuthModal);
    };
  }, []);

  const closeAuthModal = () => {
    setIsAuthModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />
      <Navbar />
      <main className="pt-16">
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <FeaturedCollections />
              <ProductGrid />
              <AboutBoutique />
              <Testimonials />
              <OfferBanner />
            </>
          } />
          <Route path="/collections" element={<FeaturedCollections />} />
          <Route path="/products" element={<ProductGrid />} />
          <Route path="/collection/:collectionName" element={<CollectionProducts />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
      <Footer />
      <ScrollToTopButton />
      
      {/* Authentication Modal */}
      <AuthModal isOpen={isAuthModalOpen} onClose={closeAuthModal} />
    </div>
  );
}

export default App;