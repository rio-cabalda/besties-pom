import { useState, useEffect } from 'react';
import { BsBag } from 'react-icons/bs';
import { AxiosError } from 'axios';
import useAuthStore from '../store/authStore';
import checkAuthUser from '../api/checkAuthUser';
import { Link } from 'react-router-dom';
import axiosPrivate from '../api/useAxiosConfig';
import { UserType } from '../types';

type AuthUserType = {
    user: UserType | null;
    isAuthenticated: boolean;
    setlogoutUser: ()=>void;
}

const NavCart = () => {
    const [loggingOut, setLoggingOut] = useState<boolean>(false);
    const checkUser = checkAuthUser();
    const {user, isAuthenticated, setlogoutUser}:AuthUserType = useAuthStore();

    const handleLogoutUser = async() => {        
        setLoggingOut(true);
        try {
          await axiosPrivate.post('/user/logout');
          setlogoutUser();
          setLoggingOut(false);
          
        } catch (error) {
          const axiosError = error as AxiosError;
          setLoggingOut(false);
          throw new Error(axiosError.message);
        }
      }
    useEffect(()=>{checkUser}
   // eslint-disable-next-line
,[]);

  return (
    <div>
        {isAuthenticated ? 
            <div className='pl-2 flex items-center gap-5'>
              <div>
                <Link to='cart' className='relative flex justify-center items-center text-xl'>
                  <BsBag />
                  <span className='absolute top-0 left-1/2 -translate-x-1/2 translate-y-1/2 text-xs font-medium leading-0 leading-none flex items-center px-0.5'>10</span>
                </Link>
              </div>
              <div className='capitalize'>
                <span>{user?.firstname}</span>
                <button className='p-3 bg-sky-600' type='button' onClick={handleLogoutUser}>
                    {loggingOut? 'Logging out...':'Logout'}
                    </button>
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
    </div>
  )
}

export default NavCart