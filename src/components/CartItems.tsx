import { Link } from "react-router-dom";
import { useFormatPrice as formatPrice } from "../hooks";
import { CartItemType } from "../pages/ShoppingCartPage";
import {MdOutlineDeleteForever} from 'react-icons/md'
import { CartItemQuantity } from ".";
import { QueryObserverResult } from "react-query";

type PropType = {
    cartItems: CartItemType[] | [];
    isLoading: boolean;
    fetchLoading: boolean;
    deleteItem: (id:string, index: number)=>void;
    refetch: () => Promise<QueryObserverResult<CartItemType[], unknown>>;
    btnIndex:number | null;
    clearCart: ()=> void;
}

const CartItems = ({cartItems, btnIndex, isLoading, fetchLoading, deleteItem, refetch,clearCart}:PropType) => {


    return (
    <article className="flex-grow">
        <div className="p-1 pb-3 sm:p-4 bg-white rounded-xl shadow-lg">
            <table className="w-full table-auto -4 border-collapse  ">
            <thead className="text-base lg:text-xl capitalize font-semibold text-slate-800">
                <tr className="border-b-2 border-slate-100">
                <th className="w-1/4 py-4">Item</th>
                <th className="hidden sm:table-cell w-1/4 py-4">Price</th>
                <th className="w-1/4 py-4">Quantity</th>
                <th className="w-1/4 py-4">Subtotal</th>
                <th className="hidden sm:table-cell  w-1/4 py-4"></th>
                </tr>
            </thead>
            <tbody className="text-slate-700">
                {/* Here is the nested conditional rendering */}
                {/* isLoading -> cartItems.length  */}
                {isLoading? 
                    <tr >
                        <td colSpan={4} className="text-sm md:text-2xl w-full px-4 py-2 text-center">Loading...</td>
                    </tr>
                :
                <>
                {cartItems.length < 1 ?
                    <>
                        <tr >
                            <td colSpan={4} className="px-4 py-2 text-center font-bold text-sm md:text-2xl">No item in your shopping cart</td>
                        </tr>
                        <tr>
                            <td colSpan={4} className="px-4 py-2 w-full text-center"><Link to='/products' className="text-sm md:text-lg text-yellow-400 font-semibold border-b-2 py-2 px-5 border-blue-500">Go shopping</Link></td>
                        </tr>
                    </>
                    :
                    <>
                        {/* Cart items go here  */}
                        {cartItems.map(( item, index )=>{
                            const {image,name, price, stock} = item.product;
                            const {quantity, _id} = item;
                            return (
                                <tr key={_id} className="text-center justify-stretch flex-grow text-sm lg:text-base">
                                    <td  className="px-1 md:px-2 py-1 flex gap-2 items-center">
                                        <div className="w-24 h-20 lg:w-28 lg:h-24">
                                            <img className='w-full h-full object-cover' src={image} alt={item.product.name} />  
                                        </div>
                                        <div className="w-full md:min-h-fit flex flex-col text-left ">
                                            <h5>{name}</h5>
                                            <div className="sm:hidden">
                                                <p className="py-2">{formatPrice(price)}</p>
                                                <button disabled={fetchLoading} type="button" className="w-16 h-8 flex justify-center items-center leading-none rounded-sm text-slate-100 bg-red-500  hover:scale-110 duration-300 disabled:text-gray-500"
                                                onClick={()=>deleteItem(_id, index)} >{fetchLoading && (btnIndex === index) ? 
                                                    <div className="text-center inline-block h-3 w-3 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] text-blue-100 motion-reduce:animate-[spin_1.5s_linear_infinite]"
                                                    role="status">
                                                        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
                                                    </div>
                                                :"Remove"}</button>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="hidden sm:table-cell "><span className="px-2 py-1">{formatPrice(price)}</span></td>
                                    <td>
                                        <CartItemQuantity quantity={quantity} id={_id} stock={stock} refetch={refetch}/>
                                    </td>
                                    <td>
                                        <span className="px-2 py-1">{formatPrice(price*quantity)}</span>
                                    </td>
                                    <td className="hidden sm:table-cell">
                                        <div className="w-full h-full flex justify-center px-2 py-1" >
                                            <button disabled={fetchLoading} type="button" className="p-1  text-red-500 text-2xl  hover:scale-110 duration-300 disabled:text-gray-500"
                                            onClick={()=>deleteItem(_id, index)} ><MdOutlineDeleteForever /></button>
                                        </div>
                                        
                                    </td>
                                </tr>
                            )
                        })
                        }
                    </>
                }
                </>
                }
            </tbody>
            </table>
        </div>
        <div className="flex items-center justify-between mt-3">
            <Link to={'/products'} className="px-4 py-2 rounded-md text-blue-50 bg-pink-600 hover:bg-pink-400 duration-200">Continue Shopping</Link>
            {cartItems.length > 0 ? <button disabled={cartItems.length < 1} className="w-32 py-2 rounded-md bg-red-500 text-blue-50 hover:bg-red-400 active:bg-red-500 disabled:bg-gray-400 " type='button' onClick={clearCart}>
            {fetchLoading? 
                <div className="text-center inline-block h-3 w-3 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] text-blue-100 motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
                    <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
                </div>: 'Clear Cart'}
            </button>: null}
        </div>
        
    </article>
)
}

export default CartItems