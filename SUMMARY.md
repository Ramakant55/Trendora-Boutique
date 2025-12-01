# Luxury Boutique Website - Summary

## Overview
This is a premium, modern, and luxurious boutique website UI built with React, Vite, and Tailwind CSS. The design is elegant, feminine, and classy, similar to high-end fashion brands like Zara, Dior, and Mango.

## Key Features Implemented

### 1. Design & Styling
- Soft pastel color palette with shades of pink (#f8e9f1), white (#ffffff), black text (#000000), and gold accents
- Fully responsive layout for mobile, tablet, and desktop
- Glassmorphism effect in the navigation bar
- Smooth animations using Framer Motion
- Beautiful typography with Poppins and Playfair Display fonts
- Custom Tailwind shadows for a luxurious feel

### 2. Website Sections

#### 🟩 Navigation Bar
- Boutique logo with gold/black styling
- Menu with Home, Collections, New Arrivals, About Us, Contact
- Search bar
- Cart icon & Profile icon
- Sticky navbar with glassmorphism effect

#### 🟩 Hero Section
- Full-width elegant woman model image
- Large bold heading: "Discover Your Unique Style"
- Subtitle: "Premium boutique fashion crafted with elegance"
- CTA Buttons: Shop Now (primary), Explore Collections (secondary)

#### 🟩 Featured Collections
- 4 category cards with images:
  - Designer Kurtis
  - Western Wear
  - Party Gowns
  - Bridal Collection
- Smooth hover animations with drop shadow & rounded corners

#### 🟩 Product Grid (New Arrivals)
- High-quality product images
- Product names and prices
- Star rating system
- "Add to Cart" buttons
- Hover zoom effect

#### 🟩 About Boutique
- Short descriptive content about the boutique
- Image of store/boutique interior

#### 🟩 Testimonials
- 3 customer reviews with images
- Elegant card layout
- Light pastel background

#### 🟩 Offer Banner
- Horizontal banner with "Flat 30% OFF on Festive Collection"
- Attractive model photo
- Gradient background

#### 🟩 Footer
- Quick Links section
- Social media icons
- Boutique address, phone, and email
- Opening hours
- Newsletter signup form

## Technical Implementation

### Technologies Used
- **React** - JavaScript library for building user interfaces
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for React

### Project Structure
```
src/
├── components/
│   ├── Navbar.jsx
│   ├── HeroSection.jsx
│   ├── FeaturedCollections.jsx
│   ├── ProductGrid.jsx
│   ├── AboutBoutique.jsx
│   ├── Testimonials.jsx
│   ├── OfferBanner.jsx
│   └── Footer.jsx
├── data/
│   ├── products.json
│   ├── collections.json
│   ├── testimonials.json
│   └── siteData.json
├── App.jsx
├── main.jsx
└── index.css
```

### Data Management
All content is managed through JSON files for easy customization:
- Product data in `products.json`
- Collection data in `collections.json`
- Testimonial data in `testimonials.json`
- Site-wide data in `siteData.json`

### Responsive Design
The website is fully responsive and adapts to different screen sizes:
- Mobile (up to 768px)
- Tablet (768px to 1024px)
- Desktop (1024px and above)

## How to Run the Project

1. Navigate to the project directory
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```
4. Open your browser to http://localhost:5174 (or the port shown in the terminal)

## Customization Options

- **Colors**: Modify the color palette in `tailwind.config.js`
- **Fonts**: Change fonts in `index.css`
- **Content**: Update JSON files in the `src/data/` directory
- **Images**: Replace image URLs in the JSON files with your own images

## Additional Features

- Smooth scrolling navigation
- Interactive hover effects on all clickable elements
- Form validation for newsletter signup
- SEO-friendly structure
- Accessible design with proper semantic HTML