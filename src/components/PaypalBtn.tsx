import { PayPalButtons } from "@paypal/react-paypal-js";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../store/authStore";
import { CartItemType } from "../pages/ShoppingCartPage";

type PropType = {
    totalAmount: number;
    clearCart: ()=> void;
    cartItems: CartItemType[] | [];
}


const PaypalBtn = ({cartItems, totalAmount,clearCart}:PropType) => {
    const [error, setError] = useState<string>('');
    const navigate = useNavigate();
    const { user } = useAuthStore();
  
   
    
    if(error){
        console.log(`Error: ${error}`);
    }
  return (
    <PayPalButtons 
        disabled={cartItems.length < 1}
        style={{
                color: "blue",
                layout: "horizontal",
                height: 48,
                tagline: false,
                shape: 'pill',
                label: 'checkout'
            }}
        onClick={(data,actions)=>{
            //this function will validate on button click whether client or server side
            const hasAlreadyBoughtProduct = false;
            if(hasAlreadyBoughtProduct){
                setError('You already bought this product. Go to your account to view your list of products.');
                console.log('onClick', error);
                return actions.reject();
            }
            else {
                return actions.resolve()
            }
        }}    
        createOrder={(data,actions )=>{

            
            const checkout = actions.order.create({
                purchase_units: [{
                    description: "Paypal Payment",
                    amount:{   
                        value: totalAmount.toString()
                    }
                }]
            })
            return checkout;
        }}
        onApprove={async(data, actions)=>{ 
            // it must capture the order to deduct the amount to the buyers account 
            // capture is a promise function therefore use async await
            const order = await actions?.order?.capture();
            // console.log('order',order);
            if(order?.status==='COMPLETED'){
                setTimeout(()=>{
                    clearCart();
                    toast.success(`Thank you for your purchase! ${user?.firstname}`,{duration: 4000});
                    navigate('/');
                },1000);
                
            }
            // call handleApprove function to personalize user experience after checking out successfully
            // then passing the order ID to data param
        }}
        onCancel={()=>{
            //cancel message, modal or redirect user to cancel page, redirect back to cart
            navigate(`/cart/${user?._id}`);
            toast.error('You cancel the order')
        }}
        onError={(err)=>{
            setError(err.toString())
            console.log('onError',err);
        }}
    />
  )
}

export default PaypalBtn