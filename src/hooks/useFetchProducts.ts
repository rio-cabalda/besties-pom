import { useQuery } from 'react-query';
import {axiosInstance} from '../api/useAxiosConfig';
import { AxiosError } from 'axios';

// Define the function to fetch data from your API
export const useAllProducts = () => {

    const { data:allProducts, isLoading, isError } = useQuery('products', async() => {
      try {
      const response = await axiosInstance.get('/products');
      const { products } = response.data;
      if(products){
        return products;
      }
      else{
        return []
      }
      } catch (error) {
        const axiosError = error as AxiosError;
        throw new Error(axiosError.message);
      }
    });
  return  {allProducts, isLoading, isError};
};

 export const useSingleProduct = (id:string) => {
    const {data:singleProduct, isLoading, isError} = useQuery('singleProduct', async()=>{
        try {
          const response = await axiosInstance(`/product/${id}`);
          const { product } = response.data;
          if(product){
            return product;
          }
          else{
            return [];
          }
        } catch (error) {
          const axiosError = error as AxiosError;
          throw new Error(axiosError.message);
        }
    });
    return {singleProduct, isLoading, isError}
 }

