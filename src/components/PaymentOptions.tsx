import React from 'react';
import { CreditCard, Smartphone, Building2 } from 'lucide-react';

interface PaymentOptionsProps {
  selectedMethod: string;
  onSelect: (method: string) => void;
}

export default function PaymentOptions({ selectedMethod, onSelect }: PaymentOptionsProps) {
  const paymentMethods = [
    {
      id: 'upi',
      name: 'UPI',
      icon: Smartphone,
      description: 'Pay using UPI apps like Google Pay, PhonePe, or Paytm',
    },
    {
      id: 'card',
      name: 'Card',
      icon: CreditCard,
      description: 'Credit or Debit card',
    },
    {
      id: 'netbanking',
      name: 'Net Banking',
      icon: Building2,
      description: 'Internet Banking',
    },
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-900">Payment Method</h3>
      <div className="space-y-2">
        {paymentMethods.map((method) => (
          <label
            key={method.id}
            className={`flex items-center p-4 border rounded-lg cursor-pointer transition-colors ${
              selectedMethod === method.id
                ? 'border-maroon-600 bg-maroon-50'
                : 'border-gray-200 hover:border-maroon-200'
            }`}
          >
            <input
              type="radio"
              name="payment"
              value={method.id}
              checked={selectedMethod === method.id}
              onChange={() => onSelect(method.id)}
              className="hidden"
            />
            <method.icon className="h-6 w-6 text-maroon-600 mr-4" />
            <div>
              <div className="font-medium text-gray-900">{method.name}</div>
              <div className="text-sm text-gray-500">{method.description}</div>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
}