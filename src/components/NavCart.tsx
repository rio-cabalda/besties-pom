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
console.log(user?.lastname);

  return (
    <div>
        {isAuthenticated ? 
            <div className='relative pl-2 flex items-center gap-5'>
              <div className='hidden md:block'>
                <Link to='cart' className='relative flex justify-center items-center text-xl'>
                  <BsBag />
                  <span className='absolute top-0 left-1/2 -translate-x-1/2 translate-y-1/2 text-xs font-medium leading-0 leading-none flex items-center px-0.5'>10</span>
                </Link>
              </div>
              <div className=' w-10 h-10 rounded-full overflow-hidden cursor-pointer'>
                  <img className='w-full h-full object-cover' src={user?.image} alt={user?.firstname} />  
              </div>

               {/* drop down user information */}
              <div className='w-[15rem] custom-clip-path p-4 pt-16 absolute -bottom-0 translate-y-[100%] right-0 rounded-md flex flex-col items-center bg-blue-300'>
                  <div className='w-16 h-16 rounded-full overflow-hidden cursor-pointer'>
                      <img className='w-full h-full object-cover' src={user?.image} alt={user?.firstname} /> 
                  </div>
                  <h2 className='text-sm py-2 font-bold'>Hi, {user?.firstname}!</h2> 
                  <span className='text-sm rounded-full p-4 py-1 border-2 border-slate-600'>{user?.email}</span> 
                  <button type='button' className='capitalize mt-5 px-2 py-1 bg-blue-700 rounded-md'>logout</button>
                <div>
                  
                </div>
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