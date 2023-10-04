
import {MenuItemType, navLinkType} from '../types';

import {PiDropboxLogoLight} from 'react-icons/pi';
import {HiOutlineInformationCircle, HiOutlineHome} from 'react-icons/hi2';
// import {FaShoppingCart, FaUserPlus } from 'react-icons/fa';
// import { MdLogin } from 'react-icons/md';

export const sidebarLinks:MenuItemType[] = [
    {
        id: 1,
        title: 'Home',
        icon: <HiOutlineHome />,
        link: '/'
    },
    {
        id: 2,
        title: 'About',
        icon: <HiOutlineInformationCircle />,
        link: '/about'
    },
    {
        id: 3,
        title: 'Products',
        icon: <PiDropboxLogoLight />,
        link: '/products'
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