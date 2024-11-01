import React from 'react';
import { ShoppingBag, Truck, Headphones, Shield } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: ShoppingBag,
      title: 'Wide Selection',
      description: 'Browse through thousands of products across multiple categories.',
    },
    {
      icon: Truck,
      title: 'Fast Delivery',
      description: 'Get your orders delivered quickly and efficiently to your doorstep.',
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Our customer service team is always ready to help you.',
    },
    {
      icon: Shield,
      title: 'Secure Shopping',
      description: 'Shop with confidence knowing your data is protected.',
    },
  ];

  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About MaroonMart</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted destination for quality products and exceptional shopping experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <feature.icon className="h-12 w-12 text-maroon-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 lg:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
              <p className="text-gray-600 mb-6">
                Founded in 2024, MaroonMart has grown from a small online store to
                a leading e-commerce platform. Our mission is to provide customers
                with high-quality products at competitive prices while delivering
                exceptional service.
              </p>
              <p className="text-gray-600 mb-6">
                We work directly with manufacturers and trusted suppliers to ensure
                the authenticity and quality of every product we sell. Our team is
                dedicated to making your shopping experience seamless and enjoyable.
              </p>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-maroon-600">1M+</div>
                  <div className="text-sm text-gray-600">Happy Customers</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-maroon-600">50K+</div>
                  <div className="text-sm text-gray-600">Products</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-maroon-600">100+</div>
                  <div className="text-sm text-gray-600">Countries</div>
                </div>
              </div>
            </div>
            <div
              className="h-96 lg:h-auto bg-cover bg-center"
              style={{
                backgroundImage:
                  'url(https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&q=80&w=1000)',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}