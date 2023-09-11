import {useState} from 'react';
import {AiOutlineClose, AiOutlineMenu, AiOutlineSearch} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { BsBag } from 'react-icons/bs';
import { sidebarLinks, navLinks } from '../utils/constant';
import {MenuItemType} from '../types';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isSidebarOpen, setIsSidbarOpen] = useState<boolean>(false);
  

  return (
    <nav className='max-w-screen-xl mx-auto flex justify-between items-center p-4 xl:px-0'>
        {/* left side */}
        <div className='flex items-center'>
            
            <div className='flex items-center gap-2 mr-4 mobile-400:mr-0'>
              <button onClick={()=>setIsSidbarOpen(!isSidebarOpen)} className='cursor-pointer mr-2 transition-transform transform-gpu transform-origin-center hover:animate-pulsing'>
                  <AiOutlineMenu size={30} />
              </button>
              <Link to='/' className='flex items-center'>
                <img src={logo} alt="Logo" className="w-14 h-14 " />
                <h1 className='hidden md:block text-2xl transform lg:text-3xl px-2 leading-tight'>
                  Besties
                  <span className='font-bold'> Pom</span>
                </h1>
              </Link>
            </div>
        </div>

        {/* search input */}
        <div className='bg-gray-200 px-2 md:mx-6 rounded-full flex items-center  flex-1  max-w-lg '>
          <AiOutlineSearch size={25} />
          <input className='bg-transparent p-2 w-full focus:outline-none' type="text" name="search" id="search" placeholder='search product' />
        </div>

        {/* Links */}
        <ul className='hidden md:flex capitalize justify-center items-center'>
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

        {/* cart button and log in */}
        <div className='hidden relative md:flex gap-2'>
          <a href='/cart' className=' flex justify-center items-center text-lg gap-1 ml-2 mr-4'>
            <span className='relative text-xl '>
                  <BsBag />
                  <span className='absolute top-[7px] left-[1.5px]  text-xs font-medium leading-0 leading-none flex items-center px-0.5'>10</span>
            </span>
          </a>

          <button className='transition-all transform font-bold hover:scale-105 duration-300 hover:text-sky-500'>
            Sign In
          </button>
        </div>
        

        {/* mobile menu */}
        {/* overlay */}
        {isSidebarOpen ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div> : null}

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
    </nav>
  )
}

export default Navbar