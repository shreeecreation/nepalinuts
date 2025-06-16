import React from 'react';
import { MessageCircle, Phone, Clock, MapPin, Mail, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-amber-900 mb-4">Get In Touch</h1>
          <p className="text-xl text-amber-700 max-w-2xl mx-auto">
            Ready to order? Have questions? We're here to help! Contact us through WhatsApp for instant service.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-amber-100">
              <h2 className="text-2xl font-bold text-amber-900 mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-amber-900">WhatsApp</h3>
                    <a 
                      href="https://wa.me/9808901365" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-700 transition-colors text-lg"
                    >
                      +977-9808901365
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-amber-900">Phone</h3>
                    <a 
                      href="tel:9808901365" 
                      className="text-blue-600 hover:text-blue-700 transition-colors text-lg"
                    >
                      +977-9808901365
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-amber-900">Business Hours</h3>
                    <p className="text-amber-700">9:00 AM - 9:00 PM</p>
                    <p className="text-amber-600 text-sm">All Days</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-amber-900">Email</h3>
                    <p className="text-purple-600">info@NepaliNuts.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-amber-900">Service Area</h3>
                    <p className="text-red-600">Pan India Delivery</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why WhatsApp */}
            <div className="bg-green-50 rounded-2xl shadow-lg p-8 border border-green-200">
              <h3 className="text-xl font-bold text-green-900 mb-4">Why Order via WhatsApp?</h3>
              <ul className="space-y-3 text-green-800">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span>Instant order confirmation and updates</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span>Real-time delivery tracking</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span>Easy communication and support</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span>Flexible payment options</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span>Personalized customer service</span>
                </li>
              </ul>
            </div>
          </div>

          {/* WhatsApp Order Section */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl shadow-2xl p-8 text-white">
              <div className="text-center">
                <MessageCircle className="w-16 h-16 mx-auto mb-6" />
                <h2 className="text-3xl font-bold mb-4">Order via WhatsApp</h2>
                <p className="text-green-100 mb-8 text-lg">
                  Click any "Order Now" button on our products or contact us directly for personalized service!
                </p>
                
                <a 
                  href="https://wa.me/9808901365" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors inline-flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                >
                  <MessageCircle className="w-6 h-6" />
                  <span>Start WhatsApp Chat</span>
                </a>
              </div>
            </div>

            {/* Quick Order Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-amber-100">
              <h3 className="text-2xl font-bold text-amber-900 mb-6">Quick Order Request</h3>
              <p className="text-amber-700 mb-6">
                Fill out this form and we'll contact you via WhatsApp with pricing and availability.
              </p>
              
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-amber-900 mb-2">Your Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-amber-900 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 rounded-lg border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-amber-900 mb-2">Products Interested In</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="Tell us which dry fruits you're interested in..."
                  ></textarea>
                </div>
                
                <button 
                  type="button"
                  onClick={() => {
                    const message = "Hi, I'm interested in ordering dry fruits. Please contact me with more details.";
                    const whatsappUrl = `https://wa.me/9808901365?text=${encodeURIComponent(message)}`;
                    window.open(whatsappUrl, '_blank');
                  }}
                  className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white py-4 rounded-full font-semibold text-lg transition-all duration-200 hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Send via WhatsApp</span>
                </button>
              </form>
            </div>

            {/* FAQ */}
            <div className="bg-amber-50 rounded-2xl shadow-lg p-8 border border-amber-200">
              <h3 className="text-xl font-bold text-amber-900 mb-6">Frequently Asked Questions</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-amber-900 mb-2">Do you deliver nationwide?</h4>
                  <p className="text-amber-700 text-sm">Yes, we deliver across India. Delivery charges may apply based on location.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-amber-900 mb-2">What payment methods do you accept?</h4>
                  <p className="text-amber-700 text-sm">We accept cash on delivery, UPI, bank transfer, and online payments.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-amber-900 mb-2">How fresh are your products?</h4>
                  <p className="text-amber-700 text-sm">All our products are freshly sourced and have a shelf life of 6-12 months when stored properly.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-amber-900 mb-2">Can I return products if not satisfied?</h4>
                  <p className="text-amber-700 text-sm">Yes, we offer a satisfaction guarantee. Contact us within 24 hours of delivery for any issues.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;