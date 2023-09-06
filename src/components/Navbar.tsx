import {useState} from 'react';
import {AiOutlineClose, AiOutlineMenu, AiOutlineSearch} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { sidebarLinks, navLinks } from '../utils/constant';
import {MenuItemType} from '../types';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isSidebarOpen, setIsSidbarOpen] = useState<boolean>(false);
  

  return (
    <div className='max-w-[1170px] mx-auto flex justify-between items-center p-4 xl:px-0'>
        {/* left side */}
        <div className='flex items-center'>
            <div onClick={()=>setIsSidbarOpen(!isSidebarOpen)} className='cursor-pointer mr-2 transition-transform transform-gpu transform-origin-center hover:animate-pulsing'>
                <AiOutlineMenu size={30} />
            </div>
            <Link to='/' className='flex items-center'>
            <img src={logo} alt="Logo" className="hidden md:block w-14 h-14 " />
            <h1 className='text-xl transform  mobile-400:text-xl  md:text-2xl lg:text-3xl px-2 mr-2 leading-tight'>
              Besties
              <span className='font-bold'> Pom</span>
            </h1>
            </Link>
            {/* Pick up/Delivery Option */}
            {/* <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
                <p className='bg-blue-500 text-white rounded-full p-2'>Delivery</p>
                <p className='p-2'>Pickup</p>
            </div> */}
        </div>

        {/* search input */}
        <div className='bg-gray-200 rounded-full flex items-center px-2 flex-1  max-w-lg '>
          <AiOutlineSearch size={25} />
          <input className='bg-transparent p-2 w-full focus:outline-none' type="text" name="search" id="search" placeholder='search product' />
        </div>

        {/* Links */}
        <ul className='hidden md:flex capitalize justify-center items-center px-7'>
          {navLinks.map((link)=>{
            const {id, text, url}= link;

            return (
            <li key={id} className='relative mx-1 group'>
              <Link to={url} className='px-3 transform '>{text}</Link>
              <div className='absolute -bottom-1 left-1/2 bg-sky-500 rounded-lg origin-center transform -translate-x-1/2  min-h-[2.5px] w-[85%] scale-x-0 transition-all duration-300 group-hover:scale-x-100 '></div>
            </li>
            )
          })}
          </ul>

        {/* cart button */}
        <a href='/cart' className='hidden md:flex text-lg gap-1 ml-2 mr-4'>
                Cart
            <span className='relative flex justify-center items-center text-2xl '>
                <FaShoppingCart />
                <span className='absolute -top-2.5 -right-3 text-sm leading-0 w-6 h-6 bg-sky-300 rounded-full leading-none flex items-center px-0.5'>10</span>
            </span>
        </a>

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
                {sidebarLinks.map((item:MenuItemType)=>{
                    const {id,title, icon, link} = item
                  return (
                    <li key={id} className='flex hover:bg-sky-500 hover:bg-opacity-60'>
                        <Link key={id} to={link} className='w-full text-xl p-4 flex gap-3 justify-start items-center transform hover:translate-x-2 duration-300 cursor-pointer' onClick={()=>setIsSidbarOpen(!isSidebarOpen)}>
                            <span className='text-[20px]'>{icon}</span>
                            <span className='text-lg'>{title}</span>
                        </Link> 
                    </li>)
                })}
              </ul>
            </nav>
        </div>
    </div>
  )
}

export default Navbar