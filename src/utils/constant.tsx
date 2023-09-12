
import {MenuItemType,HeadlineItemType,navLinkType} from '../types';
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