import React from 'react';
import { motion } from 'framer-motion';

const OfferBanner = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-primary to-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <motion.div 
            className="lg:w-2/3"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-playfair mb-4">
              Flat 30% OFF on Festive Collection
            </h2>
            <p className="text-xl text-gray-800 mb-6">
              Limited Time Only! Elevate your style with our exclusive festive range.
            </p>
            <button className="px-8 py-3 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition duration-300">
              Shop Now
            </button>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/3 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHdvbWFufGVufDB8fDB8fHww" 
              alt="Festive collection" 
              className="rounded-full w-64 h-64 object-cover shadow-luxury"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OfferBanner;