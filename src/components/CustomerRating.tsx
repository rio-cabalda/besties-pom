import React from 'react'
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

type TCustomerRatingProps = {
    rating: number;
  };

const CustomerRating = ({ rating }: TCustomerRatingProps) => {

    const tempStars = Array.from({ length : 5 },(_,index)=>{
        // this is a map function
        // array length is 5
        // index 0 - 4
        const number = index + 0.5;
        return (
          <span key = { index } >
            { rating >= index + 1 ? <BsStarFill /> : rating >= number ? <BsStarHalf /> : <BsStar /> }
          </span >
        )
      })


  return (
        <div className="text-[10] lg:text-xs flex gap-1 text-yellow-500">
            {tempStars}
        </div>
  )
}

export default CustomerRating