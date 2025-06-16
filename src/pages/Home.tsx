import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Leaf, Heart, CheckCircle, Star, MessageCircle, Phone } from 'lucide-react';
import { products } from '../data/products';

const Home: React.FC = () => {
  const featuredProducts = products.slice(0, 4);
  
  const testimonials = [
    {
      name: "Priya Sharma",
      text: "Excellent quality dry fruits! Fresh and tasty. My family loves them.",
      rating: 5
    },
    {
      name: "Rajesh Kumar",
      text: "Best almonds I've ever had. Great packaging and quick delivery via WhatsApp.",
      rating: 5
    },
    {
      name: "Anita Singh",
      text: "Premium quality at reasonable prices. Highly recommend for healthy snacking!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/20 to-orange-900/20"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full">
                <Award className="w-5 h-5 text-amber-600" />
                <span className="text-amber-800 font-medium">Premium Quality Assured</span>
              </div>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold text-amber-900 mb-6 leading-tight">
              Nature's Finest
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
                Dry Fruits
              </span>
            </h2>
            
            <p className="text-xl text-amber-800 mb-8 max-w-2xl mx-auto leading-relaxed">
              Handpicked premium dry fruits packed with nutrition and flavor. 
              Fresh from farms to your doorstep with just a WhatsApp message.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                to="/products" 
                className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 hover:scale-105 shadow-lg flex items-center space-x-2"
              >
                <span>Shop Now</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              
              <a 
                href="https://wa.me/9808901365" 
                target="_blank" 
                rel="noopener noreferrer"
                className="border-2 border-green-500 text-green-600 hover:bg-green-500 hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 flex items-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
              </a>
            </div>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-amber-900 mb-2">100% Natural</h3>
                <p className="text-amber-700">No preservatives or artificial additives</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-amber-900 mb-2">Health First</h3>
                <p className="text-amber-700">Rich in nutrients and antioxidants</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-amber-900 mb-2">Premium Quality</h3>
                <p className="text-amber-700">Carefully sourced and quality tested</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-900 mb-4">Featured Products</h2>
            <p className="text-xl text-amber-700 max-w-2xl mx-auto">
              Discover our most popular premium dry fruits, loved by thousands of customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
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
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-amber-900 mb-2">{product.name}</h3>
                  <p className="text-amber-700 text-sm mb-4 leading-relaxed">{product.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-green-600">Rs.{Object.values(product.prices)[0]}</span>
                      <span className="text-sm text-amber-600 ml-1"></span>
                    </div>
                    <Link
                      to={`/product/${product.id}`}
                      className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 hover:scale-105"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/products"
              className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 hover:scale-105 shadow-lg inline-flex items-center space-x-2"
            >
              <span>View All Products</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-br from-amber-100 to-orange-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-amber-900 mb-8">Why Choose NepaliNuts?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-amber-900 mb-2">Quality Assured</h3>
                    <p className="text-amber-700">Every product is carefully selected and quality-tested to ensure you get only the best.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Leaf className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-amber-900 mb-2">Farm Fresh</h3>
                    <p className="text-amber-700">Direct from farms to your table, maintaining freshness and nutritional value.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-amber-900 mb-2">Easy Ordering</h3>
                    <p className="text-amber-700">Simple WhatsApp ordering system for quick and convenient purchases.</p>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Premium dry fruits" 
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-900 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-amber-700">Trusted by thousands of happy customers</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl shadow-lg border border-amber-200 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-amber-800 mb-6 italic">"{testimonial.text}"</p>
                <p className="font-semibold text-amber-900">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;