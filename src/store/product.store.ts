import { create } from "zustand";
import products from '@/constants/products.json';
export interface IProduct {
  id: number;
  name: string;
  price: number;
  oldPrice: number;
  "supplier type": string;
  type: string;
  rating: string;
  sold: number;
  description: string;
  images: string[];
}

interface StoreState {
  products: IProduct[];
  filteredProducts: IProduct[];
  filterProducts: (
    type?: string,
    supplier?: string,
    maxPrice?: string,
    search?: string
  ) => void;
}

const useProductStort = create<StoreState>((set) => ({
  products: products,
  filteredProducts: [],
  filterProducts: (type, supplier, maxPrice, search) => {
    set((state) => {
      if (!type && !supplier && !search && !maxPrice) {
        return { filteredProducts: state.products };
      }
      const filteredProducts = state.products.filter((product) => {
        return (
          (!type || type?.includes(product.type)) &&
          (!supplier || supplier?.includes(product["supplier type"])) &&
          (!maxPrice || product.price < Number(maxPrice)) &&
          (!search ||
            product.name.includes(search) ||
            product.description.includes(search))
        );
      });

      return { filteredProducts };
    });
  },
}));

export default useProductStort;
