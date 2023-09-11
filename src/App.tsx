import React from "react";
import {SignUp, SignIn} from "./pages/auth";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home,Products, Error, SingleProduct } from "./pages";

function App() {


  return (
    <BrowserRouter>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path='signup' element={<SignUp/>} />
        <Route path='signin' element={<SignIn/>} />
        <Route path='products' element={<Products/>} />
        <Route path='products/:id' element={<SingleProduct />} />
        <Route path='*' element={<Error />} />
      </Routes>
      
      {/* <SignUp/> */}
      {/* </Footer> */}


    </BrowserRouter>
  )
}

export default App
