import { create } from "zustand";

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
  products: [
    {
      id: 1,
      name: "Laptop Lenovo V15",
      price: 900,
      oldPrice: 1914,
      "supplier type": "Verfied Suppliers",
      type: "Ready to Ship",
      rating: "4.8",
      sold: 120,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      images: [
        "https://volt.kz/upload/resize_cache/iblock/1034/65//450_450_140cd750bba9870f18aada2478b24840a/product_image_45265_191275.jpg",
        "https://volt.kz/upload/resize_cache/iblock/1034/65//450_450_140cd750bba9870f18aada2478b24840a/product_image_45265_191276.jpg",
        "https://volt.kz/upload/resize_cache/iblock/1034/65//450_450_140cd750bba9870f18aada2478b24840a/product_image_45265_191277.jpg",
        "https://volt.kz/upload/resize_cache/iblock/1034/41//450_450_140cd750bba9870f18aada2478b24840a/product_image_27241_57820.jpg",
      ],
    },
    {
      id: 2,
      name: "Laptop Lenovo V15 G3",
      price: 753,
      oldPrice: 1914,
      rating: "5.0",
      "supplier type": "Trade Assurance",
      type: "Paid Samples",
      sold: 120,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      images: [
        "https://volt.kz/upload/resize_cache/iblock/1034/65//450_450_140cd750bba9870f18aada2478b24840a/product_image_45265_191275.jpg",
        "https://volt.kz/upload/resize_cache/iblock/1034/65//450_450_140cd750bba9870f18aada2478b24840a/product_image_45265_191276.jpg",
        "https://volt.kz/upload/resize_cache/iblock/1034/65//450_450_140cd750bba9870f18aada2478b24840a/product_image_45265_191277.jpg",
        "https://volt.kz/upload/resize_cache/iblock/1034/41//450_450_140cd750bba9870f18aada2478b24840a/product_image_27241_57820.jpg",
      ],
    },
  ],
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
