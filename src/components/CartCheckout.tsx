import { PaypalBtn } from ".";
import { useFormatPrice as formatPrice} from "../hooks";
import { CartItemType } from "../pages/ShoppingCartPage";
type PropType = {
    cartItems: CartItemType[] | [];
    totalPrice: number;
    shippingFee: number;
    totalAmount: number;
    clearCart: ()=> void;
}
const CartCheckout = ({cartItems=[],totalPrice,shippingFee,totalAmount,clearCart}:PropType) => {
return (
<article className="bg-white h-fit rounded-xl shadow-lg min-w-[100px] w-80">
        <h4 className="text-base lg:text-xl text-slate-900 font-semibold px-4 py-2">Summary</h4>
        <hr/>
        <div className="text-sm lg:text-base p-4 w-full flex flex-col justify-stretch text-slate-800">
            <div className="flex justify-between py-1 md:py-2">
            <span>Products</span><span>{formatPrice(totalPrice)}</span>
            </div>
            <div className="flex justify-between py-1 pb-3 md:py-2">
            <span>Shipping</span><span>{formatPrice(shippingFee)}</span>
            </div>
            <hr />
            <div className="py-2 font-bold flex gap-5 justify-between text-sm lg:text-base">
            <h5>Total amount<br />(including VAT)</h5>
            <span>{formatPrice(totalAmount)}</span>
            </div>

            <div className="text-center">
            <p className="py-5 text-left rounded-md bg-red-300 text-black my-5">
            <span className="font-bold">Use this paypal acount for testing:</span> <br />
            <span className="font-bold">Email</span>: sb-47qkay26821058@personal.example.com
            <br />
            <span className="font-bold">Password</span>: {'YSJ[4p/4'}
            </p>
            {totalAmount > 0 ? <PaypalBtn totalAmount={totalAmount} clearCart={clearCart} cartItems={cartItems}/>:null}
            </div>
        </div>
        </article>
)
}

export default CartCheckout