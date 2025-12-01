import React from 'react';
import siteData from '../data/siteData.json';

const AboutPage = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 font-playfair mb-6">About {siteData.company.name}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {siteData.company.tagline}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6 font-playfair">Our Story</h2>
            <p className="text-gray-600 mb-6 text-lg">
              Founded with a passion for fashion and an eye for elegance, {siteData.company.name} has been curating 
              exceptional pieces for the modern, sophisticated woman. Our journey began over a decade ago with a simple 
              vision: to provide premium fashion that empowers and inspires.
            </p>
            <p className="text-gray-600 mb-6 text-lg">
              What started as a small boutique in the heart of the city has now grown into a beloved destination for 
              fashion-forward individuals who appreciate quality, craftsmanship, and timeless style. Each piece in our 
              collection is carefully selected to ensure it meets our high standards of excellence.
            </p>
            <p className="text-gray-600 mb-6 text-lg">
              We believe that fashion is more than just clothing—it's a form of self-expression. Our dedicated team 
              works tirelessly to bring you collections that celebrate individuality while maintaining the sophistication 
              that defines our brand.
            </p>
          </div>
          
          <div className="bg-gray-100 rounded-xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
              alt="Boutique interior" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="mt-24">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center font-playfair">Our Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="mx-auto bg-gold w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quality</h3>
              <p className="text-gray-600">
                We are committed to offering only the finest materials and craftsmanship in every piece we sell.
              </p>
            </div>
            
            <div className="text-center">
              <div className="mx-auto bg-gold w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sustainability</h3>
              <p className="text-gray-600">
                We prioritize ethical and sustainable practices in our sourcing and business operations.
              </p>
            </div>
            
            <div className="text-center">
              <div className="mx-auto bg-gold w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Community</h3>
              <p className="text-gray-600">
                We believe in building lasting relationships with our customers and supporting our local community.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-24 bg-primary rounded-2xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 font-playfair">Join Our Journey</h2>
            <p className="text-gray-600 mb-8 text-lg">
              We invite you to explore our collections and discover pieces that reflect your unique style. 
              Whether you're looking for everyday elegance or something special for a memorable occasion, 
              we're here to help you find exactly what you're looking for.
            </p>
            <a 
              href="/collections" 
              className="inline-block px-8 py-3 bg-black text-white font-medium rounded-full hover:bg-gold hover:text-black transition duration-300"
            >
              Explore Collections
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;