import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, MessageCircle, Star, Leaf, Award, Shield } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { dispatch } = useCart();
  const [selectedWeight, setSelectedWeight] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(1);

  const product = products.find(p => p.id === parseInt(id || '0'));

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-amber-900 mb-4">Product Not Found</h1>
          <Link to="/products" className="text-amber-600 hover:text-amber-800">
            ← Back to Products
          </Link>
        </div>
      </div>
    );
  }

  // Set default weight if not selected
  if (!selectedWeight && Object.keys(product.prices).length > 0) {
    setSelectedWeight(Object.keys(product.prices)[0]);
  }

  const selectedPrice = selectedWeight ? product.prices[selectedWeight] : 0;

  const handleAddToCart = () => {
    if (selectedWeight) {
      dispatch({
        type: 'ADD_ITEM',
        payload: {
          product,
          weight: selectedWeight,
          price: selectedPrice
        }
      });
    }
  };

  const handleOrderNow = () => {
    const message = `Hi, I would like to order ${product.name} - ${selectedWeight} (Qty: ${quantity}) for Rs.${selectedPrice * quantity}. Please confirm availability.`;
    const whatsappUrl = `https://wa.me/9808901365?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 py-8">
      <div className="container mx-auto px-4">
        <Link 
          to="/products" 
          className="inline-flex items-center space-x-2 text-amber-600 hover:text-amber-800 mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Products</span>
        </Link>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Product Image */}
            <div className="relative">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-96 lg:h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              <div className="absolute top-6 left-6">
                <span className="bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {product.category}
                </span>
              </div>
            </div>

            {/* Product Details */}
            <div className="p-8 lg:p-12">
              <h1 className="text-4xl font-bold text-amber-900 mb-4">{product.name}</h1>
              <p className="text-lg text-amber-700 mb-6 leading-relaxed">{product.longDescription}</p>

              {/* Price and Weight Selection */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-amber-900 mb-4">Select Weight & Price</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {Object.entries(product.prices).map(([weight, price]) => (
                    <button
                      key={weight}
                      onClick={() => setSelectedWeight(weight)}
                      className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                        selectedWeight === weight
                          ? 'border-amber-600 bg-amber-50 shadow-lg'
                          : 'border-amber-200 hover:border-amber-400'
                      }`}
                    >
                      <div className="text-center">
                        <p className="font-semibold text-amber-900">{weight}</p>
                        <p className="text-2xl font-bold text-green-600">Rs.{price}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Selection */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-amber-900 mb-4">Quantity</h3>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 rounded-full bg-amber-100 hover:bg-amber-200 flex items-center justify-center text-amber-800 font-semibold"
                  >
                    -
                  </button>
                  <span className="text-2xl font-bold text-amber-900 min-w-[3rem] text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 rounded-full bg-amber-100 hover:bg-amber-200 flex items-center justify-center text-amber-800 font-semibold"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Total Price */}
              {selectedWeight && (
                <div className="mb-8 p-4 bg-green-50 rounded-xl border border-green-200">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-green-800">Total Price:</span>
                    <span className="text-3xl font-bold text-green-600">Rs.{selectedPrice * quantity}</span>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button
                  onClick={handleAddToCart}
                  disabled={!selectedWeight}
                  className="flex-1 bg-amber-600 hover:bg-amber-700 disabled:bg-gray-300 text-white py-4 rounded-full font-semibold text-lg transition-all duration-200 hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <ShoppingCart className="w-5 h-5" />
                  <span>Add to Cart</span>
                </button>
                
                <button
                  onClick={handleOrderNow}
                  disabled={!selectedWeight}
                  className="flex-1 bg-green-500 hover:bg-green-600 disabled:bg-gray-300 text-white py-4 rounded-full font-semibold text-lg transition-all duration-200 hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Order via WhatsApp</span>
                </button>
              </div>

              {/* Product Features */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 bg-green-50 rounded-xl">
                  <Leaf className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <p className="text-sm font-semibold text-green-800">100% Natural</p>
                </div>
                <div className="text-center p-4 bg-amber-50 rounded-xl">
                  <Award className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                  <p className="text-sm font-semibold text-amber-800">Premium Quality</p>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-xl">
                  <Shield className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <p className="text-sm font-semibold text-blue-800">Quality Assured</p>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Information Tabs */}
          <div className="border-t border-amber-100">
            <div className="p-8 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Health Benefits */}
                <div>
                  <h3 className="text-2xl font-bold text-amber-900 mb-6">Health Benefits</h3>
                  <ul className="space-y-3">
                    {product.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <Star className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                        <span className="text-amber-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Nutritional Information */}
                <div>
                  <h3 className="text-2xl font-bold text-amber-900 mb-6">Nutritional Information</h3>
                  <div className="bg-amber-50 rounded-xl p-6">
                    <p className="text-sm text-amber-600 mb-4">Per 100g serving:</p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex justify-between">
                        <span className="text-amber-800">Protein:</span>
                        <span className="font-semibold text-amber-900">{product.nutritionalInfo.protein}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-amber-800">Fat:</span>
                        <span className="font-semibold text-amber-900">{product.nutritionalInfo.fat}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-amber-800">Carbs:</span>
                        <span className="font-semibold text-amber-900">{product.nutritionalInfo.carbs}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-amber-800">Fiber:</span>
                        <span className="font-semibold text-amber-900">{product.nutritionalInfo.fiber}</span>
                      </div>
                      <div className="flex justify-between col-span-2 pt-2 border-t border-amber-200">
                        <span className="text-amber-800">Calories:</span>
                        <span className="font-bold text-green-600 text-lg">{product.nutritionalInfo.calories}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-blue-50 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-blue-900 mb-3">Origin</h4>
                  <p className="text-blue-800">{product.origin}</p>
                </div>
                <div className="bg-green-50 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-green-900 mb-3">Storage Instructions</h4>
                  <p className="text-green-800">{product.storage}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;