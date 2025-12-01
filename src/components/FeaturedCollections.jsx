import React from 'react';
import { motion } from 'framer-motion';
import collectionsData from '../data/collections.json';
import { useNavigate } from 'react-router-dom';

const collections = collectionsData;

const FeaturedCollections = () => {
  const navigate = useNavigate();
  
  const handleShopCollection = (collectionName) => {
    // Navigate to the collection-specific page
    const encodedCollectionName = encodeURIComponent(collectionName);
    navigate(`/collection/${encodedCollectionName}`);
  };

  return (
    <section className="py-16 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-playfair mb-4">Featured Collections</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">Discover our curated selection of premium fashion collections</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.id}
              className="bg-white rounded-xl overflow-hidden shadow-luxury hover:shadow-xl transition-all duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="overflow-hidden">
                <img 
                  src={collection.image} 
                  alt={collection.name} 
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{collection.name}</h3>
                <p className="text-gray-600 mb-4 text-sm">{collection.description}</p>
                <button 
                  className="text-gold font-medium hover:underline"
                  onClick={() => handleShopCollection(collection.name)}
                >
                  Shop Collection
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;