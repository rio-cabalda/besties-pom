import {useEffect} from 'react'
import axios from 'axios';
import { useQuery } from 'react-query';
import { useProductStore } from '../store/productStore';

// Define the function to fetch data from your API
const fetchData = async () => {
  const response = await axios.get('http://192.168.1.31:8080/products');
  return response.data.products;
};

// Create a custom hook to fetch the data using React Query
const useFetchData = () => {
  const { setProducts } = useProductStore(); // Use the Zustand store

  const { data, isLoading, isError } = useQuery('product', fetchData);

  //Update the Zustand store with the fetched data
  useEffect(()=>{
    setProducts(data)
    // eslint-disable-next-line
  },[data])

  return { data, isLoading, isError };
}

export default useFetchData;