import {useState} from 'react';
import {AiOutlineClose, AiOutlineMenu, AiOutlineSearch} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { links, menuList } from '../utils/constant';
import {MenuItemType} from '../types';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isSidebarOpen, setIsSidbarOpen] = useState<boolean>(false);
  

  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
        {/* left side */}
        <div className='flex items-center'>
            <div onClick={()=>setIsSidbarOpen(!isSidebarOpen)} className='cursor-pointer mr-2 transition-transform transform-gpu transform-origin-center hover:animate-pulsing'>
                <AiOutlineMenu size={30} />
            </div>
            <Link to='/'>
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
        <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
          <AiOutlineSearch size={25} />
          <input className='bg-transparent p-2 w-full focus:outline-none' type="text" name="search" id="search" placeholder='search product' />
        </div>

        {/* Links */}
        <ul className='hidden md:flex capitalize justify-center'>
          {links.map((link)=>{
            const {id, text, url}= link;

            return (
            <li key={id} className='mx-2'>
                <a className='text-lg p-4' href={url}>{text}</a>
            </li>
            )
          })}
          </ul>

        {/* cart button */}
        <a href='/cart' className='flex text-lg gap-1 ml-2'>
                Cart
            <span className='relative flex justify-center items-center text-2xl'>
                <FaShoppingCart />
                <span className='absolute -top-2.5 -right-3 text-sm leading-0 w-6 h-6 bg-sky-300 rounded-full leading-none flex items-center px-0.5'>10</span>
            </span>
        </a>

        {/* mobile menu */}
        {/* overlay */}
        {isSidebarOpen && <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div>}

        {/* side drawer menu */}
         <div className={isSidebarOpen? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10  duration-300': 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10  duration-300 z-20'}>
            <AiOutlineClose size={30} onClick={()=>setIsSidbarOpen(!isSidebarOpen)}  className='absolute right-4 top-4 cursor-pointer hover:text-red-600 transition-colors duration-300'/>
            <h2 className='text-2xl p-4'>
              Besties <span className='font-bold'>Pom</span>
            </h2>
            <nav>
              <ul className='flex flex-col py-4 text-grey-800'>
                {menuList.map((item:MenuItemType)=>{
                    const {id,title, icon, link} = item
                  return (
                  <li key={id} className='text-xl p-4 flex hover:bg-slate-400 duration-300 cursor-pointer'>
                    <Link to={link} className='flex' onClick={()=>setIsSidbarOpen(!isSidebarOpen)}>
                      {icon} {title}
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