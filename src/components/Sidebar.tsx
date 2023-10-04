import { sidebarLinks } from '../utils/constant';
import { AiOutlineClose } from 'react-icons/ai';
import {MenuItemType} from '../types';
import { Link } from 'react-router-dom';
import {IoLogOutOutline} from 'react-icons/io5';
import {BsCart3} from 'react-icons/bs';
import useAuthStore from '../store/authStore';
import axiosPrivate from '../api/useAxiosConfig';
import { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import useCheckAuthUser from '../api/checkAuthUser';

type SidebarType= {
    sidebarOpen: boolean;
    setSidebarOpen: (sidebarOpen:boolean) => void;
    navLink: string;
}

const Sidebar = ({sidebarOpen,setSidebarOpen, navLink}:SidebarType) => {
    const [loggingOut, setLoggingOut] = useState<boolean>(false);
    const {user, isAuthenticated, setlogoutUser} = useAuthStore();

    const checkUser = useCheckAuthUser();
    useEffect(()=>{checkUser}
   // eslint-disable-next-line
,[]);
    const logoutUser = async() =>{
        setLoggingOut(true);
        try {
          await axiosPrivate.post('/user/logout');
          setlogoutUser();
          setLoggingOut(false);
          
        } catch (error) {
          const axiosError = error as AxiosError;
          setLoggingOut(false);
          throw new Error(axiosError.message);
        }finally{
            setLoggingOut(true);
            setSidebarOpen(!sidebarOpen);
        }
    }

   
  return (
    <div className={sidebarOpen? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-50  duration-300': 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-50  duration-300'}>
        <AiOutlineClose size={30} onClick={()=>setSidebarOpen(!sidebarOpen)}  className='absolute right-4 top-4 cursor-pointer hover:text-red-600 transition-colors duration-300'/>
        <h2 className='text-2xl p-4'>
        Besties <span className='font-bold'>Pom</span>
        </h2>

        {/* logged in user section */}
        {isAuthenticated ? 
        <div className='w-full '>
            <div className='relative w-1/2 h-40 bg-blue-600 rounded-tr-3xl rounded-br-3xl'>
                <div className='absolute top-1/2 -right-1/2 translate-x-[9px] -translate-y-1/2 flex gap-1 flex-col  justify-center items-center'>
                <div className=' w-24 h-24 rounded-full bg-white flex justify-center items-center '>
                    <div className='w-[88px] h-[88px] rounded-full bg-sky-100 overflow-hidden'>
                        <img className='w-full h-full object-cover' src={user?.image} alt={user?.firstname} />
                    </div>
                </div>    
                    <span className='bg-green-200/95 text-slate-900  py-1 px-2 rounded-lg'>{user?.email}</span>
                </div>
                
            </div>
        </div>
        :null}
        <nav>
        <ul className='flex flex-col py-4 text-grey-800'>
            {sidebarLinks.map((item:MenuItemType)=>{
                const {id,title, icon, link} = item
            return (
                <li key={id} className={`${navLink === title.toLocaleLowerCase() ? 'bg-sky-500 bg-opacity-60': 'hover:bg-sky-400 hover:bg-opacity-60'}`}>
                    <Link to={link}  onClick={()=>setSidebarOpen(!sidebarOpen)} className={`w-full text-xl p-5 flex gap-3 justify-start items-center transform duration-300 cursor-pointer ${navLink === title.toLocaleLowerCase() ? 'translate-x-2' : 'hover:translate-x-2'}`}>
                        <span className='text-2xl md:text-[31px]'>{icon}</span>
                        <span className='text-base'>{title}</span>
                    </Link> 
                </li>)
            })}
            {isAuthenticated? 
            <>  
                <li className={`${navLink === 'cart' ? 'bg-sky-500 bg-opacity-60': 'hover:bg-sky-400 hover:bg-opacity-60'}`}>
                    <Link  to={'/cart'}  onClick={()=>setSidebarOpen(!sidebarOpen)} className={`w-full text-xl p-4 flex gap-3 justify-start items-center transform duration-300 cursor-pointer ${navLink === 'cart' ? 'translate-x-2' : 'hover:translate-x-2'}`}>
                        <span className='text-2xl md:text-[31px]'><BsCart3/></span>
                        <span className='text-base capitalize'>cart</span>
                    </Link> 
                </li>

                <li className={`${navLink === 'logout' ? 'bg-sky-400 bg-opacity-60': 'hover:bg-sky-400 hover:bg-opacity-60'}`}>
                    <Link  to={'/'}  onClick={logoutUser} className={`w-full text-xl p-4 flex gap-3 justify-start items-center transform duration-300 cursor-pointer ${navLink === 'logout' ? 'translate-x-2' : 'hover:translate-x-2'}`}>
                        <span className='text-2xl md:text-[31px]'><IoLogOutOutline/></span>
                        <span className='w-full text-base capitalize flex items-center duration-200'>
                        {loggingOut? 
                        <>
                        <span>Logging out</span>
                         <div className="inline-block ml-2 h-5 w-5 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-slate-500 motion-reduce:animate-[spin_1.5s_linear_infinite]"
                            role="status">
                                <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
                            </div>
                        </>
                        :
                        "logout"}
                            </span>
                    </Link> 
                </li>
            </>  
            :
            <>
                <li className={`${navLink === 'signin' ? 'bg-sky-400 bg-opacity-60': 'hover:bg-sky-400 hover:bg-opacity-60'}`}>
                    <Link  to={'/signin'}  onClick={()=>setSidebarOpen(!sidebarOpen)} className={`w-full text-xl p-4 flex gap-3 justify-start items-center transform duration-300 cursor-pointer ${navLink === 'signin' ? 'translate-x-2' : 'hover:translate-x-2'}`}>
                        <span className='text-2xl md:text-[31px]'><IoLogOutOutline/></span>
                        <span className='text-base capitalize'>sign in</span>
                    </Link> 
                </li>

                <li className={`${navLink === 'signup' ? 'bg-sky-400 bg-opacity-60': 'hover:bg-sky-400 hover:bg-opacity-60'}`}>
                    <Link  to={'/signup'}  onClick={()=>setSidebarOpen(!sidebarOpen)} className={`w-full text-xl p-4 flex gap-3 justify-start items-center transform duration-300 cursor-pointer ${navLink === 'signup' ? 'translate-x-2' : 'hover:translate-x-2'}`}>
                        <span className='text-2xl md:text-[31px]'><IoLogOutOutline/></span>
                        <span className='text-base capitalize'>sign up</span>
                    </Link> 
                </li>
            </>}
        </ul>
        </nav>
    </div>
  )
}

export default Sidebar