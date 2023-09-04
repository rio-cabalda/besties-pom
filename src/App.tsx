import React from "react";
import {SignUp} from "./pages/auth";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from "./pages";

function App() {


  return (
    <BrowserRouter>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path='about' element={<SignUp/>} />
      </Routes>
      
      {/* <SignUp/> */}
      {/* </Footer> */}


    </BrowserRouter>
  )
}

export default App
