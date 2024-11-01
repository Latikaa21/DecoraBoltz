import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingCart, User, Menu, Heart, X } from 'lucide-react';
import { useStore } from '../store/useStore';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  const {
    cart,
    wishlist,
    user,
    isAuthenticated,
    searchQuery,
    setSearchQuery,
    logout
  } = useStore();

  const cartItemsCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const wishlistCount = wishlist.length;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsSearchOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-maroon-900/95 backdrop-blur-sm shadow-lg' : 'bg-maroon-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-white tracking-wider">DECORA</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link
              to="/new-arrivals"
              className="text-white hover:text-maroon-200 transition-colors"
            >
              New Arrivals
            </Link>
            <Link
              to="/categories"
              className="text-white hover:text-maroon-200 transition-colors"
            >
              Categories
            </Link>
            <Link
              to="/sale"
              className="text-white hover:text-maroon-200 transition-colors"
            >
              Sale
            </Link>
          </div>

          {/* Desktop Search and Actions */}
          <div className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-white hover:text-maroon-200"
            >
              <Search className="h-6 w-6" />
            </button>
            
            <Link to="/wishlist" className="relative text-white hover:text-maroon-200">
              <Heart className="h-6 w-6" />
              {wishlistCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-maroon-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {wishlistCount}
                </span>
              )}
            </Link>

            <Link to="/cart" className="relative text-white hover:text-maroon-200">
              <ShoppingCart className="h-6 w-6" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-maroon-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cartItemsCount}
                </span>
              )}
            </Link>

            {isAuthenticated ? (
              <div className="relative group">
                <button className="text-white hover:text-maroon-200">
                  <User className="h-6 w-6" />
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 hidden group-hover:block">
                  <div className="px-4 py-2 border-b border-gray-100">
                    <p className="text-sm font-medium text-gray-900">{user?.name}</p>
                    <p className="text-sm text-gray-500">{user?.email}</p>
                  </div>
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-maroon-50"
                  >
                    Profile
                  </Link>
                  <Link
                    to="/orders"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-maroon-50"
                  >
                    Orders
                  </Link>
                  <button
                    onClick={logout}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-maroon-50"
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <Link
                to="/login"
                className="text-white hover:text-maroon-200"
              >
                <User className="h-6 w-6" />
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="py-4 border-t border-maroon-800">
            <div className="relative max-w-3xl mx-auto">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for products..."
                className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-maroon-300 border border-maroon-700 focus:outline-none focus:ring-2 focus:ring-maroon-500"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-maroon-300" />
            </div>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-maroon-900 border-t border-maroon-800">
          <div className="px-4 py-6 space-y-4">
            <Link
              to="/new-arrivals"
              className="block text-white hover:text-maroon-200"
            >
              New Arrivals
            </Link>
            <Link
              to="/categories"
              className="block text-white hover:text-maroon-200"
            >
              Categories
            </Link>
            <Link
              to="/sale"
              className="block text-white hover:text-maroon-200"
            >
              Sale
            </Link>
            <div className="pt-4 border-t border-maroon-800">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for products..."
                className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-maroon-300 border border-maroon-700 focus:outline-none focus:ring-2 focus:ring-maroon-500"
              />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}