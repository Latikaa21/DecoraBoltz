import React, { useState } from 'react';
import { Send } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 3000);
    }, 1000);
  };

  return (
    <section className="bg-maroon-900 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-maroon-200 mb-8">
            Stay updated with our latest collections, exclusive offers, and interior design tips.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full px-6 py-3 rounded-lg bg-white/10 text-white placeholder-maroon-300 border border-maroon-700 focus:outline-none focus:ring-2 focus:ring-maroon-500"
                disabled={status === 'loading' || status === 'success'}
              />
            </div>
            <button
              type="submit"
              disabled={status === 'loading' || status === 'success'}
              className={`px-8 py-3 rounded-lg font-semibold flex items-center justify-center transition-all duration-300
                ${status === 'idle' ? 'bg-white text-maroon-900 hover:bg-maroon-100' : ''}
                ${status === 'loading' ? 'bg-maroon-700 text-white cursor-wait' : ''}
                ${status === 'success' ? 'bg-green-500 text-white' : ''}
                ${status === 'error' ? 'bg-red-500 text-white' : ''}
              `}
            >
              {status === 'loading' && (
                <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
              )}
              {status === 'success' && 'Subscribed!'}
              {status === 'error' && 'Try Again'}
              {status === 'idle' && (
                <>
                  Subscribe <Send className="ml-2 h-5 w-5" />
                </>
              )}
            </button>
          </form>

          <p className="text-maroon-300 text-sm mt-4">
            By subscribing, you agree to our Privacy Policy and consent to receive updates.
          </p>
        </div>
      </div>
    </section>
  );
}