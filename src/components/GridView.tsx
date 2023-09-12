import { formatPrice } from '../utils/helpers';
import { ProductItemType } from '../types';
import {BiSearchAlt} from 'react-icons/bi'
import { Link } from 'react-router-dom';
import CustomerRating from '../components/CustomerRating';
import { useProductStore } from '../store/productStore';

const GridView = () => {
const { showedProducts} = useProductStore();


  return (
    <section className='grid grid-cols-2 text-xs gap-2 md:grid-cols-3 lg:grid-cols-4  p-1 lg:p-4 lg:gap-7 w-full '>
        {showedProducts.map((item:ProductItemType)=>{
            const {_id:id, image, name, price, rating} = item;
            return (
                <div key={id} className='bg-sky-100 rounded-lg shadow-md overflow-hidden'>
                    <div className='relative group bg-white'>
                        <img className='w-full h-54 md:h-64 lg:h-72 object-cover' src={image} alt={name} />
                        <Link to={`/products/${id}`}>
                            <div className='absolute top-0 left-0 w-full h-full bg-black/70 flex justify-center items-center opacity-0 duration-300
                            group-hover:opacity-100 text-sky-400 text-3xl'>
                            <BiSearchAlt />
                            </div>
                        </Link>
                    </div>
                    <footer className='p-4 flex flex-col gap-2  text-xs lg:text-base'>
                        <div className='flex flex-col gap-1 justify-start md:flex-row md:justify-between'>
                            <h5 className='font-semibold text-xs lg:text-sm'>{name}</h5>
                            <p className='md:ml-5 text-xs lg:text-sm'>{formatPrice(price)}</p>
                        </div>
                        <div className='h-full text-xs flex flex-col items-start gap-2 md:flex-row md:items-center'>
                            <CustomerRating rating={rating} />
                            <p className="reviews">({150*rating} sold)</p>
                        </div>
                    </footer>
                 </div>
            )
        })}
    </section>
  )
}

export default GridView