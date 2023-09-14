import {Hero, FeaturedProducts} from '../components';

const HomePage = () => {

 
  return (
    <div className='max-w-screen-xl mx-auto flex flex-col'>
      <Hero/>
      <FeaturedProducts />
      
    </div>
  )
}

export default HomePage;