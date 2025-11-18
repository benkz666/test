import React from 'react';
import { Product } from '../types';
import { Plus } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group relative cursor-pointer">
      <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 mb-4">
        <img 
          src={product.image} 
          alt={product.name} 
          className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
        
        {/* Add to Cart Button */}
        <button className="absolute bottom-4 right-4 bg-white text-black p-3 rounded-full shadow-lg opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-gold-600 hover:text-white">
          <Plus className="w-5 h-5" />
        </button>
      </div>

      <div className="text-center">
        <p className="text-xs text-gray-500 tracking-widest uppercase mb-1">{product.category}</p>
        <h3 className="font-serif text-lg text-lux-charcoal mb-1 group-hover:text-gold-600 transition-colors">
          {product.name}
        </h3>
        <p className="font-sans text-sm font-semibold text-gray-900">
          ${product.price.toLocaleString()}
        </p>
      </div>
    </div>
  );
};