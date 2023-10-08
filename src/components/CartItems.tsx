import { Link } from "react-router-dom";
import { useFormatPrice as formatPrice } from "../hooks";
import { UserCartType } from "../pages/ShoppingCart";



const CartItems = ({cartItems, isLoading}:UserCartType) => {
    return (
    <article className="flex-grow bg-white rounded-xl shadow-lg">
        <table className="w-full table-auto border-collapse mb-10">
        <thead className="text-sm md:text-xl capitalize font-semibold text-slate-800">
            <tr className="border-b-2 border-slate-100">
            <th className="w-1/4 py-4">Item</th>
            <th className="w-1/4 py-4">Price</th>
            <th className="w-1/4 py-4">Quantity</th>
            <th className="w-1/4 py-4">Subtotal</th>
            </tr>
        </thead>
        

            {/* Here is the nested conditional rendering */}
            {/* isLoading -> cartItems.length  */}

            {isLoading? 
            <tbody className="text-slate-700 ">
                <tr >
                <td colSpan={4} className="text-sm md:text-2xl w-full px-4 py-2 text-center">Loading...</td>
                </tr>
            </tbody>
            :
            <>
            {cartItems.length < 1 ?
            <tbody className="text-slate-700 ">
                <tr >
                    <td colSpan={4} className="px-4 py-2 text-center font-bold text-sm md:text-2xl">No item in your shopping cart</td>
                </tr>
                <tr>
                    <td colSpan={4} className="px-4 py-2 w-full text-center"><Link to='/products' className="text-sm md:text-lg text-yellow-400 font-semibold border-b-2 py-2 px-5 border-blue-500">Go shopping</Link></td>
                </tr>
            </tbody>
            :
            <tbody className="w-full bg-purple-800">
            {/* Cart items go here  */}
            {cartItems.map((item)=>{
                const {image,name, price} = item.product;
                const {quantity, _id:id} = item;
                return (
                <>
                    <tr key={id} className="hidden text-center text-sm md:text-xl">
                        <td className="px-4 py-2 flex gap-2 items-center">
                        <div className="w-28 h-24">
                            <img className='w-full h-full object-cover' src={image} alt={item.product.name} />  
                        </div>
                        <h5 className="text-lg">{name}</h5>
                        </td>
                        <td className="px-4 py-2">{formatPrice(price)}</td>
                        <td className="px-4 py-2">{quantity}</td>
                        <td className="px-4 py-2">{formatPrice(price*quantity)}</td>
                    </tr>
                    {/* <tr key={id} className="text-center text-sm md:text-xl">
                        <td className="px-4 py-2 flex gap-2 items-center">
                        <div className="w-28 h-24">
                            <img className='w-full h-full object-cover' src={image} alt={item.product.name} />  
                        </div>
                        <h5 className="text-lg">{name}</h5>
                        </td>
                        <td className="px-4 py-2">{formatPrice(price)}</td>
                        <td className="px-4 py-2">{quantity}</td>
                        <td className="px-4 py-2">{formatPrice(price*quantity)}</td>
                    </tr> */}
                </>
                )
            })
            }
            </tbody>}</>}
       
        </table>
    </article>
  )
}

export default CartItems