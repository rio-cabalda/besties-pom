import { ProductItemType } from '../types';
import { useProductStore } from '../store/productStore';
import {Product} from '.';

const ProductList = () => {
  const { showedProducts} = useProductStore();

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