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
  searchValue: '',
  setSearch: (value) =>{
    try {
      set((state)=>({
        searchValue: value.toLocaleLowerCase(),
        showedProducts: state.products.filter((item)=> item.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())),
      }))
      
    } catch (error) {
      console.log(error);
      
    }
  },
  setProducts: (products) => {
    // Check if products has a value and initialize filteredProducts accordingly
    try {
      const newShowedProducts = products ? [...products] : [];
      if(newShowedProducts.length > 0){
      const uniqueCategoriesSet = new Set(newShowedProducts.map((product) => product.category.toLocaleLowerCase()));
      const uniqueCategoriesArray = ['all',...uniqueCategoriesSet];
      set((state)=>({ products, showedProducts: state.searchValue? state.showedProducts: newShowedProducts, category:uniqueCategoriesArray, featuredProducts:randomFeatured(products, 4) }));
      }
    } catch (error) {
      console.log(error)
    }
    
    
  },
  sortProducts: (sortValue)=>{
    try {
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
    } catch (error) {
      console.log(error)
    }
    
  },
  sortByCategory: (categoryValue)=>{
    try {
      if(categoryValue.toLocaleLowerCase() ==='all'){
        set((state)=>({showedProducts: [...state.products], searchValue:''}))
        
      }else{
        set((state) => ({
          showedProducts: state.products.filter((product) =>
            product.category.toLowerCase() === categoryValue.toLowerCase()
          ),
        }));
      }
    } catch (error) {
      console.log(error)
    }
  }
}));
