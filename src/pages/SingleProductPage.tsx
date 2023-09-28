import { useParams } from "react-router-dom"
import { useSingleProduct } from "../hooks/useFetchProducts";
import errorImage from '../assets/sad_dog.png';
import prodduct from '../assets/product.png';
import CustomerRating from '../components/CustomerRating';

const SingleProduct = () => {
  const defaultSingleProduct = {
    _id: '',
    name: '',
    image: '',
    description: '',
    category: '',
    price: 0,
    rating: 0,
    stock: 0,
  }

  const {id=''} = useParams();
  const {singleProduct=defaultSingleProduct, isLoading, isError} = useSingleProduct(id);
   const {_id, name, image, description, category, price, rating, stock} = singleProduct; 

  console.log(singleProduct);
  
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
  
  return (
    <div className="max-w-screen-xl mx-auto pt-16">
      <div className="p-2">
         <button className="bg-transparent rounded-full border-2 border-sky-500 py-2 px-16">{'<='}</button>
      </div>
      <div className="bg-white w-full h-screen grid grid-cols-2 gap-16">
          <section className="w-full h-screen ">
            <div className="relative w-full h-[30rem] p-5 rounded-lg shadow-lg overflow-hidden">
              {image ? 
              <img className="w-full h-full object-contain" src={image} alt={name} /> 
              : 
              <>
              <img className='w-full h-full object-contain' src={prodduct} alt="Product" />
              <a className="absolute bottom-0 left-3 text-slate-600" href="https://www.flaticon.com/free-icons/product" title="product icons">Product icons created by Freepik - Flaticon</a>
              </>}
            </div>
          </section>
            
          <section className="w-full h-screen text-slate-700">
            <h2 className="text-4xl font-bold">{name}</h2>
            <div className="py-3 flex items-center gap-2 ">
              <CustomerRating rating={rating}/>
              <p className="reviews text-xl lg:text-base leading-none">({150*rating} customer reviews)</p>
            </div>
          </section>

      </div>

    </div>
  )
}

export default SingleProduct