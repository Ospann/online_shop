import { create } from "zustand";

interface StoreState {
  cart: {
    id: number;
    qty: number;
  }[];
  setCart: (id: number, qty: number) => void;
  updateCart: (id: number, qty: number) => void;
  clearCart: () => void;
}

const useUserStore = create<StoreState>((set) => ({
  cart: [],
  setCart: (id, qty) => {
    set((state) => {
      const updatedCart = [...state.cart];
      const index = updatedCart.findIndex((item) => item.id === id);

      if (index !== -1) {
        const updatedCart = state.cart.filter((item) => item.id !== id);
        return { cart: updatedCart };
      } else {
        updatedCart.push({ id, qty });
      }

      return { cart: updatedCart };
    });
  },
  updateCart: (id, qty) => {
    set((state) => {
      const updatedCart = [...state.cart];
      const index = updatedCart.findIndex((item) => item.id === id);
      console.log(index);
      if (index !== -1) {
        updatedCart[index].qty = qty;
      }
      console.log(updatedCart);
      return { cart: updatedCart };
    });
  },
  clearCart: () => {
    set(() => {
      return { cart: [] };
    });
  },
}));

export default useUserStore;
