import { usePasswordToggle } from '../../hooks';
import { SiDatadog } from 'react-icons/si';
import { BiSolidHide, BiShow } from 'react-icons/bi';
import {AiOutlineGithub, AiFillGooglePlusCircle} from 'react-icons/ai';
import {BiLogoFacebookCircle} from 'react-icons/bi';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { TSignInSchema,signInSchema } from '../../types/SignInTypes';
import { StorageEnum } from '../../types';
import useAuthStore from '../../store/authStore';
import axiosPrivate, {axiosInstance} from '../../api/axiosConfig';
import toast  from 'react-hot-toast';
import axios, { AxiosError } from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import useCheckAuthUser from '../../api/checkAuthUser';
import { useEffect } from 'react';

const SignInPage = () => {
  const { visible, togglePasswordVisibility, inputType } = usePasswordToggle();
  const { fetchUser, isAuthenticated} = useAuthStore();
  const checkUser = useCheckAuthUser();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || '/';

  useEffect(()=>{
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth', // Smooth scrolling animation
        });
      };
    scrollToTop(); 
    checkUser //Check user if has logged in.
  },
  //eslint-disable-next-line
  []);

  const {
    register,
    handleSubmit,
    formState: {errors,isSubmitting},
    reset,
  } = useForm<TSignInSchema>({
    resolver: zodResolver(signInSchema)
  });

  const onSubmit = async(data: TSignInSchema) =>{
    try {
      const response = await axiosInstance.post('/user/login', data);
      
      if (response.status === 200) {
        // Login successful
        const { accessToken } = response.data;
        localStorage.setItem(StorageEnum.StorageString, accessToken);
        const resUser = await axiosPrivate.get('/user/auth');
        const {user} = resUser.data;
         fetchUser(user);
        toast.success(<b>Successfully logged in!</b>,{duration: 3000});
        navigate(from);
      } else {
        toast.error(<b>{response?.data?.error ? response.data.error:'Login failed'}</b>);
       }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        // Check if it's an Axios error
        const axiosError: AxiosError = error;
        if (axiosError.response) {
          // Access the status code
          const statusCode = axiosError.response.status;
          if(statusCode === 401){
             toast.error(<b>Incorrect Password</b>);
          }else{
             toast.error(<b>Login failed</b>);
          }
        }
      } else {
        // Handle other types of errors
        console.error('An error occurred:', error);
      }
    } 
    reset();
  }

  if(isAuthenticated){
    setTimeout(() => {
      navigate(from);
    }, 0);
  }


  return (
    <section className='bg-gradient-to-r from-sky-300 to-sky-500 h-screen w-full pt-16 flex'>

      <div className='flex mx-auto rounded-lg h-fit shadow-md'>  

        <div className='flex-none relative rounded-l-lg rounded-r-lg w-[350px] mobile-400:w-[400px] md:w-[500px] lg:rounded-r-none  py-12 px-5 text-xs bg-white flex items-center flex-col'>
          <div className='absolute flex justify-center items-center top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-sky-500 h-20 w-20 border-transparent border-none rounded-full overflow-hidden'>
            <SiDatadog className='text-white w-14 h-14'/>
          </div>
              <h1 className='text-lg font-bold text-sky-700'>Sign in</h1>
              
          <form onSubmit={handleSubmit(onSubmit)} className='w-full flex pt-10 flex-col justify-center text-lg gap-2'>

            <div className='mt-3 relative flex flex-col'>
              <input 
              id='email'
              {...register('email')}
              className='w-full border-[2px] border-transparent bg-transparent border-b-2 border-b-sky-200 p-2 px-3 peer focus:bg-transparent focus:rounded-md focus:border-solid focus:border-[2px] focus:ring-0 focus:border-sky-500 outline-none'
              type='email' 
              placeholder=' '/>
              <label htmlFor="email"
              className='absolute text-base text-slate-500 h-2 border-transparent left-2 -top-[3px] transition-all bg-white px-1 duration peer-placeholder-shown:scale-100 peer-placeholder-shown:top-6 peer-placeholder-shown:left-2 peer-placeholder-shown:text-slate-500 peer-placeholder-shown: border-x-2 peer-placeholder-shown: border-x-transparent peer-placeholder-shown:text-[16px] peer-focus:text-base peer-focus:-top-[3px] peer-focus:scale-100 border-sky-500 peer-focus:text-slate-500 peer-focus:left-2 peer-focus:border-x-2 peer-focus:border-sky-500 flex items-center peer-focus:h-2'
              >Email</label>
              <div className='min-h-[2rem] w-full px-2'>
                {errors.email ? ( <span className='text-red-500 text-sm transition-all duration-200'>{errors.email.message}</span>):null}
              </div>
            </div>

            <div className='w-full relative flex flex-col'>
              <input 
              id='password'
              {...register('password')}
              className='w-full border-[2px] border-transparent bg-transparent border-b-2 border-b-sky-200 p-2 px-3 pr-7 peer focus:bg-transparent focus:rounded-md focus:border-solid focus:border-[2px] focus:ring-0 focus:border-sky-500 outline-none'
              type={inputType}
              placeholder=' '/>

              <button
                      type="button"
                      className="absolute bg-transparent text-lg top-3 right-0 px-2 py-1 hover:scale-110 rounded-r cursor-pointer outline-none"
                      onClick={togglePasswordVisibility}
                    >
                      {visible ? <BiSolidHide/> : <BiShow/> }
              </button>
              <label htmlFor="password"
              className='absolute text-base text-slate-500 h-2 border-transparent left-2 -top-[3px] transition-all bg-white px-1 duration peer-placeholder-shown:scale-100 peer-placeholder-shown:top-6 peer-placeholder-shown:left-2 peer-placeholder-shown:text-slate-500 peer-placeholder-shown: border-x-2 peer-placeholder-shown: border-x-transparent peer-placeholder-shown:text-[16px] peer-focus:text-base peer-focus:-top-[3px] peer-focus:scale-100 border-sky-500 peer-focus:text-slate-500 peer-focus:left-2 peer-focus:border-x-2 peer-focus:border-sky-500 flex items-center peer-focus:h-2'
              >Password</label>
               <div className='min-h-[2rem] w-full px-2'>
                {errors.password ? ( <span className='text-red-500 text-sm transition-all duration-200'>{errors.password.message}</span>):null}
              </div>
            </div>

            <button disabled={isSubmitting} className='mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
              {isSubmitting? <span className='animate-bouncingText'>Signing in...</span>: 'Sign in'}
              </button>
          </form>

            {/* Horizontal line */}
            <div className="flex w-80 items-center mt-10 py-4">
                <div className="flex-grow h-[1px] bg-gray-400"></div> 
                <span className="flex-shrink text-sm text-gray-500 px-4">Sign in with</span>
                <div className="flex-grow h-[1px] bg-gray-400"></div>
            </div>
            {/* Sign in with Google, Facebook, Github */}
          <div>
            <div className='flex gap-4'>
            <AiFillGooglePlusCircle className='text-3xl text-red-500'/>
            <AiOutlineGithub className='text-3xl'/>
            <BiLogoFacebookCircle className='text-3xl text-blue-900'/>
            </div>
            
          </div>

        </div>

        <div className='hidden h-[40rem] w-[500px] lg:flex rounded-r-lg overflow-hidden bg-red-500'>
          
          <img className='h-full w-full object-cover' src="https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1924&q=80" alt="Sign up image" />  
        </div>
      </div>

    </section>
  )
}

export default SignInPage;

