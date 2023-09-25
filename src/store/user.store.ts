import { create } from "zustand";

interface StoreState {
  cart: {
    id: number;
    qty: number;
  }[];
  setCart: (id: number, qty: number) => void;
  updateCart: (id: number, qty: number) => void;
  clearCart: () => void;
  replaceCart: (data: { id: number; qty: number }[]) => void;
}

const cartLocalStorageKey = "cartData";

const useUserStore = create<StoreState>((set) => ({
  cart: [],
  setCart: (id, qty) => {
    set((state) => {
      const updatedCart = [...state.cart];
      const index = updatedCart.findIndex((item) => item.id === id);

      if (index !== -1) {
        const updatedCart = state.cart.filter((item) => item.id !== id);
        return { cart: updatedCart };
      }

      updatedCart.push({ id, qty });

      saveCartToLocalStorage(updatedCart);

      return { cart: updatedCart };
    });
  },
  updateCart: (id, qty) => {
    set((state) => {
      const updatedCart = [...state.cart];
      const index = updatedCart.findIndex((item) => item.id === id);

      if (index !== -1) {
        updatedCart[index].qty = qty;

        saveCartToLocalStorage(updatedCart);
      }

      return { cart: updatedCart };
    });
  },
  clearCart: () => {
    set(() => {
      saveCartToLocalStorage([]);
      return { cart: [] };
    });
  },
  replaceCart: (data) => {
    set(() => {
      return { cart: data };
    });
  },
}));

function saveCartToLocalStorage(cart: { id: number; qty: number }[]) {
  if (typeof window !== "undefined") {
    localStorage.setItem(cartLocalStorageKey, JSON.stringify(cart));
  }
}
export default useUserStore;
