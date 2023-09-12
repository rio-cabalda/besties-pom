import { useProductStore } from '../store/productStore';
import { SortOption } from '../types';
import { ProductStoreType } from '../types';
import { useState } from 'react';
const Sort = () => {
    const { sortProducts, category , sortByCategory}:ProductStoreType = useProductStore();

   const [selectedCategory, setSelectedCategory] = useState<string>('');
   const [sort, setSort] = useState<string>('');

    const handleSort= (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newValue = e.target.value;
        setSort(newValue);
        sortProducts(newValue);
    }
    const handleCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const new_category = e.target.value;
        setSelectedCategory(new_category);
        sortByCategory(new_category);
        setSort('');
    }

    
  return (
    <div className='w-full py-4 flex md:gap-10 justify-around md:justify-center items-center'>
        <div className='flex gap-1 md:gap-4'>
            <h5 className='text-sm'>Category:</h5>
            <select name="category" id="category" className='text-sm outline-none border-b-2 border-b-sky-500 capitalize' value={selectedCategory}
            onChange={handleCategory}
            >
                <option value="" disabled hidden>Select option</option>
                 {category.map((item:string)=>{
                    return  (
                        <option key={item} 
                        disabled={selectedCategory === item} 
                        value={item}
                        className='disabled:bg-sky-300 disabled:text-gray-700'
                        >{item}</option>
                    )
                    
                })} 
            </select>
        </div>
        <div className='flex gap-1 md:gap-4'>
            <h5 className='text-sm'>Sort By:</h5>
            <select name="sort" id="sort" className='text-sm outline-none border-b-2 border-b-sky-500 capitalize' value={sort}
            onChange={handleSort}
            >
                <option value="" disabled hidden>Select option</option>
                <option className='disabled:bg-sky-300 disabled:text-gray-700' disabled={sort === SortOption.PriceLowest} value={SortOption.PriceLowest}>price (lowest)</option>
                <option className='disabled:bg-sky-300 disabled:text-gray-700' disabled={sort === SortOption.PriceHighest} value={SortOption.PriceHighest}>price (highest)</option>
                <option className='disabled:bg-sky-300 disabled:text-gray-700' disabled={sort === SortOption.NameA_Z} value={SortOption.NameA_Z}>name (a-z)</option>
                <option className='disabled:bg-sky-300 disabled:text-gray-700' disabled={sort === SortOption.NameZ_A} value={SortOption.NameZ_A}>name (z-a)</option>
            </select>
        </div>
    </div>
  )
}

export default Sort