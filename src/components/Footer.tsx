import React from 'react';
import { Link } from 'react-router-dom';
import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
  CreditCard,
  Truck,
  Shield,
} from 'lucide-react';

export default function Footer() {
  return (
    <footer boltAction type="file" filePath="src/components/Footer.tsx">import React from 'react';
import { Link } from 'react-router-dom';
import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
  CreditCard,
  Truck,
  Shield,
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-maroon-900 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-maroon-800 p-8">
          <div className="flex items-center space-x-4">
            <Truck className="h-8 w-8 text-maroon-300" />
            <div>
              <h4 className="font-semibold">Free Shipping</h4>
              <p className="text-maroon-300 text-sm">On orders over ₹999</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Shield className="h-8 w-8 text-maroon-300" />
            <div>
              <h4 className="font-semibold">Secure Payments</h4>
              <p className="text-maroon-300 text-sm">Protected by SSL</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <CreditCard className="h-8 w-8 text-maroon-300" />
            <div>
              <h4 className="font-semibold">Easy Returns</h4>
              <p className="text-maroon-300 text-sm">30-day return policy</p>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 p-8">
          <div>
            <h3 className="text-2xl font-bold mb-6">DECORA</h3>
            <p className="text-maroon-300 mb-6">
              Transform your space with our curated collection of premium home decor and art pieces.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-maroon-800 p-2 rounded-full hover:bg-maroon-700 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-maroon-800 p-2 rounded-full hover:bg-maroon-700 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-maroon-800 p-2 rounded-full hover:bg-maroon-700 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <Link to="/about" className="text-maroon-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-maroon-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-maroon-300 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-maroon-300 hover:text-white transition-colors">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Customer Service</h4>
            <ul className="space-y-4">
              <li>
                <Link to="/shipping" className="text-maroon-300 hover:text-white transition-colors">
                  Shipping Information
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-maroon-300 hover:text-white transition-colors">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-maroon-300 hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-maroon-300 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-maroon-300" />
                <span className="text-maroon-300">
                  123 Decor Street, Art City, 110001
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-maroon-300" />
                <span className="text-maroon-300">+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-maroon-300" />
                <span className="text-maroon-300">support@decora.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-maroon-800 p-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-maroon-300 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} DECORA. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              <img
                src="https://raw.githubusercontent.com/tailwindui/tailwindui-marketplace/main/src/img/payment-methods.png"
                alt="Payment Methods"
                className="h-8"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
      }