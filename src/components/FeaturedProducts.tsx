import { useState,useEffect } from 'react';
import { Link } from "react-router-dom";
import { Product, SectionTitle } from ".";
import { useAllProducts } from "../api/fetchProducts";
import { ProductItemType } from "../types";
import {useFeaturedProducts} from '../hooks';

const FeaturedProducts = () => {
  const [featuredProducts,setFeaturedProducts] = useState<ProductItemType[] | []>([]);
  const { allProducts=[], isLoading, isError } = useAllProducts();
 const featured = useFeaturedProducts(allProducts, 4);

  useEffect(()=>{
  if(allProducts){
   setFeaturedProducts(featured);
  }
  // eslint-disable-next-line
},[isLoading])

  if(isLoading){
    return (
      <section className='w-full pt-16 md:pt-14 transform bg-[rgb(241,245,248)] -skew-y-3 -mt-8 md:-skew-y-2 lg: z-10 overflow-hidden'>
          <article className='skew-y-3 md:skew-y-2 my-6 pb-10 flex flex-col justify-center items-center'>
            <SectionTitle title={'Explore a Pawsome Collection of Pet Products'}/>
            <div className="mt-20 mb-48 w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
          </article>
        </section>
        )}

  if(isError){
    return (
      <section className='w-full pt-16 md:pt-14 transform bg-[rgb(241,245,248)] -skew-y-3 -mt-8 md:-skew-y-2 lg: z-10 overflow-hidden'>
        <article className='skew-y-3 md:skew-y-2 my-6 pb-10 flex flex-col justify-center items-center'>
          <SectionTitle title={'Explore a Pawsome Collection of Pet Products'}/>
              <div className="mb-48 flex-1 w-full text-red-400  p-4 flex flex-col justify-center items-center">
                  <h2 className="font-semibold text-lg mb-2">Something Went Wrong</h2>
                  <p className="text-sm text-center">Sorry, we encountered an error while loading the featured products.</p>
              </div>
            
            </article>
        </section>
        
    )}      
    
  return (
    <section className='w-full pt-16 md:pt-14 transform bg-[rgb(241,245,248)] -skew-y-3 -mt-8 md:-skew-y-2 lg: z-10 overflow-hidden'>
        <article className='skew-y-3 md:skew-y-2 pb-10 flex flex-col justify-center items-center'>
          <SectionTitle title={'Explore a Pawsome Collection of Pet Products'}/>
          <div className="w-full grid sm:grid-cols-2 md:grid-cols-4 gap-4 px-4 md:p-4 overflow-hidden">
            {featuredProducts.map((item:ProductItemType)=>(<Product key={item._id} item={item}/>))}
          </div>

          <Link to='products' className='rounded-sm py-2 px-8 mt-10 bg-sky-500 text-white hover:bg-sky-600 hover:text-slate-100 duration-300'>All Products</Link>
        </article>
      </section>
  )
}

export default FeaturedProducts