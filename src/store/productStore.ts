import { randomFeatured } from '../hooks';
import { SortOption, ProductStoreType} from '../types';
import { create } from 'zustand';



export const useProductStore = create<ProductStoreType>((set) => ({
  products: [],
  showedProducts: [],
  category: [],
  featuredProducts: [],
  navHeight: 0,
  setNavHeight: (height)=>{( set({navHeight:height}))},
  gridView: true,
  changeView: () => {
    set((state) => ({
      gridView: !state.gridView, // Toggle the value of gridView
    }));
  },
  setProducts: (products) => {
     
    // Check if products has a value and initialize filteredProducts accordingly
    const showedProducts = products ? [...products] : [];
    if(showedProducts.length > 0){
    const uniqueCategoriesSet = new Set(showedProducts.map((product) => product.category.toLocaleLowerCase()));
    const uniqueCategoriesArray = ['all',...uniqueCategoriesSet];
    set({ products, showedProducts,category:uniqueCategoriesArray, featuredProducts:randomFeatured(products, 4) });
    }
    
  },
  sortProducts: (sortValue)=>{
    switch (sortValue) {
      case SortOption.PriceLowest:
        set((state) => ({
          showedProducts: [...state.showedProducts].sort(
            (a, b) => a.price - b.price
          ),
        }));
        return;
      case SortOption.PriceHighest:
        set((state) => ({
          showedProducts: [...state.showedProducts].sort(
            (a, b) => b.price - a.price
          ),
        }));
        return;
      case SortOption.NameA_Z:
        set((state) => ({
          showedProducts: [...state.showedProducts].sort((a, b) =>
            a.name.localeCompare(b.name)
          ),
        }));
        return;
      case SortOption.NameZ_A:
        set((state) => ({
          showedProducts: [...state.showedProducts].sort((a, b) =>
            b.name.localeCompare(a.name) // Sort in reverse order for Z to A
          ),
        }));
        return; 
    }
  },
  sortByCategory: (categoryValue)=>{
    if(categoryValue.toLocaleLowerCase() ==='all'){
      set((state)=>({showedProducts: [...state.products]}))
      
    }else{
      set((state) => ({
        showedProducts: state.products.filter((product) =>
          product.category.toLowerCase() === categoryValue.toLowerCase()
        ),
      }));
    }
  }
}));
