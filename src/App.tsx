import { SignUp, SignIn } from "./pages/auth";
import { Navbar } from "./components";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home,Products, Error, SingleProduct } from "./pages";
import { useProductStore } from "./store/productStore";
import ShoppingCart from "./pages/ShoppingCart";
import PrivateRoute from "./pages/PrivateRoute";

function App() {
  const {navHeight} = useProductStore(); //height of nav(fixed position) use to margin top
  const divStyle = {
    marginTop: `${navHeight}px`
  };
  
  return (
    <div className="max-w-screen-xl mx-auto">
      <BrowserRouter>
        <Navbar/>
          <main style={divStyle}>
            <Routes>
              <Route path="/" element={<Home />}/>
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
    </div>
  )
}

export default App
