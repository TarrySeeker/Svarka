import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface CartItem {
    id: string;
    name: string;
    price: number | "Custom Quote";
    type: "service" | "estimate";
    details?: string;
}

interface CartState {
    items: CartItem[];
    addItem: (item: CartItem) => void;
    removeItem: (id: string) => void;
    clearCart: () => void;
}

export const useCart = create<CartState>()(
    persist(
        (set) => ({
            items: [],
            addItem: (item) => set((state) => ({ items: [...state.items, item] })),
            removeItem: (id) => set((state) => ({ items: state.items.filter((i) => i.id !== id) })),
            clearCart: () => set({ items: [] }),
        }),
        {
            name: 'welding-cart-storage',
        }
    )
);
