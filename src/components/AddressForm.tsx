import React from 'react';
import { MapPin } from 'lucide-react';
import { Address } from '../types';

interface AddressFormProps {
  address: Address;
  onChange: (address: Address) => void;
}

export default function AddressForm({ address, onChange }: AddressFormProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <MapPin className="h-5 w-5 text-maroon-600" />
        <h3 className="text-lg font-semibold text-gray-900">Delivery Address</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Street Address</label>
          <input
            type="text"
            value={address.street}
            onChange={(e) => onChange({ ...address, street: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-maroon-500 focus:ring-maroon-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">City</label>
          <input
            type="text"
            value={address.city}
            onChange={(e) => onChange({ ...address, city: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-maroon-500 focus:ring-maroon-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">State</label>
          <input
            type="text"
            value={address.state}
            onChange={(e) => onChange({ ...address, state: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-maroon-500 focus:ring-maroon-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">PIN Code</label>
          <input
            type="text"
            value={address.pincode}
            onChange={(e) => onChange({ ...address, pincode: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-maroon-500 focus:ring-maroon-500"
          />
        </div>
      </div>
    </div>
  );
}