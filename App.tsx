import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductCard } from './components/ProductCard';
import { BrandStory } from './components/BrandStory';
import { AIConcierge } from './components/AIConcierge';
import { Footer } from './components/Footer';
import { PRODUCTS } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-cream flex flex-col">
      <Navbar />
      
      <main>
        <Hero />

        {/* Featured Collection */}
        <section id="collection" className="py-24 container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-gold-600 tracking-[0.2em] uppercase text-sm font-bold block mb-2">
              The Collection
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-lux-black">
              Icons of Style
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {PRODUCTS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-16 text-center">
            <button className="px-10 py-4 border border-lux-black text-lux-black uppercase tracking-widest text-sm hover:bg-lux-black hover:text-white transition-all duration-300">
              View All Products
            </button>
          </div>
        </section>

        <BrandStory />
        
        {/* Quote Section */}
        <section className="py-20 bg-lux-black text-white text-center">
           <div className="container mx-auto px-6 max-w-4xl">
             <h3 className="font-serif italic text-2xl md:text-4xl leading-relaxed opacity-90">
               "Fashion is not something that exists in dresses only. Fashion is in the sky, in the street, fashion has to do with ideas, the way we live, what is happening."
             </h3>
             <p className="mt-6 text-gold-400 tracking-widest uppercase text-xs">— Coco Chanel</p>
           </div>
        </section>

      </main>

      <Footer />
      
      {/* AI Chat Widget */}
      <AIConcierge />
    </div>
  );
};

export default App;