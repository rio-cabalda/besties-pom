import {useState, useRef, useEffect} from 'react';
import { AiOutlineMenu, AiOutlineSearch} from 'react-icons/ai';
import { Link, useLocation } from 'react-router-dom';
import { BsBag } from 'react-icons/bs';
import { navLinks } from '../utils/constant';
import logo from '../assets/logo.png';
import Sidebar from './Sidebar';
import { useProductStore } from '../store/productStore';
import useCurrentPath from '../hooks/useCurrentPath';


const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [navLink, setNavLink] = useState<string>('');
  const navRef = useRef<HTMLHeadingElement | null>(null);
  const { setNavHeight } = useProductStore();
  const {pathname} = useLocation();
  const path = useCurrentPath(pathname.toString());

  useEffect(() => {
    
    if (navRef.current) {
      const height = navRef.current.clientHeight;
      setNavHeight(height.toLocaleString());
    }
    setNavLink(path);
    // eslint-disable-next-line
  }, [navRef, pathname]);

  return (
    // <nav className='max-w-screen-xl mx-auto flex justify-between items-center p-4 xl:px-0'>
    <header ref={navRef} className='w-full bg-slate-300 fixed top-0 left-0 z-30'>
      <nav className='max-w-screen-xl mx-auto p-4 flex justify-between items-center xl:px-0'>
        {/* left side */}
          <div className='flex items-center gap-2 mr-4'>
            <button onClick={()=>setSidebarOpen(!sidebarOpen)} className='cursor-pointer mr-2 transition-transform transform-gpu transform-origin-center hover:animate-pulsing'>
                <AiOutlineMenu size={30} />
            </button>
            <Link to='/' className='flex items-center'>
              <img src={logo} alt="Logo" className="h-14 " />
              <h1 className='hidden sm:block text-2xl transform lg:text-3xl px-2 leading-tight'>
                Besties
                <span className='font-bold'> Pom</span>
              </h1>
            </Link>
          </div>
     

        {/* search input */}
        <div className='bg-gray-200 px-2 md:ml-6 rounded-full flex items-center  flex-1  max-w-lg '>
          <AiOutlineSearch size={25} />
          <input className='bg-transparent p-2 w-full focus:outline-none' type="text" name="search" id="search" placeholder='search product' />
        </div>

        {/* Links */}
        <ul className='hidden md:flex md:px-6 capitalize justify-center items-center'>
          {navLinks.map((link)=>{
            const {id, text, url}= link;

            return (
            <li key={id} className='relative mx-1 group'>
              <Link to={url} className='px-3 transform '>{text}</Link>
              <div className={`absolute -bottom-1 left-1/2 bg-sky-500 rounded-lg origin-center transform -translate-x-1/2  min-h-[2.5px] w-[85%] scale-x-0 transition-all duration-300 group-hover:scale-x-100 ${navLink === text.toLocaleLowerCase() ? 'scale-x-100':''}`}></div>
            </li>
            )
          })}
        </ul>

        {/* cart button and log in */}
        <div className='hidden md:flex gap-5 items-center'>
          <div className=''>
            <Link to='cart' className='relative flex justify-center items-center text-xl'>
              <BsBag />
              <span className='absolute top-0 left-1/2 -translate-x-1/2 translate-y-1/2 text-xs font-medium leading-0 leading-none flex items-center px-0.5'>10</span>
            </Link>
          </div>

          <div className='transform hover:scale-105 duration-200'>
            <Link to='signin' className='font-bold hover:text-sky-500'>
                Sign In
            </Link>
          </div>
        </div>
          
        {/* mobile menu */}
        {/* overlay */}
        {sidebarOpen ? <div className='bg-black/80 fixed w-full h-screen z-40 top-0 left-0'></div> : null}

        {/* Sidebar menu */}
         <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} navLink={navLink} />

        </nav>
    </header>
  )
}

export default Navbar