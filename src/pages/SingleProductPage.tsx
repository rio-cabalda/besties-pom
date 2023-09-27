import { useParams } from "react-router-dom"
import { useSingleProduct } from "../hooks/useFetchProducts";
import errorImage from '../assets/sad_dog.png'


const SingleProduct = () => {
  const {id=''} = useParams();
  const {singleProduct, isLoading, isError} = useSingleProduct(id);
  
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
    <section className="h-screen w-full flex justify-center items-center bg-red-300">

    </section>
  )
}

export default SingleProduct