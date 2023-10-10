import {useEffect, useState, useRef} from 'react';
import { FaSearch} from 'react-icons/fa';
import { useProductStore } from '../store/productStore';
import { Link } from 'react-router-dom';
import { IoClose } from 'react-icons/io5';
import { useAllProducts } from '../api/fetchProducts';

const SearchBar = () => {
  const {searchValue} =useProductStore();
    const [searchInput, setSearchInput] = useState<string>(searchValue);
    const [isInputFocused, setInputFocused] = useState(false);
    const {showedProducts, setSearch, setProducts} = useProductStore();
    const div1Ref = useRef<HTMLDivElement | null>(null);
    const { allProducts } = useAllProducts();
    
    useEffect(()=>{
        if(allProducts){
            setProducts(allProducts);
        }
        // eslint-disable-next-line
    },[allProducts]);

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (div1Ref.current && !div1Ref.current.contains(event.target as Node)) {
          // Click occurred outside of the search component
          setInputFocused(false);
        }
      };
      // Add a click event listener to the document
      document.addEventListener('click', handleClickOutside);
  
      // Clean up the event listener when the component unmounts
      return () => {
        document.removeEventListener('click', handleClickOutside);
      };
    }, []);

    useEffect(()=>{
      setInputFocused(true);
      setSearchInput(searchInput);
      setSearch(searchInput);
      //eslint-disable-next-line
    },[searchInput])
    
    const handleChange = (value:string) => {
      setSearchInput(value);
      setSearch(value);
    };
    
    const handleClick = (value:string) => {
      handleChange(value);
      setInputFocused(false);
    };
    const pressEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') {
        handleChange(searchInput);
        setInputFocused(false);
      }
    }

  return (
    <div ref={div1Ref} className='w-full h-full px-1 justify-center flex items-center flex-1'> 
        <div className='text-slate-500'><FaSearch /></div>
        <input className='bg-transparent p-2 w-full focus:outline-none' 
            type="text" 
            value={searchInput} 
            onChange={(e)=>handleChange(e.target.value)}
            onFocus={() => setInputFocused(true)}
            onKeyPress={pressEnter}
            name="search" 
            placeholder='search product' 
            autoComplete='off'
            />
            {searchInput && isInputFocused &&  showedProducts.length > 1 ? <div className='w-[90%] bg-slate-100 absolute -bottom-[12px] right-1/2 md:w-[50%] translate-x-1/2 translate-y-[100%] rounded-lg'>
              <ul className='px-4 py-2 max-h-[200px] overflow-scroll'>
            
                  {showedProducts.map((item)=>{
                    return (
                      <li key={item._id} className='py-2 border-b-[1px]  border-s-fuchsia-300'>
                        <Link to='products' onClick={()=>handleClick(item.name)}>
                          {item.name}
                        </Link>
                      </li>)     
                  })}

              </ul>
            </div> : null}
            {searchInput ?  <button className='text-slate-500 text-lg hover:cursor-pointer hover:text-red-900 hover:scale-105 active:scale-100 duration-200' type='button' onClick={()=>setSearchInput('')}><IoClose /></button> : null}
    </div>
  )
}

export default SearchBar