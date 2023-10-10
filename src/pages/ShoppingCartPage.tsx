import useCheckAuthUser from "../api/checkAuthUser";
import { useEffect, useState } from 'react'
import { ProductItemType } from '../types'
import useUserCart from "../api/fetchUserCart";
import { useParams } from "react-router-dom";
import errorImage from '../assets/sad_dog.png'
import { SectionTitle, CartItems, CartCheckout } from "../components";
import axiosPrivate from "../api/axiosConfig";
import toast from "react-hot-toast";
import { AxiosError } from "axios";


export type CartItemType = {
  _id: string;
  product: ProductItemType;
  quantity: number;
}

type ParamsType = {
  id: string;
}

const getTotalPrice = (cartItems:CartItemType[]):number => {
  let total= 0;
  cartItems.forEach(item => {
      const sumProduct = (item.product.price * item.quantity);
      total += sumProduct;
    });
    return total;
}

const ShoppingCart = () => {
  const [totalAmount, setTotalAmount] = useState<number>(0);
  const [fetchLoading , setfetchLoading] = useState(false);
  const [ btnIndex, setBtnIdex ] = useState<number | null>(null);
  const checkUser = useCheckAuthUser();
  const { id } = useParams<ParamsType>();
  const {cartItems=[], isLoading, isError, refetch } = useUserCart(id);
  const shippingFee:number = cartItems.length<1 ? 0 : 200;
  const totalPrice = getTotalPrice(cartItems) | 0;
  
    const deleteItem = async (id:string, index:number) => {
        setfetchLoading(true);
        setBtnIdex(index);
        try {
            await axiosPrivate.post(`/user/cart/update/${id}`,{quantity:0});
            await refetch();
            setfetchLoading(false);
            toast.success('Item deleted successfully');
        } catch (error) {
            const axiosError = error as AxiosError;
            toast.error('Item not deleted. Please try again');
            throw new Error(axiosError.message);
        }finally{
            setfetchLoading(false);
            setBtnIdex(null);
        }
    }

    const clearCart = async () =>{
      setfetchLoading(true);
      try {
          await axiosPrivate.delete(`/user/cart/clearcart`);
          await refetch();
          setfetchLoading(false);
          toast.success('Cart cleared successfully');
      } catch (error) {
          const axiosError = error as AxiosError;
          toast.error('Unfulfill action. Please try again');
          throw new Error(axiosError.message);
      }finally{
          setfetchLoading(false);
          setBtnIdex(null);
      }
    }

  useEffect(()=>{
    checkUser
    const getTotal = totalPrice + shippingFee;
    setTotalAmount(getTotal);
  },[cartItems, checkUser, totalPrice, shippingFee]);

  if(isError){
    return (
        <section className='w-full flex flex-col justify-center items-center gap-10'>
          <SectionTitle title='Shopping Cart'/>
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
    <main>
      <section className="mx-auto pt-5 md:pt-10 px-2 sm:px-4 xl:px-0 text-lg">
        <SectionTitle title='Shopping Cart'/>
        <div className="flex flex-col md:flex-row gap-5">
          <CartItems cartItems={cartItems} 
                      isLoading={isLoading} 
                      deleteItem={deleteItem} 
                      fetchLoading={fetchLoading} 
                      refetch={refetch} 
                      btnIndex={btnIndex}
                      clearCart={clearCart}/>

          {/* this will contain total about and checkout button */}
          <CartCheckout cartItems={cartItems} totalPrice={totalPrice} shippingFee={shippingFee} totalAmount={totalAmount} clearCart={clearCart}/>

        </div>
      </section>
    </main>
  )
}

export default ShoppingCart;