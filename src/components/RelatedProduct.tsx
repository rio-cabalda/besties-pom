import React from 'react';
import {useFormatPrice}  from '../hooks';
import {BiSearchAlt} from 'react-icons/bi'
import { Link } from 'react-router-dom';
import {CustomerRating} from '.';
import { ProductItemType } from '../types';

interface ProductProps {
  item: ProductItemType; 
}

const RelatedProduct:React.FC<ProductProps> = ({item}) => {
  const {_id:id, image, name, price, rating} = item;


  return (
    <div key={id} className='bg-sky-100 rounded-lg shadow-md overflow-hidden flex-grow'>
      <div className='relative group bg-white'>
          <div className='h-28 lg:h-48'>
              <img className='w-full h-full object-cover' src={image} alt={name} />
          </div>
          <Link to={`/products/${id}`}>
              <div className='absolute top-0 left-0 w-full h-full bg-black/70 flex justify-center items-center opacity-0 duration-300
              group-hover:opacity-100 text-sky-400 text-3xl '>
              <BiSearchAlt />
              </div>
          </Link>
      </div>
      <footer className='p-4 flex flex-col gap-2  text-xs lg:text-base'>
          <div className='h-10 flex flex-col gap-1 justify-start md:flex-row md:justify-between'>
              <h5 className='font-semibold text-xs lg:text-sm'>{name}</h5>
              <p className='md:ml-5 text-xs lg:text-sm'>{useFormatPrice(price)}</p>
          </div>
          <div className='text-[10px] flex flex-col items-start gap-1  md:flex-row md:items-center'>
              <CustomerRating rating={rating} />
              <p className="reviews text-[10px] lg:text-xs leading-none">({150*rating} sold)</p>
          </div>
      </footer>
    </div>
    
  )
}

export default RelatedProduct