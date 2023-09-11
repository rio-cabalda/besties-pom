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

export type TProductItem = {
   _id: string;
   category: string;
   description: string;
   image: string;
   name: string;
   price: number;
   rating: number;
   stock: number;
}