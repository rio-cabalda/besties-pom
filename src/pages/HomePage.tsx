import {Hero, FeaturedProducts, Services} from '../components';

const HomePage = () => {

 
  return (
    <div className='max-w-screen-xl mx-auto flex flex-col'>
      <Hero/>
      <FeaturedProducts />
      <Services />
    </div>
  )
}

export default HomePage;