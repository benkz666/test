import React from 'react';

export const BrandStory: React.FC = () => {
  return (
    <section id="brand" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          
          <div className="w-full md:w-1/2 relative">
             <div className="absolute -top-4 -left-4 w-full h-full border border-gold-400 z-0 hidden md:block"></div>
             <img 
               src="https://images.unsplash.com/photo-1549439602-43ebca2327af?q=80&w=2070&auto=format&fit=crop" 
               alt="Artisan working on leather" 
               className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700 relative z-10 shadow-xl"
             />
          </div>

          <div className="w-full md:w-1/2">
            <h4 className="text-gold-600 tracking-[0.2em] uppercase text-sm mb-4 font-bold">The Maison</h4>
            <h2 className="font-display text-4xl md:text-5xl mb-6 leading-tight">
              Where Light Meets <br/> <span className="italic font-serif">Shadow</span>
            </h2>
            <p className="font-sans text-gray-600 leading-relaxed mb-6">
              Founded in 1985 in the heart of Florence, Lumière & Ombre began with a singular vision: to capture the duality of the modern woman. Our artisans dedicate over 40 hours to each piece, ensuring that every stitch tells a story of perfection.
            </p>
            <p className="font-sans text-gray-600 leading-relaxed mb-8">
              We use only ethically sourced leathers from sustainable tanneries in Tuscany. The gold hardware is cast in small batches to ensure a luster that never fades.
            </p>
            <div className="flex items-center gap-4">
              <div className="h-px w-12 bg-black"></div>
              <span className="font-serif italic text-lg">Alessandro Rossi, Founder</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};