import { Link, useNavigate, useLocation, useParams } from "react-router-dom"
import { useSingleProduct } from "../api/useFetchProducts";
import errorImage from '../assets/sad_dog.png';
import product from '../assets/product.png';
import CustomerRating from '../components/CustomerRating';
import { useFormatPrice } from "../hooks";
import { SingleProductType } from "../types";
import AddToCart from "../components/AddToCart";
import { useEffect, useState } from "react";
import axiosPrivate from "../api/useAxiosConfig";
import { AxiosError } from "axios";
import useCheckAuthUser from "../api/checkAuthUser";
import useAuthStore from "../store/authStore";


const SingleProduct = () => {
  const navigate = useNavigate();
  const location = useLocation();

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
  const {singleProduct=defaultSingleProduct, isLoading, isError}:SingleProductType = useSingleProduct(id);
  const { _id,name, image, description, category, price, rating, stock} = singleProduct;
  const {isAuthenticated,setlogoutUser} = useAuthStore();
  const formatedPrice = useFormatPrice(price);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [quantity, setQuantity] = useState<number>(1);
  const checkUser = useCheckAuthUser();
  const currentLocation = location.pathname;

  const addToCart = async() => {
    setIsSubmitting(true);
    try {
      const addItem = await axiosPrivate.post(`/user/cart/${_id}1`,{quantity:quantity});
      console.log(addItem);
      
      setIsSubmitting(false);
    } catch (error) {
      const axiosError = error as AxiosError;
      if(axiosError.response?.status === 401){
        //this will run if SESSION is Expired or Expired Token
        // if SESSION is expured, re-log in.
        setlogoutUser();
        navigate('/signin', { state: { from: currentLocation }});
      }
      throw new Error(axiosError.message);  
    }finally {
      setIsSubmitting(false);
    }
  }

  useEffect(()=>{checkUser},
  //eslint-disable-next-line
  []);
  
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
    <div className="max-w-screen-xl mx-auto pt-10">
      <div className="py-5 lg:py-10 px-5 lg:px-043">
        <Link to='/products' className="bg-blue-300 px-10 py-2 rounded-md">BACK</Link>
      </div>
      <div className="bg-white w-full grid grid-cols-1 px-5 lg:px-0 lg:grid-cols-2 lg:gap-16">
          <section className="w-full">
            <div className="relative w-full h-[30rem] p-5 rounded-lg shadow-lg overflow-hidden">
              {image ? 
              <img className="w-full h-full object-contain" src={image} alt={name} /> 
              : 
              <>
              <img className='w-full h-full object-contain' src={product} alt="Product" />
              <a className="absolute bottom-0 left-3 text-slate-600" href="https://www.flaticon.com/free-icons/product" title="product icons">Product icons created by Freepik - Flaticon</a>
              </>}
            </div>
          </section>
          {/* Product info */}
          <section className="w-full text-slate-700 py-5">
            <h2 className="text-2xl lg:text-4xl font-bold">{name}</h2>
            <div className="mt-2 gap-1 lg:mt-0 lg:py-3 flex items-center lg:gap-2 ">
              <CustomerRating rating={rating} />
              <p className="reviews text-xl lg:text-base leading-none">({150*rating} customer reviews)</p>
            </div>
            <h5 className="font-bold text-lg tracking-widest text-blue-800">{formatedPrice}</h5>

            <div className="mt-5 lg:mt-10 flex flex-col gap-2 lg:gap-4 border-b-2 pb-5">
                <p className=" font-semibold text-lg tracking-wide">{description}</p>
                <p className="font-bold text-base tracking-wide">Stock: <span className="font-normal text-base">{stock}</span></p>
                <p className="font-bold text-base tracking-wide">Category: <span className="font-normal text-base">{category}</span></p>
            </div>

            {/* add to cart */}
            <div className="p-5">
              {isAuthenticated? <>{stock > 0 ? <AddToCart product={singleProduct} addToCart={addToCart} isSubmitting={isSubmitting} quantity={quantity} setQuantity={setQuantity}/>: null}</>: <button onClick={()=>navigate('/signin', { state: { from: currentLocation } })} className='uppercase bg-gradient-to-tr from-sky-400 to-sky-600 px-5 py-2 rounded-lg text-slate-200 shadow-sm hover:from-sky-200 hover:to-sky-400 hover:text-slate-400 hover:shadow-lg'>Sign in</button>}
                
            </div>

          </section>

      </div>

    </div>
  )
}

export default SingleProduct