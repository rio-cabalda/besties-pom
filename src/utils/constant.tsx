import {TbTruckDelivery} from 'react-icons/tb'
import {MenuItemType,HeadlineItemType} from '../types'
import { BsFillSaveFill } from 'react-icons/bs'
import { AiFillTag } from 'react-icons/ai'
import { MdFavorite, MdHelp } from 'react-icons/md'
import { FaUserFriends, FaWallet } from 'react-icons/fa'


export const menuList:MenuItemType[] = [
    {
        id: 1,
        title: 'Orders',
        icon: <TbTruckDelivery size={25} className='mr-4'/>,
        link: '/orders'
    },
    {
        id: 2,
        title: 'Fevorites',
        icon: <MdFavorite size={25} className='mr-4'/>,
        link: '/fevorites'
    },
    {
        id: 3,
        title: 'Wallet',
        icon: <FaWallet size={25} className='mr-4'/>,
        link: '/wallet'
    },
    {
        id: 4,
        title: 'Help',
        icon: <MdHelp size={25} className='mr-4'/>,
        link: '/help'
    },
    {
        id: 5,
        title: 'Promotions',
        icon: <AiFillTag size={25} className='mr-4'/>,
        link: '/promotions'
    },
    {
        id: 6,
        title: 'Best One',
        icon: <BsFillSaveFill size={25} className='mr-4'/>,
        link: '/best'
    },
    {
        id: 7,
        title: 'Sign in',
        icon: <FaUserFriends size={25} className='mr-4'/>,
        link: '/signin'
    },
]

export const headlineList:HeadlineItemType[] = [
    {
        id: 1,
        title: "Unleash Happiness with Our Pet Products",
        description: "Passionate about pets. Top-notch dog food and dog essentials",
        image: "https://images.unsplash.com/photo-1505628346881-b72b27e84530?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    },
    {
        id: 2,
        title: "Paws and Play: Your One-Stop Pet shop",
        description: "Find your furry friend in one place and make tails wag and hearts purr.",
        image: "https://images.unsplash.com/photo-1617468489389-aa833cdf0473?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
        id: 3,
        title: "Tailored Care for Your Canine Companion",
        description:"We're dedicated to providing the best for your four-legged family member.",
        image: "https://images.unsplash.com/photo-1611173622933-91942d394b04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    }, 
]

export const links = [
    {
      id: 1,
      text: 'home',
      url: '/',
    },
    {
      id: 2,
      text: 'about',
      url: '/about',
    },
    {
      id: 3,
      text: 'products',
      url: '/products',
    },
  ]