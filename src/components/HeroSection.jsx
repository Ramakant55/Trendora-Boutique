import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  const handleShopNow = () => {
    // Navigate to the products page
    navigate('/products');
  };

  const handleExploreCollections = () => {
    // Navigate to the collections page
    navigate('/collections');
  };

  return (
    <div className="relative bg-gradient-to-r from-primary to-secondary">
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1974&auto=format&fit=crop" 
          alt="Elegant woman in designer dress" 
          className="w-full h-full object-cover object-[center_100%] sm:object-[center_25%] md:object-[center_25%] lg:object-[center_30%] opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-black/10"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-40 lg:py-48">
        <div className="max-w-3xl">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-white font-playfair mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Discover Your Unique Style
          </motion.h1>
          
          <motion.p 
            className="text-xl text-white mb-10 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Premium boutique fashion crafted with elegance.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button 
              className="px-8 py-3 text-black font-medium rounded-full bg-yellow-500 transition duration-300 transform hover:scale-105"
              onClick={handleShopNow}
            >
              Shop Now
            </button>
            <button 
              className="px-8 py-3 bg-transparent border-2 border-white text-white font-medium rounded-full hover:bg-white hover:text-black transition duration-300"
              onClick={handleExploreCollections}
            >
              Explore Collections
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;