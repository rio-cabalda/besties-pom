import { useState, useEffect } from 'react';
import {IoIosArrowBack, IoIosArrowForward, IoIosArrowUp, IoIosArrowDown} from 'react-icons/io';
import axiosPrivate from '../api/axiosConfig';
import { AxiosError } from 'axios';
import { CartItemType } from '../pages/ShoppingCartPage';
import { QueryObserverResult } from 'react-query';

type PropType = {
    id: string;
    quantity: number;
    stock: number;
    refetch: () => Promise<QueryObserverResult<CartItemType[], unknown>>;
}

const CartItemQuantity = ({ id, quantity, stock, refetch }:PropType) => {
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [viewportWidth, setViewportWidth] = useState<number>(window.innerWidth);

    const mobileWidth = 640; 
    //if bodyWidth < mobileWidth set the container to flex-col to arrange the arrow vertically
    // 640px is mobile view.

    useEffect(() => {
        const updateViewportWidth = () => {
            setViewportWidth(window.innerWidth);
          };
          // Add a resize event listener to update the width when the window is resized
          window.addEventListener('resize', updateViewportWidth);
      
          // Clean up the event listener when the component unmounts
          return () => {
            window.removeEventListener('resize', updateViewportWidth);
          };
    }, []);
    
    
    const updateCartQuantity = async(newQuantity:number) => {
        try {
            await axiosPrivate.post(`/user/cart/update/${id}`, {quantity:newQuantity});
        } catch (error) {
            const axiosError = error as AxiosError; 
            throw new Error(axiosError.message);  
        }
    }

    const increase = async() => {
        setIsSubmitting(true);
        try {
            const addQuantity = quantity + 1;
            if(addQuantity <= stock){
                await updateCartQuantity(addQuantity);
                await refetch();
            }
        } catch (error) {
            const axiosError = error as AxiosError; 
            throw new Error(axiosError.message);   
        }finally{
            setIsSubmitting(false);
        }

        
        }
    const decrease = async() => {
        setIsSubmitting(true);
        try {
            const addQuantity = quantity - 1;
            if(addQuantity > 0){
                await updateCartQuantity(addQuantity);
                await refetch();
            }
        } catch (error) {
            const axiosError = error as AxiosError; 
            throw new Error(axiosError.message);   
        }finally{
            setIsSubmitting(false);
        }
    }

return (
        <div className='flex flex-col-reverse sm:flex-row items-center justify-center sm:gap-4 p-4'>
            <button type='button' disabled={isSubmitting || quantity <= 1} className='text-2xl text-blue-600 disabled:text-gray-600' onClick={decrease}>
                {viewportWidth < mobileWidth?<IoIosArrowDown/> : <IoIosArrowBack />}
            </button>

            <h2 className=''>{quantity} </h2>

            <button type='button' disabled={isSubmitting || quantity >= stock} className='text-2xl text-blue-600 disabled:text-gray-600' onClick={increase}>
                {viewportWidth < mobileWidth?<IoIosArrowUp/> : <IoIosArrowForward />}
            </button>
        </div>
  )
}

export default CartItemQuantity