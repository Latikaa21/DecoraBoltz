import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Star, ShoppingCart, Heart, Share2 } from 'lucide-react';
import { useStore } from '../store/useStore';

// In a real app, this would come from an API
const product = {
  id: '1',
  name: 'Premium Wireless Headphones',
  description: 'High-quality wireless headphones with noise cancellation technology. Experience crystal-clear sound and ultimate comfort with these premium headphones. Features include: Active Noise Cancellation, Bluetooth 5.0, 30-hour battery life, and premium leather cushions.',
  price: 199.99,
  image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=1000',
  category: 'Electronics',
  rating: 4.5,
  reviews: 128,
  specs: [
    { name: 'Battery Life', value: '30 hours' },
    { name: 'Bluetooth', value: '5.0' },
    { name: 'Noise Cancellation', value: 'Active' },
    { name: 'Weight', value: '250g' },
  ],
};

export default function ProductDetails() {
  const { id } = useParams();
  const [showPrice, setShowPrice] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const { addToCart } = useStore();

  // Additional product images (in a real app, these would come from the API)
  const images = [
    product.image,
    'https://images.unsplash.com/photo-1505740106531-4243f3831c78?auto=format&fit=crop&q=80&w=1000',
    'https://images.unsplash.com/photo-1505740106531-4243f3831c79?auto=format&fit=crop&q=80&w=1000',
  ];

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
          {/* Product Images */}
          <div className="mb-8 lg:mb-0">
            <div className="relative">
              <img
                src={images[selectedImage]}
                alt={product.name}
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
            <div className="mt-4 grid grid-cols-3 gap-4">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative rounded-lg overflow-hidden ${
                    selectedImage === index ? 'ring-2 ring-maroon-500' : ''
                  }`}
                >
                  <img
                    src={image}
                    alt={`Product ${index + 1}`}
                    className="w-full h-24 object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:pl-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
            
            <div className="flex items-center mb-4">
              <div className="flex items-center">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    className={`h-5 w-5 ${
                      index < product.rating
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="ml-2 text-sm text-gray-600">
                ({product.reviews} reviews)
              </span>
            </div>

            <div className="mb-6">
              {showPrice ? (
                <div className="text-3xl font-bold text-maroon-600">
                  ${product.price.toFixed(2)}
                </div>
              ) : (
                <button
                  onClick={() => setShowPrice(true)}
                  className="text-lg text-maroon-600 hover:text-maroon-700 font-semibold"
                >
                  Show Price
                </button>
              )}
            </div>

            <div className="prose prose-sm text-gray-700 mb-6">
              <p>{product.description}</p>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Specifications</h3>
              <dl className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2">
                {product.specs.map((spec) => (
                  <div key={spec.name} className="border-t border-gray-200 pt-4">
                    <dt className="font-medium text-gray-900">{spec.name}</dt>
                    <dd className="mt-1 text-sm text-gray-500">{spec.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="flex space-x-4">
              <button
                onClick={() => addToCart({ ...product, quantity: 1 })}
                className="flex-1 bg-maroon-600 hover:bg-maroon-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center"
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                Add to Cart
              </button>
              <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50">
                <Heart className="h-5 w-5 text-gray-600" />
              </button>
              <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50">
                <Share2 className="h-5 w-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}