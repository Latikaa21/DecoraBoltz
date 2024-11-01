import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../store/useStore';
import { formatPrice } from '../utils/currency';
import AddressForm from '../components/AddressForm';
import PaymentOptions from '../components/PaymentOptions';
import { Address } from '../types';

export default function Checkout() {
  const navigate = useNavigate();
  const { cart, user } = useStore();
  const [paymentMethod, setPaymentMethod] = useState('upi');
  const [address, setAddress] = useState<Address>(
    user?.address || {
      street: '',
      city: '',
      state: '',
      pincode: '',
      country: 'India',
    }
  );

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 99;
  const tax = subtotal * 0.18; // 18% GST
  const total = subtotal + shipping + tax;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle payment processing
    navigate('/order-confirmation');
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-8">
            <AddressForm address={address} onChange={setAddress} />
            <PaymentOptions selectedMethod={paymentMethod} onSelect={setPaymentMethod} />
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md h-fit">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Order Summary</h3>
            <div className="space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between">
                  <div>
                    <span className="font-medium">{item.name}</span>
                    <span className="text-gray-500 ml-2">x{item.quantity}</span>
                  </div>
                  <span>{formatPrice(item.price * item.quantity)}</span>
                </div>
              ))}

              <div className="border-t pt-4 space-y-2">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span>{formatPrice(shipping)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>GST (18%)</span>
                  <span>{formatPrice(tax)}</span>
                </div>
                <div className="flex justify-between font-semibold text-lg pt-2 border-t">
                  <span>Total</span>
                  <span className="text-maroon-600">{formatPrice(total)}</span>
                </div>
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-maroon-600 hover:bg-maroon-700 text-white py-3 rounded-lg font-semibold mt-6"
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}