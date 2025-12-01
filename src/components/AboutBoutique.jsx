import React from 'react';
import { motion } from 'framer-motion';

const AboutBoutique = () => {
  return (
    <section className="py-16 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1546213290-e1b492ab3eee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8" 
              alt="Boutique interior" 
              className="rounded-xl shadow-luxury"
            />
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-playfair mb-6">About Our Boutique</h2>
            <p className="text-lg text-gray-700 mb-6">
              We are a luxury boutique focused on premium fashion, handcrafted designs, and personalized styling experience. 
              Our curated collection features exclusive pieces from renowned designers and emerging talents.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Each garment in our boutique tells a story of craftsmanship, quality, and timeless elegance. 
              We believe in celebrating individuality through fashion and helping you express your unique style.
            </p>
            <button className="px-8 py-3 bg-black text-white font-medium rounded-full hover:bg-gold hover:text-black transition duration-300">
              Learn More
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutBoutique;