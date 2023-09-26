export type MenuItemType = {
    id: number
    title: string;
    icon: React.ReactNode;
    link: string;
 }
 
 export type navLinkType ={
   id:number;
   text: string;
   url: string;
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
   featuredProducts: ProductItemType[];
   category: string[];
   navHeight: number;
   searchValue: string;
   setSearch: (value:string) => void;
   setNavHeight: (height: number) => void;
   setProducts: (products: ProductItemType[]) => void; 
   sortProducts: (sortValue:string) =>void;
   sortByCategory: (category:string) =>void;
}

export type UserType = {
   _id: string,
   email: string,
   firstname: string,
   lastname: string,
   cart: [],
}

export enum StorageEnum {
   StorageString = 'bestiespom-token',
 }