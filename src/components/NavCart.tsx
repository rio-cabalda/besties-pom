 import { useEffect } from 'react';
import { BsBag } from 'react-icons/bs';
import useAuthStore from '../store/authStore';
import checkAuthUser from '../api/checkAuthUser';
import { Link } from 'react-router-dom';


const NavCart = () => {
    const checkUser = checkAuthUser();
    const {user, isAuthenticated} = useAuthStore();

    useEffect(()=>{checkUser}
   // eslint-disable-next-line
,[]);

  return (
    <div>
        {isAuthenticated ? 
            <div className='pl-2 flex items-center gap-5'>
              <div className='hidden md:block'>
                <Link to='cart' className='relative flex justify-center items-center text-xl'>
                  <BsBag />
                  <span className='absolute top-0 left-1/2 -translate-x-1/2 translate-y-1/2 text-xs font-medium leading-0 leading-none flex items-center px-0.5'>10</span>
                </Link>
              </div>
              <div className='w-10 h-10 rounded-full overflow-hidden cursor-pointer'>

                  <img className='w-full h-full object-cover' src={user?.image} alt={user?.firstname} />  
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