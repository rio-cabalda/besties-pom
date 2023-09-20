
import {ProductList,Sort} from '../components';

const ProductsPage = () => {
    
 
  return (
    <div className='max-w-screen-xl mx-auto flex flex-col justify-between items-center'>
    {/* Sort */}
    <Sort />
    {/* Products View*/}
    <ProductList />
   
  </div>
  )
}

export default ProductsPage