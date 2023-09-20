
import {MenuItemType, navLinkType} from '../types';
import { ImHome } from 'react-icons/im';
import {FaBoxOpen, FaShoppingCart, FaUserPlus, FaInfoCircle} from 'react-icons/fa';

export const sidebarLinks:MenuItemType[] = [
    {
        id: 1,
        title: 'Home',
        icon: <ImHome />,
        link: '/'
    },
    {
        id: 2,
        title: 'About',
        icon: <FaInfoCircle />,
        link: '/about'
    },
    {
        id: 3,
        title: 'Products',
        icon: <FaBoxOpen />,
        link: '/products'
    },
    {
        id: 4,
        title: 'Cart',
        icon: <FaShoppingCart />,
        link: '/cart'
    },
    {
        id: 5,
        title: 'Sign in',
        icon: <FaUserPlus />,
        link: '/signin'
    },
]

export const navLinks: navLinkType[] = [
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

export const services = [
    {
        title: 'Pet Supplies & Accessories',
        description: ' Explore our wide range of high-quality pet supplies and accessories. From premium pet food to comfy beds and stylish collars, we have everything your pet needs for a happy and healthy life.',
        photoStyle:'card-photo-front-1',
        spanStyle:'card-span-1',
        action: 'order now',

    },
    {
        
        title: 'Pet Grooming Services',
        description: 'Treat your furry friend to a spa day with our professional pet grooming services. Our expert groomers will pamper your pet, leaving them feeling and looking their best.',
        photoStyle:'card-photo-front-2',
        spanStyle:'card-span-2',
        action: 'book now',
    },
    {
        
        title: 'Veterinary Care & Check-ups',
        description: "Keep your pet in top-notch health with our veterinary care services. Our experienced veterinarians provide regular check-ups, vaccinations, and expert care to ensure your pet's well-being.",
        photoStyle:'card-photo-front-3',
        spanStyle:'card-span-3',
        action: 'contact us now',
    },
]