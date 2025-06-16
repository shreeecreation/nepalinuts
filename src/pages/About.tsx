import React from 'react';
import { CheckCircle, Leaf, MessageCircle, Award, Heart, Shield, Users, Truck } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: <Leaf className="w-8 h-8 text-green-600" />,
      title: "100% Natural",
      description: "No preservatives, no artificial additives. Just pure, natural goodness from nature's bounty."
    },
    {
      icon: <Award className="w-8 h-8 text-amber-600" />,
      title: "Premium Quality",
      description: "Carefully selected from the finest farms and orchards around the world for superior taste and nutrition."
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Quality Assured",
      description: "Every batch is tested for quality, freshness, and purity before reaching your doorstep."
    },
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: "Health First",
      description: "Rich in essential nutrients, vitamins, and minerals to support your healthy lifestyle."
    },
    {
      icon: <Users className="w-8 h-8 text-purple-600" />,
      title: "Customer Focused",
      description: "Dedicated to providing exceptional service and building lasting relationships with our customers."
    },
    {
      icon: <Truck className="w-8 h-8 text-indigo-600" />,
      title: "Fresh Delivery",
      description: "Direct from farms to your table, maintaining freshness and nutritional value throughout."
    }
  ];

  const stats = [
    { number: "10,000+", label: "Happy Customers" },
    { number: "50+", label: "Product Varieties" },
    { number: "5", label: "Years Experience" },
    { number: "100%", label: "Natural Products" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-amber-900 mb-6">About NepaliNuts</h1>
            <p className="text-xl text-amber-700 leading-relaxed mb-8">
              We are passionate about bringing you the finest quality dry fruits, sourced directly from 
              premium farms and orchards around the world. Our commitment to quality, freshness, and 
              customer satisfaction has made us a trusted name in healthy snacking.
            </p>
            <div className="flex justify-center">
              <img 
                src="https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Premium dry fruits collection" 
                className="rounded-2xl shadow-2xl max-w-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-amber-600 mb-2">{stat.number}</div>
                <div className="text-amber-800 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-900 mb-4">Why Choose NepaliNuts?</h2>
            <p className="text-xl text-amber-700 max-w-2xl mx-auto">
              We're committed to providing you with the highest quality dry fruits and the best customer experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-amber-100">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-amber-900 mb-4">{feature.title}</h3>
                <p className="text-amber-700 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-amber-900 mb-6">Our Story</h2>
                <div className="space-y-4 text-amber-700 leading-relaxed">
                  <p>
                    Founded with a simple mission: to make premium quality dry fruits accessible to everyone. 
                    We started as a small family business with a passion for healthy living and natural foods.
                  </p>
                  <p>
                    Over the years, we've built strong relationships with farmers and suppliers worldwide, 
                    ensuring that every product meets our strict quality standards. From California almonds 
                    to Middle Eastern dates, we source only the finest varieties.
                  </p>
                  <p>
                    Today, we're proud to serve thousands of customers who trust us for their daily nutrition 
                    and healthy snacking needs. Our commitment to quality, freshness, and customer satisfaction 
                    remains unchanged.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Our premium dry fruits" 
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-amber-100 to-orange-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-900 mb-4">Our Values</h2>
            <p className="text-xl text-amber-700 max-w-2xl mx-auto">
              These core values guide everything we do and shape our commitment to you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-amber-200">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-amber-900 mb-2">Quality First</h3>
                  <p className="text-amber-700">We never compromise on quality. Every product is carefully selected and tested to ensure it meets our high standards.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 border border-amber-200">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-amber-900 mb-2">Sustainability</h3>
                  <p className="text-amber-700">We work with farmers who practice sustainable agriculture, caring for the environment and future generations.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 border border-amber-200">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-amber-900 mb-2">Customer Care</h3>
                  <p className="text-amber-700">Your satisfaction is our priority. We're always here to help and ensure you have the best experience with us.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 border border-amber-200">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-amber-900 mb-2">Health & Wellness</h3>
                  <p className="text-amber-700">We believe in the power of natural foods to nourish and energize, supporting your healthy lifestyle choices.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;