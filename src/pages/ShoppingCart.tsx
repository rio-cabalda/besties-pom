import useCheckAuthUser from "../api/checkAuthUser";
import { useEffect, useState } from 'react'
import { ProductItemType } from '../types'
import useUserCart from "../api/fetchUserCart";
import { useParams } from "react-router-dom";
import errorImage from '../assets/sad_dog.png'
import { SectionTitle } from "../components";
import CartItems from "../components/CartItems";
import { useFormatPrice as formatPrice} from "../hooks";


type CartItemType = {
  _id: string;
  product: ProductItemType;
  quantity: number;
}

type ParamsType = {
 id: string;
}

export type UserCartType = {
  cartItems: CartItemType[] | [];
  isLoading: boolean;
  isError?: boolean;
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
  const checkUser = useCheckAuthUser();
  const { id } = useParams<ParamsType>();
  const {cartItems=[], isLoading, isError}:UserCartType = useUserCart(id);
  const [totalAmount, setTotalAmount] = useState<number>(0);
  const shippingFee:number = cartItems.length<1 ? 0 : 200;
  const totalPrice = getTotalPrice(cartItems) | 0;
  
  useEffect(()=>{
    checkUser
    const getTotal = totalPrice + shippingFee;
    setTotalAmount(getTotal);
  },[cartItems, checkUser, totalPrice]);


  
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
      <section className="mx-auto pt-10 px-2 sm:px-5 xl:px-0 text-lg">
        <SectionTitle title='Shopping Cart'/>
        <div className="flex flex-col md:flex-row gap-5">
          <CartItems cartItems={cartItems} isLoading={isLoading}/>


          {/* this will contain total about and checkout button */}
          <article className="bg-white h-fit rounded-xl shadow-lg min-w-[100px] w-80">
            <h4 className="text-base lg:text-xl text-slate-900 font-semibold px-4 py-2">Summary</h4>
            <hr/>
            <div className="text-sm lg:text-base p-4 w-full flex flex-col justify-stretch text-slate-800">
              <div className="flex justify-between py-1 md:py-2">
                <span>Products</span><span>{formatPrice(totalPrice)}</span>
              </div>
              <div className="flex justify-between py-1 pb-3 md:py-2">
                <span>Shipping</span><span>{formatPrice(shippingFee)}</span>
              </div>
              <hr />
              <div className="py-2 font-bold flex gap-5 justify-between text-sm lg:text-base">
                <h5>Total amount<br />(including VAT)</h5>
                <span>{formatPrice(totalAmount)}</span>
              </div>
              <button disabled={cartItems.length<1} className="px-4 py-2 mt-2 bg-blue-500 rounded-lg text-slate-50 text-sm lg:text-base font-semibold uppercase hover:bg-blue-700 active:bg-blue-500 disabled:bg-blue-950">Go to Checkout</button>
            </div>
          </article>

        </div>
      </section>
    </main>
  )
}

export default ShoppingCart;