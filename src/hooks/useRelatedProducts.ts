import {ProductItemType} from '../types'


const useRelatedProducts = (data:ProductItemType[] ,category: string): ProductItemType[] => {
    // Use the filter method to create a new array containing objects that match the specified category
    const filteredData = data.filter((item) => item.category === category);
    return filteredData;
  };

  export default useRelatedProducts;