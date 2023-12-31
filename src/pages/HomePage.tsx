import { useEffect } from 'react';
import {Hero, FeaturedProducts, Services} from '../components';

const HomePage = () => {
  
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
    <div className='flex flex-col'>
      <Hero/>
      <FeaturedProducts />
      <Services />
    </div>
  )
}

export default HomePage;