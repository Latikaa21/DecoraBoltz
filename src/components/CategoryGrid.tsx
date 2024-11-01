import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  {
    name: 'Wall Art',
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e35a0?auto=format&fit=crop&q=80&w=1000',
    description: 'Transform your walls with stunning artwork',
  },
  {
    name: 'Sculptures',
    image: 'https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&q=80&w=1000',
    description: 'Add dimension with elegant sculptures',
  },
  {
    name: 'Vases',
    image: 'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?auto=format&fit=crop&q=80&w=1000',
    description: 'Beautiful vases for every space',
  },
  {
    name: 'Lighting',
    image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&q=80&w=1000',
    description: 'Illuminate your home with style',
  },
  {
    name: 'Mirrors',
    image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&q=80&w=1000',
    description: 'Reflect beauty in every room',
  },
  {
    name: 'Textiles',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=1000',
    description: 'Soft furnishings for comfort and style',
  },
];

export default function CategoryGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {categories.map((category) => (
        <Link
          key={category.name}
          to={`/category/${category.name.toLowerCase().replace(' ', '-')}`}
          className="group relative h-64 overflow-hidden rounded-lg"
        >
          <img
            src={category.image}
            alt={category.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 flex flex-col justify-end p-6">
            <h3 className="text-2xl font-bold text-white mb-2">{category.name}</h3>
            <p className="text-white/80">{category.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}