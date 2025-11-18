import React from 'react';

export const Hero: React.FC = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 animate-[pulse_10s_ease-in-out_infinite_alternate]"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop")' }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-4">
        <h2 className="text-sm md:text-lg tracking-[0.3em] uppercase mb-4 animate-[fadeIn_1s_ease-out]">
          Spring / Summer 2025
        </h2>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl mb-8 animate-[fadeIn_1.5s_ease-out]">
          Eternal Elegance
        </h1>
        <p className="font-sans font-light text-lg md:text-xl max-w-2xl mb-12 text-gray-200 animate-[fadeIn_2s_ease-out]">
          Discover the new collection where shadow meets light. Handcrafted in Florence.
        </p>
        <a 
          href="#collection" 
          className="group relative px-8 py-3 overflow-hidden border border-white text-white transition-all duration-300 hover:bg-white hover:text-black animate-[fadeIn_2.5s_ease-out]"
        >
          <span className="relative z-10 tracking-widest uppercase text-sm">Explore Collection</span>
        </a>
      </div>
    </div>
  );
};