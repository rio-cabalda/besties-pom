import { FaUser } from 'react-icons/fa';
import { BiSolidHide, BiShow } from 'react-icons/bi';
import {usePasswordToggle, useConfirmPasswordToggle} from '../../hooks';


const SignUpPage = () => {
  const { visible, togglePasswordVisibility, inputType } = usePasswordToggle();
  const { confirmVisible, toggleConfirmPasswordVisibility, confirmInputType } = useConfirmPasswordToggle();

  return (
    <main className='h-screen bg-sky-300 py-16 px-10 '>

        <div className='relative max-w-[1640px] mx-auto  p-4 pt-16 text-xs bg-white sm:w-[95%] flex items-center flex-col rounded-lg shadow-md '>
          <div className='absolute flex justify-center items-end z-10 top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-sky-600 h-20 w-20 rounded-full overflow-hidden border-transparent border-none'>
            <FaUser className='text-white w-16 h-16'/>
          </div>
              <h1 className='text-lg font-bold text-sky-700'>Sign Up Now</h1>
          <form action="" className='w-full flex flex-col justify-center'>
            <div className='mt-3 h-10 relative flex'>
              <input 
              id='firstname'
              className='w-full h-10 border-[2px] border-transparent border-b-2 border-b-sky-200 px-5 peer focus:rounded-md focus:border-solid focus:border-[2px] focus:ring-0 focus:border-sky-500 outline-none'
              type={"text"} 
              placeholder=' '/>
              <label htmlFor="firstname"
              className='absolute text-[12px] text-slate-500 h-2 border-transparent left-2 -top-[3px] transition-all bg-white px-1 duration peer-placeholder-shown:scale-100 peer-placeholder-shown:top-3.5 peer-placeholder-shown:left-2 peer-placeholder-shown:text-slate-500 
              peer-placeholder-shown: border-x-2 peer-placeholder-shown: border-x-transparent peer-placeholder-shown:text-[14px]
              peer-focus:text-[12px] peer-focus:-top-[3px] peer-focus:scale-100 border-sky-500 peer-focus:text-slate-500 peer-focus:left-2 peer-focus:border-x-2 peer-focus:border-sky-500 flex items-center peer-focus:h-2'
              >First name</label>
            </div>

            <div className='mt-3 h-10 relative flex'>
              <input 
              id='lastname'
              className='w-full h-10 border-[2px] border-transparent border-b-2 border-b-sky-200 px-5 peer focus:rounded-md focus:border-solid focus:border-[2px] focus:ring-0 focus:border-sky-500 outline-none'
              type={"text"} 
              placeholder=' '/>
              <label htmlFor="lastname"
              className='absolute text-[12px] text-slate-500 h-2 border-transparent left-2 -top-[3px] transition-all bg-white px-1 duration peer-placeholder-shown:scale-100 peer-placeholder-shown:top-3.5 peer-placeholder-shown:left-2 peer-placeholder-shown:text-slate-500 
              peer-placeholder-shown: border-x-2 peer-placeholder-shown: border-x-transparent peer-placeholder-shown:text-[14px]
              peer-focus:text-[12px] peer-focus:-top-[3px] peer-focus:scale-100 border-sky-500 peer-focus:text-slate-500 peer-focus:left-2 peer-focus:border-x-2 peer-focus:border-sky-500 flex items-center peer-focus:h-2'
              >Last name</label>
            </div>

            <div className='mt-3 h-10 relative flex'>
              <input 
              id='date'
              className='w-full h-10 border-[2px] border-transparent border-b-2 border-b-sky-200 px-5 peer focus:rounded-md focus:border-solid focus:border-[2px] focus:ring-0 focus:border-sky-500 outline-none'
              type={"text"} 
              placeholder=' '/>
              <label htmlFor="date"
              className='absolute text-[12px] text-slate-500 h-2 border-transparent left-2 -top-[3px] transition-all bg-white px-1 duration peer-placeholder-shown:scale-100 peer-placeholder-shown:top-3.5 peer-placeholder-shown:left-2 peer-placeholder-shown:text-slate-500 
              peer-placeholder-shown: border-x-2 peer-placeholder-shown: border-x-transparent peer-placeholder-shown:text-[14px]
              peer-focus:text-[12px] peer-focus:-top-[3px] peer-focus:scale-100 border-sky-500 peer-focus:text-slate-500 peer-focus:left-2 peer-focus:border-x-2 peer-focus:border-sky-500 flex items-center peer-focus:h-2'
              >Birthday</label>
            </div>

            <div className='mt-3 h-10 relative flex'>
              <input 
              id='email'
              className='w-full h-10 border-[2px] border-transparent border-b-2 border-b-sky-200 px-5 peer focus:rounded-md focus:border-solid focus:border-[2px] focus:ring-0 focus:border-sky-500 outline-none'
              type='email' 
              placeholder=' '/>
              <label htmlFor="email"
              className='absolute text-[12px] text-slate-500 h-2 border-transparent left-2 -top-[3px] transition-all bg-white px-1 duration peer-placeholder-shown:scale-100 peer-placeholder-shown:top-3.5 peer-placeholder-shown:left-2 peer-placeholder-shown:text-slate-500 
              peer-placeholder-shown: border-x-2 peer-placeholder-shown: border-x-transparent peer-placeholder-shown:text-[14px]
              peer-focus:text-[12px] peer-focus:-top-[3px] peer-focus:scale-100 border-sky-500 peer-focus:text-slate-500 peer-focus:left-2 peer-focus:border-x-2 peer-focus:border-sky-500 flex items-center peer-focus:h-2'
              >Email</label>
            </div>

            <div className='mt-3 h-10 relative flex'>
              <input 
              id='password'
              className='w-full h-10 border-[2px] border-transparent border-b-2 border-b-sky-200 px-5 peer focus:rounded-md focus:border-solid focus:border-[2px] focus:ring-0 focus:border-sky-500 outline-none'
              type={inputType}
              placeholder=' '/>

              <button
                      type="button"
                      className="absolute bg-transparent text-lg inset-y-0 right-0 px-2 py-1 bg-gray-300 hover:scale-110 rounded-r cursor-pointer"
                      onClick={togglePasswordVisibility}
                    >
                      {visible ? <BiSolidHide/> : <BiShow/> }
              </button>
              <label htmlFor="password"
              className='absolute text-[12px] text-slate-500 h-2 border-transparent left-2 -top-[3px] transition-all bg-white px-1 duration peer-placeholder-shown:scale-100 peer-placeholder-shown:top-3.5 peer-placeholder-shown:left-2 peer-placeholder-shown:text-slate-500 
              peer-placeholder-shown: border-x-2 peer-placeholder-shown: border-x-transparent peer-placeholder-shown:text-[14px]
              peer-focus:text-[12px] peer-focus:-top-[3px] peer-focus:scale-100 border-sky-500 peer-focus:text-slate-500 peer-focus:left-2 peer-focus:border-x-2 peer-focus:border-sky-500 flex items-center peer-focus:h-2'
              >Password</label>
            </div>

            <div className='mt-3 h-10 relative flex'>
              <input 
              id='confirmPassword'
              className='w-full h-10 border-[2px] border-transparent border-b-2 border-b-sky-200 px-5 peer focus:rounded-md focus:border-solid focus:border-[2px] focus:ring-0 focus:border-sky-500 outline-none'
              type={confirmInputType}
              placeholder=' '/>
              <button
                      type="button"
                      className="absolute bg-transparent text-lg inset-y-0 right-0 px-2 py-1 bg-gray-300 hover:scale-110 rounded-r cursor-pointer"
                      onClick={toggleConfirmPasswordVisibility}
                    >
                      {confirmVisible ? <BiSolidHide/> : <BiShow/> }
              </button>
              <label htmlFor="confirmPassword"
              className='absolute text-[12px] text-slate-500 h-2 border-transparent left-2 -top-[3px] transition-all bg-white px-1 duration peer-placeholder-shown:scale-100 peer-placeholder-shown:top-3.5 peer-placeholder-shown:left-2 peer-placeholder-shown:text-slate-500 
              peer-placeholder-shown: border-x-2 peer-placeholder-shown: border-x-transparent peer-placeholder-shown:text-[14px]
              peer-focus:text-[12px] peer-focus:-top-[3px] peer-focus:scale-100 border-sky-500 peer-focus:text-slate-500 peer-focus:left-2 peer-focus:border-x-2 peer-focus:border-sky-500 flex items-center peer-focus:h-2'
              >Confirm password</label>
            </div>

            <button className=' mt-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Sign up</button>
        </form>
      </div>
   
    </main>
  )
}

export default SignUpPage