 import { useEffect, useState } from 'react';
import { BsBag } from 'react-icons/bs';
import useAuthStore from '../store/authStore';
import checkAuthUser from '../api/checkAuthUser';
import { Link, useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';
import axiosPrivate from '../api/axiosConfig';
import { CgCloseO } from 'react-icons/cg';

const NavCart = () => {
  const checkUser = checkAuthUser();
  const {user, isAuthenticated, setlogoutUser} = useAuthStore();
  const [userMenuOpen, setUserMenuOpen] = useState<boolean>(false);
  const [loggingOut, setLoggingOut] = useState<boolean>(false);
  const navigate = useNavigate();
  useEffect(()=>{
    checkUser
    setUserMenuOpen(false);
  }
   // eslint-disable-next-line
  ,[]);
  
  const logoutUser = async() =>{
    setLoggingOut(true);
    try {
      await axiosPrivate.post('/user/logout');
      setlogoutUser();
      navigate('/');
    } catch (error) {
      const axiosError = error as AxiosError;
      throw new Error(axiosError.message);
    }finally{
        setLoggingOut(false);
        setUserMenuOpen(!userMenuOpen);
    }
}

  return (
    <div>
        {isAuthenticated ? 
            <div className='relative pl-2 flex items-center gap-5'>
              <div className='hidden md:block'>
                <Link to={`cart/${user?._id}`} className='relative flex justify-center items-center text-xl'>
                  <BsBag />
                  <span className='absolute top-0 left-1/2 -translate-x-1/2 translate-y-1/2 text-xs font-medium leading-0 leading-none flex items-center px-0.5'>10</span>
                </Link>
              </div>
              <div className='w-10 h-10 rounded-full overflow-hidden cursor-pointer' onClick={()=>setUserMenuOpen(!userMenuOpen)}>
                    <img className='w-full h-full object-cover' src={user?.image} alt={user?.firstname} />  
              </div>

               {/* drop down user information */}
              {userMenuOpen?
              <div className={`w-[15rem] custom-clip-path p-4 pt-16 absolute -bottom-0 translate-y-[100%] right-0 rounded-md bg-blue-300 text-slate-700 duration-300`}>
                <div className='relative flex flex-col items-center'>
                  <button type="button" className='absolute text-black -top-3 right-0 text-xl active:text-black p-1 rounded-full hover:text-red-600 duration-200'
                  onClick={()=>setUserMenuOpen(!userMenuOpen)}>
                  <CgCloseO />
                  </button>  

                  <div className='w-[75px] h-[75px] rounded-full flex justify-center items-center bg-white'>
                    <div className='w-16 h-16 rounded-full overflow-hidden cursor-pointer'>
                        <img className='w-full h-full object-cover' src={user?.image} alt={user?.firstname} /> 
                    </div>
                  </div>
                  <h2 className='text-base py-2 font-bold '>Hi, {user?.firstname}!</h2> 
                  <span className='text-sm rounded-full p-4 py-1 border-2 border-slate-600'>{user?.email}</span> 
                  <button type='button' className='w-24 h-8 flex justify-center items-center capitalize mt-5 bg-blue-700 text-slate-200 rounded-md' onClick={logoutUser}>
                    {loggingOut? 
                    <div className="inline-block ml-2 h-5 w-5 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] text-white  motion-reduce:animate-[spin_1.5s_linear_infinite]"
                    role="status">
                        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
                    </div>
                    :
                    'logout'}
                    </button>
                </div>  
              </div> : null}
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
    </div>
  )
}

export default NavCart