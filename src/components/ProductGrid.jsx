import React from 'react';
import { motion } from 'framer-motion';
import productsData from '../data/products.json';
import { useCart } from '../context/CartContext';

const products = productsData.map(product => ({
  ...product,
  price: `$${product.price}`
}));

const ProductGrid = () => {
  const { addToCart } = useCart();
  
  // Function to render star ratings
  const renderRating = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} className="text-yellow-400">★</span>);
    }
    
    if (hasHalfStar) {
      stars.push(<span key="half" className="text-yellow-400">☆</span>);
    }
    
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-${i}`} className="text-gray-300">☆</span>);
    }
    
    return stars;
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-playfair mb-4">New Arrivals</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">Discover our latest premium fashion pieces</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="bg-white rounded-xl overflow-hidden shadow-luxury hover:shadow-xl transition-all duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                <div className="flex items-center mb-3">
                  <div className="flex mr-2">
                    {renderRating(product.rating)}
                  </div>
                  <span className="text-gray-500 text-sm">{product.rating}</span>
                </div>
                <p className="text-xl font-bold text-gray-900 mb-4">{product.price}</p>
                <button 
                  className="w-full py-2 bg-black text-white rounded-lg hover:bg-gold hover:text-black transition duration-300"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;