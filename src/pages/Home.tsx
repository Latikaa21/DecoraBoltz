import React from 'react';
import Carousel from '../components/Carousel';
import FeaturedCategories from '../components/FeaturedCategories';
import ProductCard from '../components/ProductCard';
import Newsletter from '../components/Newsletter';
import { ArrowRight, Package, Shield, Truck, HeadphonesMic } from 'lucide-react';

const features = [
  {
    icon: Truck,
    title: 'Free Shipping',
    description: 'On orders over ₹999',
  },
  {
    icon: Shield,
    title: 'Secure Payments',
    description: '100% secure transactions',
  },
  {
    icon: Package,
    title: 'Easy Returns',
    description: '30-day return policy',
  },
  {
    icon: HeadphonesMic,
    title: '24/7 Support',
    description: 'Dedicated customer service',
  },
];

const topSellers = [
  {
    id: '1',
    name: 'Abstract Canvas Art',
    description: 'Modern abstract art piece perfect for contemporary spaces',
    price: 12999,
    originalPrice: 15999,
    discount: 20,
    image: 'https://images.unsplash.com/photo-1549887534-1541e9326642?auto=format&fit=crop&q=80&w=1000',
    category: 'Wall Art',
    rating: 4.8,
    reviews: 128,
    inStock: true,
    isNew: true,
    specifications: {},
    relatedProducts: [],
  },
  // More products can be added here
];

export default function Home() {
  return (
    <div className="bg-gray-50 pt-16">
      <Carousel />
      
      {/* Features */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex items-center p-6 bg-gray-50 rounded-xl hover:shadow-md transition-shadow"
              >
                <feature.icon className="h-10 w-10 text-maroon-600 mr-4" />
                <div>
                  <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FeaturedCategories />

      {/* Top Sellers */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Top Sellers</h2>
              <p className="mt-2 text-gray-600">Our most popular products</p>
            </div>
            <a
              href="/products"
              className="hidden md:flex items-center text-maroon-600 hover:text-maroon-700 font-semibold"
            >
              View All Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {topSellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
    </div>
  );
}