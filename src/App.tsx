import React from "react";
import {SignUp, SignIn} from "./pages/auth";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from "./pages";

function App() {


  return (
    <BrowserRouter>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path='signup' element={<SignUp/>} />
        <Route path='signin' element={<SignIn/>} />
      </Routes>
      
      {/* <SignUp/> */}
      {/* </Footer> */}


    </BrowserRouter>
  )
}

export default App
