import { useFetchData } from '../hooks/fetchProducts';
import errorImage from '../assets/sad_dog.png'
import { TProductItem } from '../types';
import {BiSearchAlt} from 'react-icons/bi'
import { Link } from 'react-router-dom';
import CustomerRating from '../components/CustomerRating';
import { useProductStore } from '../store/productStore';

const ProductsPage = () => {
    const { isLoading, isError } = useFetchData();
    const { showedProducts, filterByA_Z} = useProductStore();

    console.log('loading', isLoading);
    console.log('error', isError);
    // console.log('data', data);
    // console.log('products', products);
    console.log('filtered products', showedProducts);

 if(isLoading){
    return (
        <main className='max-w-screen-xl mx-auto flex flex-col justify-between items-center '>
            <div className="w-16 h-16 mt-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
        </main>)
 }
if(isError){
    return (
        <main className='w-full flex flex-col justify-center items-center gap-10'>
            <div className="flex-1 w-full bg-red-100 text-red-600 border border-red-400 rounded p-4 flex flex-col justify-center items-center">
                <h2 className="font-semibold text-lg mb-2">Something Went Wrong</h2>
                <p className="text-sm">Sorry, we encountered an error while loading the data.</p>
            </div>
            <div className='w-60 h-60 translate-y-1/2'>
                <img className='w-full object-cover' src={errorImage} alt="Dog" />
            </div>
            
        </main>
    )
   
}
    
  return (
    <main className='max-w-screen-xl mx-auto flex flex-col justify-between items-center '>
    <div><button className='bg-sky-400 px-4 py-2 rounded-md' type='button' onClick={filterByA_Z}>Filter A-Z</button></div>
    {/* Products */}
    <section className='grid grid-cols-2 text-sm md:grid-cols-3 lg:grid-cols-4 lg:text-base p-4 gap-7 w-full '>
        {showedProducts.map((item:TProductItem)=>{
            const {_id:id,name, price, rating} = item;
            return (
                <div key={id} className='bg-sky-100 rounded-lg shadow-md overflow-hidden'>
                    <div className='relative group'>
                        <img className='w-full h-56 object-cover' src="https://5.imimg.com/data5/ST/LS/ZG/SELLER-31383807/royal-canin-puppy-dog-food-500x500.jpg" alt={name} />
                        <Link to={`/products/${id}`}>
                            <div className='absolute top-0 left-0 w-full h-full bg-black/70 flex justify-center items-center opacity-0 duration-300
                            group-hover:opacity-100 text-sky-400 text-3xl'>
                            <BiSearchAlt />
                            </div>
                        </Link>
                    </div>
                    <footer className='p-4 flex flex-col gap-2'>
                        <div className='flex justify-between'>
                            <h5>{name}</h5>
                            <p>${price}</p>
                        </div>
                        <div className='text-xs flex items-center gap-2'>
                            <CustomerRating rating={rating} />
                            <p className="reviews">({150*rating} sold)</p>
                        </div>
                    </footer>
                 </div>
            )
        })}
    </section>
  </main>
  )
}

export default ProductsPage