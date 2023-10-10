import {ProductItemType} from '../types';
import { FaMinus,FaPlus } from 'react-icons/fa';


type PropType ={
    product: ProductItemType;
    addToCart: (event: React.MouseEvent<HTMLButtonElement>)=> void;
    isSubmitting:boolean;
    quantity: number;
    setQuantity: (newValue: number | ((prevQuantity: number) => number)) => void;
}

const AddToCart:React.FC<PropType> = ({product, addToCart, isSubmitting, quantity,setQuantity}) => {
    const {stock} = product;

    const increase = () => {
        if(quantity < stock) setQuantity((prevQuantity)=> prevQuantity+1)
      }
      const decrease = () => {
        if(quantity > 1) setQuantity((prevQuantity)=> prevQuantity-1)
      }

  return (
    <div>
        <div className='flex items-center gap-4 p-4'>
            <button type='button' className='text-xl' onClick={decrease}><FaMinus /></button>
            <h2 className='text-4xl font-bold'>{quantity} </h2>
            <button type='button' className='text-xl' onClick={increase}><FaPlus /></button>
        </div>
        <button disabled={isSubmitting} onClick={addToCart} className='uppercase bg-gradient-to-tr from-sky-400 to-sky-600 px-5 py-2 rounded-lg text-slate-200 shadow-sm hover:from-sky-200 hover:to-sky-400 hover:text-slate-400 hover:shadow-lg'>{isSubmitting ? "adding...":"add to cart"}</button>
    </div>
  )
}

export default AddToCart