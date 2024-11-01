import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    id: 'wall-art',
    name: 'Wall Art',
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e35a0?auto=format&fit=crop&q=80&w=1000',
    description: 'Transform your walls with stunning artwork',
    itemCount: 240,
  },
  {
    id: 'sculptures',
    name: 'Sculptures',
    image: 'https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&q=80&w=1000',
    description: 'Add dimension with elegant sculptures',
    itemCount: 120,
  },
  {
    id: 'lighting',
    name: 'Lighting',
    image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&q=80&w=1000',
    description: 'Illuminate your home with style',
    itemCount: 180,
  },
];

export default function FeaturedCategories() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Featured Categories</h2>
            <p className="mt-2 text-gray-600">Explore our most popular collections</p>
          </div>
          <Link
            to="/categories"
            className="hidden md:flex items-center text-maroon-600 hover:text-maroon-700 font-semibold"
          >
            View All Categories
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/category/${category.id}`}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-w-4 aspect-h-3">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{category.name}</h3>
                  <p className="text-white/90 mb-4">{category.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-white/80">{category.itemCount} items</span>
                    <span className="text-white flex items-center group-hover:translate-x-2 transition-transform">
                      Shop Now <ArrowRight className="ml-2 h-5 w-5" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link
            to="/categories"
            className="inline-flex items-center text-maroon-600 hover:text-maroon-700 font-semibold"
          >
            View All Categories
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}