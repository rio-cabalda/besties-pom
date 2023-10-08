import { ProductItemType } from '../types';
import { useProductStore } from '../store/productStore';
import {Product} from '.';
import errorImage from '../assets/sad_dog.png'
import { useAllProducts } from '../api/fetchProducts';
import {useEffect} from 'react';
const ProductList = () => {
    
    const { showedProducts, setProducts} = useProductStore();
    const { allProducts, isLoading, isError } = useAllProducts();
    
    useEffect(()=>{
        if(allProducts){
            setProducts(allProducts);
        }
        // eslint-disable-next-line
    },[isLoading])


 if(isLoading){
    return (
        <section className='max-w-screen-xl mx-auto flex flex-col justify-between items-center'>
            <div className="w-16 h-16 mt-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
        </section>)}
if(isError){
    return (
        <section className='w-full flex flex-col justify-center items-center gap-10'>
            <div className="flex-1 w-full bg-red-100 text-red-600 border border-red-400 rounded p-4 flex flex-col justify-center items-center">
                <h2 className="font-semibold text-lg mb-2">Something Went Wrong</h2>
                <p className="text-sm">Sorry, we encountered an error while loading the product.</p>
            </div>
            <div className='w-60 h-60 translate-y-1/2'>
                <img className='w-full object-cover' src={errorImage} alt="Dog" />
            </div>
        </section>
    )}
if(showedProducts.length < 1){
    return (
        <section className='max-w-screen-xl mx-auto flex flex-col justify-between items-center text-slate-700 font-semibold p-5'>
            <h3> No Matching Products</h3>
        </section>)
  }

  return (
    <section className='grid grid-cols-2 text-xs p-1 gap-2 gap-y-4 mx-auto max-w-lg  md:max-w-3xl md:grid-cols-3 md:gap-5 md:p-4 lg:max-w-none lg:grid-cols-4 lg:gap-3 w-full'>
        {showedProducts.map((item:ProductItemType)=>{
            return (
                <Product key={item._id} item={item}/> 
            )
        })}
    </section>
  )
}

export default ProductList