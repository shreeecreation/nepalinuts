import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { Filter } from 'lucide-react';

const Products: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [sortBy, setSortBy] = useState<string>('name');

  const categories = ['All', ...Array.from(new Set(products.map(p => p.category)))];

  const filteredProducts = products.filter(product => 
    selectedCategory === 'All' || product.category === selectedCategory
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return Math.min(...Object.values(a.prices)) - Math.min(...Object.values(b.prices));
      case 'price-high':
        return Math.min(...Object.values(b.prices)) - Math.min(...Object.values(a.prices));
      case 'name':
      default:
        return a.name.localeCompare(b.name);
    }
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-amber-900 mb-4">Our Premium Collection</h1>
          <p className="text-xl text-amber-700 max-w-2xl mx-auto">
            Discover our handpicked selection of the finest dry fruits, 
            each packed with nutrition and bursting with natural flavors.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex items-center space-x-4">
              <Filter className="w-5 h-5 text-amber-600" />
              <span className="font-semibold text-amber-900">Filter by Category:</span>
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      selectedCategory === category
                        ? 'bg-amber-600 text-white'
                        : 'bg-amber-100 text-amber-800 hover:bg-amber-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <span className="font-semibold text-amber-900">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 rounded-lg border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                <option value="name">Name</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {sortedProducts.map((product) => (
            <div 
              key={product.id} 
              className="bg-gradient-to-br from-white to-amber-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-amber-100 overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-amber-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    {product.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-amber-900 mb-2">{product.name}</h3>
                <p className="text-amber-700 text-sm mb-4 leading-relaxed line-clamp-2">{product.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-2xl font-bold text-green-600">Rs.{Math.min(...Object.values(product.prices))}</span>
                    <span className="text-sm text-amber-600 ml-1"></span>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-amber-600">Starting from</p>
                    <p className="text-sm font-semibold text-amber-800">{Object.keys(product.prices)[0]}</p>
                  </div>
                </div>

                <Link
                  to={`/product/${product.id}`}
                  className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white py-3 rounded-full font-semibold transition-all duration-200 hover:scale-105 text-center block"
                >
                  View Details & Order
                </Link>
              </div>
            </div>
          ))}
        </div>

        {sortedProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-amber-700">No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;