import {useEffect} from 'react'
import axios from 'axios';
import { useQuery } from 'react-query';
import { useProductStore } from '../store/productStore';

// Define the function to fetch data from your API
const fetchData = async () => {
  const response = await axios.get('http://localhost:8080/products');
  return response.data.products;
};

// Create a custom hook to fetch the data using React Query
export function useFetchData() {
  const { setProducts } = useProductStore(); // Use the Zustand store

  const { data, isLoading, isError } = useQuery('product', fetchData);

  // Update the Zustand store with the fetched data
  useEffect(()=>{
    setProducts(data)
  },[data])

  return { data, isLoading, isError };
}