import { TbDogBowl } from 'react-icons/tb';
import { BiSolidHide, BiShow } from 'react-icons/bi';
import {usePasswordToggle, useConfirmPasswordToggle} from '../../hooks';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signUpSchema, TSignUpSchema } from '../../types/SignUpTypes';
import axios from 'axios';
import toast  from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export type UserType = {
  firstname: string;
  lastname: string;
  birthdate: Date;
  email: string;
  password: string;
}

const SignUpPage = () => {
  const { visible, togglePasswordVisibility, inputType } = usePasswordToggle();
  const { confirmVisible, toggleConfirmPasswordVisibility, confirmInputType } = useConfirmPasswordToggle();
  const {
    register,
    handleSubmit,
    formState: {errors,isSubmitting},
    reset,
  } = useForm<TSignUpSchema>({
    resolver: zodResolver(signUpSchema)
  });
  const navigate = useNavigate();

  const onSubmit = async(data: TSignUpSchema) =>{
    const response = await axios.post('https://glamorous-tuna-lapel.cyclic.app/user/register', data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.status === 201) {
      // Success: HTTP status code 200
      toast.success(<b>Congratulations! Welcome to our community of pet lovers!</b>,{duration: 3000});
       navigate('/signin');
    } else {
      toast.error(<b>Could not save.</b>);
    }
      reset();
      
  }

  
  return (
    <section className='bg-gradient-to-r from-sky-300 to-sky-500 h-screen w-full pt-16 flex '>

      <div className='flex mx-auto max-w-[1640px] h-fit rounded-lg shadow-md'>  

        <div className='relative rounded-l-lg rounded-r-lg w-[350px] mobile-400:w-[400px] md:w-[500px] lg:rounded-r-none h-fit py-12 px-5 text-xs bg-white flex items-center flex-col'>
          <div className='absolute flex justify-center items-center top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-sky-500 h-20 w-20 border-transparent border-none rounded-full overflow-hidden'>
            <TbDogBowl className='text-white w-14 h-14'/>
          </div>
              <h1 className='text-lg font-bold text-sky-700'>Sign Up Now</h1>
              
          <form onSubmit={handleSubmit(onSubmit)} className='w-full flex flex-col justify-center'>

{/* Firstname */}        
            <div className='mt-3 relative flex flex-col'>
              <input 
              {...register('firstname')}
              id='firstname'
              className='w-full px-2 py-1 border-1 border-transparent bg-transparent  border-b-2 border-b-sky-200 peer focus:rounded-md focus:border-solid focus:border focus:ring-0 focus:border-sky-500 outline-none text-base'
              type={"text"} 
              placeholder=' '/>
              <label htmlFor="firstname"
              className='absolute text-base text-slate-500 h-2 border-transparent left-2 -top-[3px] transition-all bg-white px-1 duration peer-placeholder-shown:scale-100 peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-2 peer-placeholder-shown:text-slate-500 peer-placeholder-shown: border-x-2 peer-placeholder-shown: border-x-transparent peer-placeholder-shown:text-[16px] peer-focus:text-base peer-focus:-top-[3px] peer-focus:scale-100 border-sky-500 peer-focus:text-slate-500 peer-focus:left-2 peer-focus:border-x-2 peer-focus:border-sky-500 flex items-center peer-focus:h-2'
              >First name</label>
              <div className='min-h-[1.5rem] w-full px-2'>
                {errors.firstname ? ( <span className='text-red-500 text-sm transition-all duration-200'>{errors.firstname.message}</span>):null}
              </div>
            </div>
{/* Lastname */}
            <div className='mt-3 relative flex flex-col'>
              <input 
              {...register('lastname')}
              id='lastname'
              className=' w-full px-2 py-1 border-1 border-transparent bg-transparent  border-b-2 border-b-sky-200 peer focus:rounded-md focus:border-solid focus:border focus:ring-0 focus:border-sky-500 outline-none text-base'
              type={"text"} 
              placeholder=' '/>
              <label htmlFor="lastname"
              className='absolute text-base text-slate-500 h-2 border-transparent left-2 -top-[3px] transition-all bg-white px-1 duration peer-placeholder-shown:scale-100 peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-2 peer-placeholder-shown:text-slate-500 peer-placeholder-shown: border-x-2 peer-placeholder-shown: border-x-transparent peer-placeholder-shown:text-[16px] peer-focus:text-base peer-focus:-top-[3px] peer-focus:scale-100 border-sky-500 peer-focus:text-slate-500 peer-focus:left-2 peer-focus:border-x-2 peer-focus:border-sky-500 flex items-center peer-focus:h-2'
              >Last name</label>
              <div className='min-h-[1.5rem] w-full px-2'>
                {errors.lastname ? (<span className='text-red-500 text-sm transition-all duration-200'>{errors.lastname.message}</span>):null}
              </div>
            </div>
{/* Birthdate */}
            <div className='mt-3 relative flex flex-col'>
              <input 
              {...register('birthdate')}
              id='date'
              className=' w-full px-2 py-1 border-1 border-transparent bg-transparent  border-b-2 border-b-sky-200 peer focus:rounded-md focus:border-solid focus:border focus:ring-0 focus:border-sky-500 outline-none text-base'
              type={"text"} 
              placeholder=' '/>
              <label htmlFor="date"
              className='absolute text-base text-slate-500 h-2 border-transparent left-2 -top-[3px] transition-all bg-white px-1 duration peer-placeholder-shown:scale-100 peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-2 peer-placeholder-shown:text-slate-500 peer-placeholder-shown: border-x-2 peer-placeholder-shown: border-x-transparent peer-placeholder-shown:text-[16px] peer-focus:text-base peer-focus:-top-[3px] peer-focus:scale-100 border-sky-500 peer-focus:text-slate-500 peer-focus:left-2 peer-focus:border-x-2 peer-focus:border-sky-500 flex items-center peer-focus:h-2'
              >Birth date</label>
              <div className='min-h-[1.5rem] w-full px-2'>
                {errors.birthdate ? ( <span className='text-red-500 text-sm transition-all duration-200'>{errors.birthdate.message}</span>): null}
              </div>
            </div>
{/* email */}
            <div className='mt-3 relative flex flex-col'>
              <input 
              {...register('email')}
              id='email'
              className=' w-full px-2 py-1 border-1 border-transparent bg-transparent  border-b-2 border-b-sky-200 peer focus:rounded-md focus:border-solid focus:border focus:ring-0 focus:border-sky-500 outline-none text-base'
              type='email' 
              placeholder=' '/>
              <label htmlFor="email"
              className='absolute text-base text-slate-500 h-2 border-transparent left-2 -top-[3px] transition-all bg-white px-1 duration peer-placeholder-shown:scale-100 peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-2 peer-placeholder-shown:text-slate-500 peer-placeholder-shown: border-x-2 peer-placeholder-shown: border-x-transparent peer-placeholder-shown:text-[16px] peer-focus:text-base peer-focus:-top-[3px] peer-focus:scale-100 border-sky-500 peer-focus:text-slate-500 peer-focus:left-2 peer-focus:border-x-2 peer-focus:border-sky-500 flex items-center peer-focus:h-2'
              >Email</label>
              <div className='min-h-[1.5rem] w-full px-2'>
                {errors.email ? ( <span className='text-red-500 text-sm transition-all duration-200'>{errors.email.message}</span>) : null}
              </div>
            </div>
{/* Password */}
            <div className='mt-3 relative flex flex-col'>
              <input 
              {...register('password')}
              id='password'
              className='w-full px-2 py-1 border-1 border-transparent bg-transparent  border-b-2 border-b-sky-200 peer focus:rounded-md focus:border-solid focus:border focus:ring-0 focus:border-sky-500 outline-none text-base'
              type={inputType}
              placeholder=' '/>

              <button
                      type="button"
                      className="absolute bg-transparent text-lg top-1 right-0 px-2 py-1 bg-gray-300 hover:scale-110 rounded-r cursor-pointer outline-none"
                      onClick={togglePasswordVisibility}
                    >
                      {visible ? <BiSolidHide/> : <BiShow/> }
              </button>
              <label htmlFor="password"
              className='absolute text-base text-slate-500 h-2 border-transparent left-2 -top-[3px] transition-all bg-white px-1 duration peer-placeholder-shown:scale-100 peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-2 peer-placeholder-shown:text-slate-500 peer-placeholder-shown: border-x-2 peer-placeholder-shown: border-x-transparent peer-placeholder-shown:text-[16px] peer-focus:text-base peer-focus:-top-[3px] peer-focus:scale-100 border-sky-500 peer-focus:text-slate-500 peer-focus:left-2 peer-focus:border-x-2 peer-focus:border-sky-500 flex items-center peer-focus:h-2'
              >Password</label>
              <div className='min-h-[1.5rem] w-full px-2'>
                {errors.password ? ( <span className='text-red-500 text-sm transition-all duration-200'>{errors.password.message}</span>):null}
              </div>
              
            </div>
{/* Confirm password */}
            <div className='mt-3 relative flex flex-col'>
              <input 
              {...register('confirmPassword')}
              id='confirmPassword'
              className=' w-full px-2 py-1 border-1 border-transparent bg-transparent  border-b-2 border-b-sky-200 peer focus:rounded-md focus:border-solid focus:border focus:ring-0 focus:border-sky-500 outline-none text-base'
              type={confirmInputType}
              placeholder=' '/>
              <button
                      type="button"
                      className="absolute bg-transparent text-lg top-1 right-0 px-2 py-1 bg-gray-300 hover:scale-110 rounded-r cursor-pointer outline-none"
                      onClick={toggleConfirmPasswordVisibility}
                    >
                      {confirmVisible ? <BiSolidHide/> : <BiShow/> }
              </button>
              <label htmlFor="confirmPassword"
              className='absolute text-base text-slate-500 h-2 border-transparent left-2 -top-[3px] transition-all bg-white px-1 duration peer-placeholder-shown:scale-100 peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-2 peer-placeholder-shown:text-slate-500 peer-placeholder-shown: border-x-2 peer-placeholder-shown: border-x-transparent peer-placeholder-shown:text-[16px] peer-focus:text-base peer-focus:-top-[3px] peer-focus:scale-100 border-sky-500 peer-focus:text-slate-500 peer-focus:left-2 peer-focus:border-x-2 peer-focus:border-sky-500 flex items-center peer-focus:h-2'
              >Confirm password</label>
              <div className='min-h-[1.5rem] w-full px-2'>
                {errors.confirmPassword ? ( <span className='text-red-500 text-sm transition-all duration-200'>{errors.confirmPassword.message}</span>):null}
              </div>
            </div>

            <button disabled={isSubmitting} className={`mt-10 bg-blue-500  text-white text-lg font-bold py-2 px-4 rounded ${isSubmitting ? 'opacity-50':'hover:bg-blue-700'}`}>Sign up</button>
          </form>
        </div>

        <div className='hidden w-[500px] lg:block flex-grow bg-white rounded-r-lg overflow-hidden'>
          
            <img className='h-full w-full object-cover ' src="https://besttopets.com/wp-content/uploads/2023/05/White-Pomeranian-Dog-5.jpg" alt="Sign up image" />
            
        </div>
      </div>
   </section>
  )
}

export default SignUpPage