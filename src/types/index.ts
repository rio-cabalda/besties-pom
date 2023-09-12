export type MenuItemType = {
    id: number
    title: string;
    icon: React.ReactNode;
    link: string;
 }

 export type HeadlineItemType = {
    id: number;
    title: string;
    description: string;
    image: string;
 }

export type ProductItemType = {
   _id: string;
   category: string;
   description: string;
   image: string;
   name: string;
   price: number;
   rating: number;
   stock: number;
}
export enum SortOption {
   PriceLowest = 'price-lowest',
   PriceHighest = 'price-highest',
   NameA_Z = 'name-a',
   NameZ_A = 'name-z',
 }

 export type ProductStoreType = {
   products: ProductItemType[]; 
   showedProducts: ProductItemType[];
   category: string[];
   gridView: boolean;
   changeView: () => void;
   setProducts: (products: ProductItemType[]) => void; 
   sortProducts: (sortValue:string) =>void;
   sortByCategory: (category:string) =>void;
}