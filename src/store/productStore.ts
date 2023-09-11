import {TProductItem} from '../types';
import create from 'zustand';

type DataStoreState = {
  products: TProductItem[]; 
  showedProducts: TProductItem[];
  setProducts: (products: TProductItem[]) => void; 
  filterByA_Z: () => void; // Function to filter products from A to Z
  filterByZ_A: () => void; // New function to filter products from Z to A
  }

  export const useProductStore = create<DataStoreState>((set) => ({
    products: [],
    showedProducts: [],
    setProducts: (products) => {
      // Check if products has a value and initialize filteredProducts accordingly
      const showedProducts = products ? [...products] : [];
      set({ products, showedProducts });
    },
    filterByA_Z: () => {
      set((state) => ({
        showedProducts: [...state.products].sort((a, b) =>
          a.name.localeCompare(b.name)
        ),
      }));
    },
    filterByZ_A: () => {
      set((state) => ({
        showedProducts: [...state.products].sort((a, b) =>
          b.name.localeCompare(a.name) // Sort in reverse order for Z to A
        ),
      }));
    },
  }));
