import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-amber-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-orange-600 rounded-full flex items-center justify-center">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">NepaliNuts</h3>
                <p className="text-amber-200 text-sm">Premium Dry Fruits</p>
              </div>
            </div>
            <p className="text-amber-200">Your trusted source for premium quality dry fruits, delivered fresh to your doorstep.</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-amber-200">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/products" className="hover:text-white transition-colors">Products</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 text-amber-200">
              <li>Premium Nuts</li>
              <li>Dried Fruits</li>
              <li>Mixed Varieties</li>
              <li>Gift Packs</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-amber-200">
              <p>WhatsApp: +977-9808901365</p>
              <p>Available: 24 hour</p>
              <p>All Days</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-amber-800 mt-8 pt-8 text-center text-amber-200">
          <p>&copy; 2024 NepaliNuts Premium Dry Fruits. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;