import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, Search } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center text-lux-black">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <button className="md:hidden" onClick={() => setIsMobileMenuOpen(true)}>
            <Menu className="w-6 h-6" />
          </button>
          <a href="#" className="font-display text-2xl md:text-3xl font-bold tracking-widest">
            LUMIÈRE
            <span className="text-gold-600 font-light"> & </span>
            OMBRE
          </a>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-12 font-sans text-sm tracking-widest uppercase font-semibold">
          <a href="#collection" className="hover:text-gold-600 transition-colors">Collection</a>
          <a href="#brand" className="hover:text-gold-600 transition-colors">Maison</a>
          <a href="#atelier" className="hover:text-gold-600 transition-colors">Atelier</a>
          <a href="#contact" className="hover:text-gold-600 transition-colors">Contact</a>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-6">
          <Search className="w-5 h-5 cursor-pointer hover:text-gold-600 transition-colors hidden sm:block" />
          <div className="relative cursor-pointer hover:text-gold-600 transition-colors">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute -top-2 -right-2 bg-gold-600 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
              0
            </span>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-white z-50 transform transition-transform duration-500 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-6 flex justify-end">
          <button onClick={() => setIsMobileMenuOpen(false)}>
            <X className="w-8 h-8 text-lux-black" />
          </button>
        </div>
        <div className="flex flex-col items-center gap-8 mt-12 font-serif text-2xl">
          <a href="#collection" onClick={() => setIsMobileMenuOpen(false)}>Collection</a>
          <a href="#brand" onClick={() => setIsMobileMenuOpen(false)}>The Maison</a>
          <a href="#atelier" onClick={() => setIsMobileMenuOpen(false)}>Atelier</a>
          <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
        </div>
      </div>
    </nav>
  );
};