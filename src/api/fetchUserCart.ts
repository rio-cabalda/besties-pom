import { useQuery } from "react-query";
import axiosPrivate from "./axiosConfig";
import { AxiosError } from "axios";

const useUserCart = (id:string | undefined) => {
    const { data:cartItems, isLoading, isError } = useQuery(['userCart',id], async()=>{
        try {
            const response = await axiosPrivate.get('/user/cart');
            const cartItems = response.data;

            if(cartItems){
                return cartItems;
            }
            else{
                return [];
            }
        } catch (error) {
            const axiosError = error as AxiosError;
            console.log('error inside useQuery');
            
            throw new Error(axiosError.message)
        }
    });
    return { cartItems, isLoading, isError }
}

export default useUserCart;