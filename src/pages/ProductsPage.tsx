import { useFetchData } from '../hooks/fetchProducts';
import errorImage from '../assets/sad_dog.png'
import ProductList from '../components/ProductList';
import Sort from '../components/Sort';

const ProductsPage = () => {
    const { isLoading, isError } = useFetchData();

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
    {/* Sort */}
    <Sort />
    {/* Products View*/}
    <ProductList />
   
  </main>
  )
}

export default ProductsPage