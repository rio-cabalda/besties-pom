import { SignUp, SignIn } from "./pages/auth";
import { Navbar } from "./components";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home,Products, Error, SingleProduct, PrivateRoute, About, ShoppingCart } from "./pages";
import { useProductStore } from "./store/productStore";
import { PayPalScriptProvider } from '@paypal/react-paypal-js'

function App() {
  const {navHeight} = useProductStore(); //height of nav(fixed position) use to margin top
  const divStyle = {
    marginTop: `${navHeight}px`
  };
  const REACT_APP_PAYPAL_CLIENT_ID = "AfjoQrA6n7QRRuRJk8dyX81OOhuRMbUbfY77JQ_ax0sfNT_-yQ8ypqyKvvVrFfI87y6dx_k8VTHnvEM2";
  
  return (
    <div className="max-w-screen-xl mx-auto">
      <PayPalScriptProvider options={{clientId: REACT_APP_PAYPAL_CLIENT_ID, currency: "PHP"}}>
      <BrowserRouter>
        <Navbar/>
          <main style={divStyle}>
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path='about' element={<About/>} />
              <Route path='signup' element={<SignUp/>} />
              <Route path='signin' element={<SignIn/>} />
              <Route path='products' element={<Products/>} />
              <Route path='products/:id' element={<SingleProduct />} />
              <Route path="cart/:id" element={
                        <PrivateRoute >
                              <ShoppingCart />
                        </PrivateRoute>
              } />
              <Route path='*' element={<Error />} />
            </Routes>
          </main>
          {/* <Footer /> */}
        </BrowserRouter>
    </PayPalScriptProvider>    
    </div>
  )
}

export default App
