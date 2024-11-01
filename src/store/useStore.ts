import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartItem, User, Product } from '../types';

interface Store {
  cart: CartItem[];
  wishlist: Product[];
  user: User | null;
  isAuthenticated: boolean;
  recentlyViewed: Product[];
  searchQuery: string;
  selectedCategory: string | null;
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (id: string) => void;
  addToRecentlyViewed: (product: Product) => void;
  login: (user: User) => void;
  logout: () => void;
  updateUser: (user: Partial<User>) => void;
  setSearchQuery: (query: string) => void;
  setSelectedCategory: (category: string | null) => void;
}

export const useStore = create<Store>()(
  persist(
    (set) => ({
      cart: [],
      wishlist: [],
      user: null,
      isAuthenticated: false,
      recentlyViewed: [],
      searchQuery: '',
      selectedCategory: null,

      addToCart: (item) =>
        set((state) => {
          const existingItem = state.cart.find((i) => i.id === item.id);
          if (existingItem) {
            return {
              cart: state.cart.map((i) =>
                i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
              ),
            };
          }
          return { cart: [...state.cart, { ...item, quantity: 1 }] };
        }),

      removeFromCart: (id) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== id),
        })),

      updateQuantity: (id, quantity) =>
        set((state) => ({
          cart: state.cart.map((item) =>
            item.id === id ? { ...item, quantity } : item
          ),
        })),

      addToWishlist: (product) =>
        set((state) => ({
          wishlist: [...state.wishlist, product],
        })),

      removeFromWishlist: (id) =>
        set((state) => ({
          wishlist: state.wishlist.filter((item) => item.id !== id),
        })),

      addToRecentlyViewed: (product) =>
        set((state) => ({
          recentlyViewed: [
            product,
            ...state.recentlyViewed.filter((p) => p.id !== product.id),
          ].slice(0, 10),
        })),

      login: (user) => set({ user, isAuthenticated: true }),
      logout: () => set({ user: null, isAuthenticated: false, cart: [], wishlist: [] }),
      updateUser: (userData) =>
        set((state) => ({
          user: state.user ? { ...state.user, ...userData } : null,
        })),

      setSearchQuery: (query) => set({ searchQuery: query }),
      setSelectedCategory: (category) => set({ selectedCategory: category }),
    }),
    {
      name: 'decora-store',
    }
  )
);