import {useEffect} from 'react';
import {ProductList,Sort} from '../components';

const ProductsPage = () => {
  
  useEffect(()=>{
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth', // Smooth scrolling animation
      });
    };
    scrollToTop();
  },[]);
 
  return (
    <div className='flex flex-col justify-between items-center'>
    {/* Sort */}
    <Sort />
    {/* Products View*/}
    <ProductList />
   
  </div>
  )
}

export default ProductsPage