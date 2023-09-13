import { sidebarLinks } from '../utils/constant';
import { AiOutlineClose } from 'react-icons/ai';
import {MenuItemType} from '../types';
import { Link } from 'react-router-dom';

type SidebarType= {
    sidebarOpen: boolean;
    setSidebarOpen: (sidebarOpen:boolean) => void;
    navLink: string;
    setNavLink: (name:string) => void;
}

const Sidebar = ({sidebarOpen,setSidebarOpen, navLink, setNavLink}:SidebarType) => {

    const handleSidebar = (name:string) =>{
        setSidebarOpen(!sidebarOpen);
        setNavLink(name)
      }
  return (
    <div className={sidebarOpen? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-40  duration-300': 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-40  duration-300'}>
        <AiOutlineClose size={30} onClick={()=>setSidebarOpen(!sidebarOpen)}  className='absolute right-4 top-4 cursor-pointer hover:text-red-600 transition-colors duration-300'/>
        <h2 className='text-2xl p-4'>
        Besties <span className='font-bold'>Pom</span>
        </h2>
        <nav>
        <ul className='flex flex-col py-4 text-grey-800'>
            {sidebarLinks.map((item:MenuItemType)=>{
                const {id,title, icon, link} = item
            return (
                <li key={id} className={`${navLink === title.toLocaleLowerCase() ? 'bg-sky-500 bg-opacity-60': 'hover:bg-sky-500 hover:bg-opacity-60'}`}>
                    <Link key={id} to={link}  onClick={()=>handleSidebar(title.toLocaleLowerCase())} className={`w-full text-xl p-4 flex gap-3 justify-start items-center transform duration-300 cursor-pointer ${navLink === title.toLocaleLowerCase() ? 'translate-x-2' : 'hover:translate-x-2'}`}>
                        <span className='text-[20px]'>{icon}</span>
                        <span className='text-lg'>{title}</span>
                    </Link> 
                </li>)
            })}
        </ul>
        </nav>
    </div>
  )
}

export default Sidebar