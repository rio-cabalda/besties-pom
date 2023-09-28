import {useState, useRef, useEffect} from 'react';
import { AiOutlineMenu} from 'react-icons/ai';
import { Link, useLocation } from 'react-router-dom';
import { BsBag } from 'react-icons/bs';
import { navLinks } from '../utils/constant';
import logo from '../assets/logo-192px.png';
import {SearchBar, Sidebar} from '.';
import { useProductStore } from '../store/productStore';
import useCurrentPath from '../hooks/useCurrentPath';
import useAuthStore from '../store/authStore';
import { AxiosError } from 'axios';
import axiosPrivate from '../api/useAxiosConfig';

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [loggingOut, setLoggingOut] = useState<boolean>(false);
  const [navLink, setNavLink] = useState<string>('');
  const navRef = useRef<HTMLHeadingElement | null>(null);
  const { setNavHeight } = useProductStore();
  const {pathname} = useLocation();
  const path = useCurrentPath(pathname.toString());
  const {user, setlogoutUser, fetchUser,isAuthenticated} = useAuthStore();

  //flexible height of the nav bar will use to set the margin-top of the content.
  useEffect(() => {
    if (navRef.current) {
      const height = navRef.current.offsetHeight;
      setNavHeight(height);    
    }
    setNavLink(path);
    // eslint-disable-next-line
  }, [pathname]);

  const logoutUser = async () => {
    setLoggingOut(false);
    try {
      await axiosPrivate.post('/user/logout');
      setLoggingOut(true);
      setlogoutUser();
    } catch (error) {
      const axiosError = error as AxiosError;
      throw new Error(axiosError.message);
    } finally{
      setLoggingOut(true)
    }
  }
useEffect(()=>{
  const getUser = async() =>{
    try {
      const response = await axiosPrivate.get('/user/auth');
      const {user} = response.data;
      fetchUser(user);
    } catch (error) {
      console.log(error);
      
  }
}
if(!isAuthenticated){
  getUser();
}
   // eslint-disable-next-line
},[]);
  
  return (
    // <nav className='max-w-screen-xl mx-auto flex justify-between items-center p-4 xl:px-0'>
    <header ref={navRef} className='w-full bg-white shadow-sm fixed top-0 left-0 z-30'>
      <nav className='max-w-screen-xl mx-auto py-2 px-4 flex justify-between items-center xl:px-0'>
        {/* left side */}
          <div className='flex items-center gap-2'>
            <button onClick={()=>setSidebarOpen(!sidebarOpen)} className='cursor-pointer mr-2'>
                <AiOutlineMenu size={30}/>
            </button>
            <Link to='/' className='flex items-center justify-center'>
              <img src={logo} alt="Logo" className="h-16 w-16" />
              <h1 className='hidden sm:block text-3xl transform lg:text-4xl px-4 leading-tight'>
                Besties
                <span className='font-bold'> Pom</span>
              </h1>
            </Link>
          </div>
     

        {/* search input */}
        <div className='bg-gray-200 px-2 ml-4 flex items-center flex-1 md:mx-6 rounded-full max-w-lg'>
          <SearchBar />
        </div>

        {/* Links */}
        <ul className='hidden lg:flex md:px-6 capitalize justify-center items-center'>
          {navLinks.map((link)=>{
            const {id, text, url}= link;

            return (
              <li key={id} className={` relative mx-1 group duration-200 ${navLink === text.toLocaleLowerCase() ? '':'hover:translate-y-1'}`}>
                <Link to={url} className='px-3 py-1 transform'>{text}</Link>
                <div className={`absolute -bottom-1 left-1/2 bg-sky-500 rounded-lg origin-center transform -translate-x-1/2  min-h-[2.5px] w-[85%] scale-x-0 transition-all duration-300 group-hover:scale-x-100 ${navLink === text.toLocaleLowerCase() ? 'scale-x-100':''}`}></div>
              </li>
            )
          })}
        </ul>

        {/* cart button and log in */}
        {user? 
            <div className='pl-2 flex items-center gap-5'>
              <div>
                <Link to='cart' className='relative flex justify-center items-center text-xl'>
                  <BsBag />
                  <span className='absolute top-0 left-1/2 -translate-x-1/2 translate-y-1/2 text-xs font-medium leading-0 leading-none flex items-center px-0.5'>10</span>
                </Link>
              </div>
              <div className='capitalize'>
                <span>{user.firstname}</span>
                <button className='p-3 bg-sky-600' type='button' onClick={logoutUser}>{loggingOut? 'Logging out...':'Logout'}</button>
              </div>
            </div>
            :
            <div className='hidden md:inline-block'>
              <div className='transform hover:scale-105 duration-200'>
                <Link to='signin' className='font-bold hover:text-sky-500'>
                    Sign In
                </Link>
              
              </div>
            </div>
           }
        {/* mobile menu */}
        {/* overlay */}
        {sidebarOpen ? <div className='bg-black/80 fixed w-full h-screen z-40 top-0 left-0' onClick={()=>setSidebarOpen(!sidebarOpen)}></div> : null}

        {/* Sidebar menu */}
         <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} navLink={navLink} />
        </nav>
    </header>
  )
}

export default Navbar