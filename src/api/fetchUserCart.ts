import { useQuery, QueryObserverResult  } from "react-query";
import axiosPrivate from "./axiosConfig";
import { AxiosError } from "axios";
import { CartItemType } from "../pages/ShoppingCartPage";

type UseUserCartType = {
    cartItems: CartItemType[];
    isLoading: boolean;
    isError: boolean;
    refetch: () => Promise<QueryObserverResult<CartItemType[], unknown>>
}

const useUserCart = (id:string | undefined):UseUserCartType  => {
    const { data:cartItems, isLoading, isError, refetch } = useQuery(['userCart',id], async()=>{
        try {
            const response = await axiosPrivate.get('/user/cart');
            const cartItems = response.data;
            return cartItems || []; 
        } catch (error) {
            const axiosError = error as AxiosError;
            console.log('error inside useQuery');
            
            throw new Error(axiosError.message)
        }
    }, {
        refetchOnWindowFocus: false, // Disable automatic refetch on window focus
    });
    return { cartItems, isLoading, isError, refetch}
}

export default useUserCart;