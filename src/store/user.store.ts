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

const cartLocalStorageKey = "cartData"; 

const useUserStore = create<StoreState>((set) => ({
  cart: loadCartFromLocalStorage(),
  setCart: (id, qty) => {
    set((state) => {
      const updatedCart = [...state.cart];
      const index = updatedCart.findIndex((item) => item.id === id);

      if (index !== -1) {
        updatedCart.splice(index, 1); 
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
}));

function loadCartFromLocalStorage(): { id: number; qty: number }[] {
  const cartData = localStorage.getItem(cartLocalStorageKey);
  return cartData ? JSON.parse(cartData) : [];
}

function saveCartToLocalStorage(cart: { id: number; qty: number }[]) {
  localStorage.setItem(cartLocalStorageKey, JSON.stringify(cart));
}

export default useUserStore;
