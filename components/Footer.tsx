import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-lux-black text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <h2 className="font-display text-2xl mb-6 tracking-widest">
              LUMIÈRE <br /> & OMBRE
            </h2>
            <p className="text-gray-400 text-sm font-sans leading-relaxed">
              Redefining luxury through sustainable craftsmanship and timeless design.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-serif text-lg mb-6">Customer Care</h4>
            <ul className="space-y-3 text-gray-400 text-sm font-sans">
              <li><a href="#" className="hover:text-gold-400 transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">Authenticity Guarantee</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">Book an Appointment</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6">The Maison</h4>
            <ul className="space-y-3 text-gray-400 text-sm font-sans">
              <li><a href="#" className="hover:text-gold-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">Press</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-serif text-lg mb-6">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">Be the first to know about new collections.</p>
            <div className="flex border-b border-gray-600 pb-2">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-transparent w-full outline-none text-sm placeholder-gray-500 focus:placeholder-gray-300"
              />
              <button className="text-gold-400 text-xs uppercase tracking-widest hover:text-white transition-colors">
                Subscribe
              </button>
            </div>
            <div className="flex gap-4 mt-8">
              <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-600 text-xs font-sans">
            &copy; {new Date().getFullYear()} LUMIÈRE & OMBRE. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};