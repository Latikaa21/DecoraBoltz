import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingCart, Heart, Eye } from 'lucide-react';
import { Product } from '../types';
import { useStore } from '../store/useStore';
import { formatPrice } from '../utils/currency';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart, addToWishlist, wishlist } = useStore();
  const isInWishlist = wishlist.some((item) => item.id === product.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    if (product.inStock) {
      addToCart({ ...product, quantity: 1 });
    }
  };

  const handleAddToWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    addToWishlist(product);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
    >
      <div className="relative aspect-product">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Overlay with actions */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          {product.inStock && (
            <button
              onClick={handleAddToCart}
              className="p-3 bg-white rounded-full transform -translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-maroon-600 hover:text-white"
              title="Add to Cart"
            >
              <ShoppingCart className="h-5 w-5" />
            </button>
          )}
          <button
            onClick={handleAddToWishlist}
            className={`p-3 bg-white rounded-full transform -translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75 
              ${isInWishlist ? 'text-maroon-600' : 'hover:bg-maroon-600 hover:text-white'}`}
            title="Add to Wishlist"
          >
            <Heart className={`h-5 w-5 ${isInWishlist ? 'fill-current' : ''}`} />
          </button>
          <Link
            to={`/product/${product.id}`}
            className="p-3 bg-white rounded-full transform -translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-150 hover:bg-maroon-600 hover:text-white"
            title="Quick View"
          >
            <Eye className="h-5 w-5" />
          </Link>
        </div>

        {/* Status badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {product.isNew && (
            <span className="bg-maroon-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              New
            </span>
          )}
          {!product.inStock && (
            <span className="bg-gray-900 text-white px-3 py-1 rounded-full text-sm font-medium">
              Out of Stock
            </span>
          )}
          {product.discount > 0 && (
            <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              -{product.discount}%
            </span>
          )}
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <div className="flex">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                key={index}
                className={`h-4 w-4 ${
                  index < product.rating
                    ? 'text-yellow-400 fill-current'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600">({product.reviews})</span>
        </div>

        <h3 className="font-semibold text-gray-900 group-hover:text-maroon-600 transition-colors mb-2">
          {product.name}
        </h3>

        <div className="flex items-center justify-between">
          <div className="space-x-2">
            <span className="text-lg font-bold text-maroon-600">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && product.discount > 0 && (
              <span className="text-sm text-gray-500 line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>
          <span className="text-sm text-gray-600">{product.category}</span>
        </div>
      </div>
    </Link>
  );
}