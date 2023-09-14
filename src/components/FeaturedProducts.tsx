import { Product } from ".";
import { useFetchData } from "../hooks";
import { useProductStore } from "../store/productStore"
import { ProductItemType } from "../types";


const FeaturedProducts = () => {
  const {isLoading, isError} = useFetchData();
  const {featuredProducts} = useProductStore();
  if(isLoading){
    return (
        <section className='w-full pt-10 bg-[#f1f5f8] -skew-y-3 -translate-y-6 md:-skew-y-2 lg:-translate-y-7'>
          <article className='skew-y-3 md:skew-y-2 py-10 pb-20 flex flex-col justify-center items-center'>
            <div className="flex flex-col justify-start items-center gap-2 mb-10">
              <h2 className="text-4xl font-bold">Featured Products</h2>
              <div className="w-60 border-b-4 border-sky-500  rounded-lg"></div>
            </div>
            <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
          </article>
        </section>
        )}

  if(isError){
    return (
      <section className='w-full pt-10 bg-[#f1f5f8] -skew-y-3 -translate-y-6 md:-skew-y-2 lg:-translate-y-7'>
          <article className='skew-y-3 md:skew-y-2 my-10 flex flex-col justify-center items-center'>
            <div className="flex flex-col justify-start items-center gap-2 mb-10">
              <h2 className="text-4xl font-bold">Featured Products</h2>
              <div className="w-60 border-b-4 border-sky-500  rounded-lg"></div>
            </div>
            <div className="flex-1 w-full text-red-400  p-4 flex flex-col justify-center items-center">
                <h2 className="font-semibold text-lg mb-2">Something Went Wrong</h2>
                <p className="text-sm text-center">Sorry, we encountered an error while loading the featured products.</p>
            </div>
           
          </article>
        </section>
        
    )}      
    
  return (
    <section className='w-full pt-10 bg-[rgb(241,245,248)] -skew-y-3 -translate-y-6 md:-skew-y-2 lg:-translate-y-7'>
        <article className='skew-y-3 md:skew-y-2 my-6 pb-10 flex flex-col justify-center items-center'>
          <div className="flex flex-col justify-start items-center gap-2 mb-10">
            <h2 className="text-4xl font-bold">Featured Products</h2>
            <div className="w-60 border-b-4 border-sky-500  rounded-lg"></div>
          </div>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 p-4">
            {featuredProducts.map((item:ProductItemType)=>(<Product key={item._id} item={item}/>))}
          </div>
        </article>
      </section>
  )
}

export default FeaturedProducts