import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag, MessageCircle, ArrowLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Cart: React.FC = () => {
  const { state, dispatch } = useCart();

  const updateQuantity = (productId: number, weight: string, quantity: number) => {
    dispatch({
      type: 'UPDATE_QUANTITY',
      payload: { productId, weight, quantity }
    });
  };

  const removeItem = (productId: number, weight: string) => {
    dispatch({
      type: 'REMOVE_ITEM',
      payload: { productId, weight }
    });
  };

  const handleWhatsAppOrder = () => {
    const orderDetails = state.items.map(item => 
      `${item.product.name} - ${item.weight} (Qty: ${item.quantity}) - Rs.${item.price * item.quantity}`
    ).join('\n');
    
    const message = `Hi, I would like to order the following items:\n\n${orderDetails}\n\nTotal: Rs.${state.total}\n\nPlease confirm availability and delivery details.`;
    const whatsappUrl = `https://wa.me/9808901365?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 py-8">
        <div className="container mx-auto px-4">
          <div className="text-center py-16">
            <ShoppingBag className="w-24 h-24 text-amber-300 mx-auto mb-8" />
            <h1 className="text-3xl font-bold text-amber-900 mb-4">Your Cart is Empty</h1>
            <p className="text-xl text-amber-700 mb-8">Add some delicious dry fruits to get started!</p>
            <Link 
              to="/products"
              className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 hover:scale-105 shadow-lg inline-flex items-center space-x-2"
            >
              <span>Shop Now</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Link 
              to="/products" 
              className="inline-flex items-center space-x-2 text-amber-600 hover:text-amber-800 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Continue Shopping</span>
            </Link>
          </div>
          <h1 className="text-3xl font-bold text-amber-900">Shopping Cart</h1>
          <button
            onClick={clearCart}
            className="text-red-600 hover:text-red-800 transition-colors"
          >
            Clear Cart
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {state.items.map((item) => (
              <div key={`${item.product.id}-${item.weight}`} className="bg-white rounded-2xl shadow-lg p-6 border border-amber-100">
                <div className="flex items-center space-x-4">
                  <img 
                    src={item.product.image} 
                    alt={item.product.name}
                    className="w-20 h-20 object-cover rounded-xl"
                  />
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-amber-900">{item.product.name}</h3>
                    <p className="text-amber-700">Weight: {item.weight}</p>
                    <p className="text-green-600 font-semibold">Rs.{item.price} each</p>
                  </div>

                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => updateQuantity(item.product.id, item.weight, item.quantity - 1)}
                      className="w-8 h-8 rounded-full bg-amber-100 hover:bg-amber-200 flex items-center justify-center text-amber-800"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    
                    <span className="text-xl font-bold text-amber-900 min-w-[2rem] text-center">
                      {item.quantity}
                    </span>
                    
                    <button
                      onClick={() => updateQuantity(item.product.id, item.weight, item.quantity + 1)}
                      className="w-8 h-8 rounded-full bg-amber-100 hover:bg-amber-200 flex items-center justify-center text-amber-800"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="text-right">
                    <p className="text-2xl font-bold text-green-600">Rs.{item.price * item.quantity}</p>
                    <button
                      onClick={() => removeItem(item.product.id, item.weight)}
                      className="text-red-500 hover:text-red-700 mt-2 transition-colors"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-amber-100 sticky top-8">
              <h2 className="text-2xl font-bold text-amber-900 mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-amber-700">Items ({state.itemCount}):</span>
                  <span className="font-semibold text-amber-900">Rs.{state.total}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-amber-700">Delivery:</span>
                  <span className="font-semibold text-green-600">Free</span>
                </div>
                
                <div className="border-t border-amber-200 pt-4">
                  <div className="flex justify-between">
                    <span className="text-xl font-bold text-amber-900">Total:</span>
                    <span className="text-2xl font-bold text-green-600">Rs.{state.total}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={handleWhatsAppOrder}
                className="w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-full font-semibold text-lg transition-all duration-200 hover:scale-105 flex items-center justify-center space-x-2 mb-4"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Order via WhatsApp</span>
              </button>

              <div className="text-center text-sm text-amber-600">
                <p>Free delivery on all orders</p>
                <p>Pay on delivery available</p>
              </div>

              <div className="mt-6 p-4 bg-amber-50 rounded-xl">
                <h3 className="font-semibold text-amber-900 mb-2">Why Order via WhatsApp?</h3>
                <ul className="text-sm text-amber-700 space-y-1">
                  <li>• Instant order confirmation</li>
                  <li>• Real-time delivery updates</li>
                  <li>• Easy communication</li>
                  <li>• Flexible payment options</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;