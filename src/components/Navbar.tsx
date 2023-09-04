import {useState} from 'react';
import {AiOutlineClose, AiOutlineMenu, AiOutlineSearch} from 'react-icons/ai'
import {BsFillCartFill} from 'react-icons/bs'
import { menuList } from '../utils/constant'
import {MenuItemType} from '../types'

import logo from '../assets/logo.png'

const Navbar = () => {
  const [isSidebarOpen, setIsSidbarOpen] = useState<boolean>(false)
  

  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
        {/* left side */}
        <div className='flex items-center'>
            <div onClick={()=>setIsSidbarOpen(!isSidebarOpen)} className='cursor-pointer mr-2 transition-transform transform-gpu transform-origin-center hover:animate-pulsing'>
                <AiOutlineMenu size={30} />
            </div>
            <img src={logo} alt="Logo" className="w-14 h-14" />
            <h1 className='text-xl transform  mobile-400:text-2xl  md:text-3xl lg:text-4xl px-2 mr-2 leading-tight'>
              Besties
              <span className='font-bold'> Pom</span>
            </h1>
            <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
                <p className='bg-blue-500 text-white rounded-full p-2'>Delivery</p>
                <p className='p-2'>Pickup</p>
            </div>
        </div>

        {/* search input */}
        <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
          <AiOutlineSearch size={25} />
          <input className='bg-transparent p-2 w-full focus:outline-none' type="text" name="search" id="search" placeholder='search product' />
        </div>

        {/* cart button */}
        <button className='bg-blue-500 border-blue-500 text-white hidden md:flex items-center py-2 rounded-full'>
            <BsFillCartFill size={20} className='mr-2'/> Cart
        </button>

        {/* mobile menu */}
        {/* overlay */}
        {isSidebarOpen && <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div>}

        {/* side drawer menu */}
         <div className={isSidebarOpen? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10  duration-300': 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10  duration-300'}>
            <AiOutlineClose size={30} onClick={()=>setIsSidbarOpen(!isSidebarOpen)}  className='absolute right-4 top-4 cursor-pointer hover:text-red-600 transition-colors duration-300'/>
            <h2 className='text-2xl p-4'>
              Besties <span className='font-bold'>Pom</span>
            </h2>
            <nav>
              <ul className='flex flex-col py-4 text-grey-800'>
                {menuList.map((item:MenuItemType)=>{
                    const {id,title, icon} = item
                  return (
                  <li key={id} className='text-xl p-4 flex hover:bg-slate-400 duration-300 cursor-pointer'>
                      {icon} {title}
                  </li>)
                })}
              </ul>
            </nav>
        </div>
    </div>
  )
}

export default Navbar