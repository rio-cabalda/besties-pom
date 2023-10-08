import React from 'react';
import { RouteProps, Navigate } from 'react-router-dom';
import useAuthStore from '../store/authStore';

type PrivateRouteProps =  RouteProps & {
    children: React.ReactNode; // Explicitly specify the type
  }

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const {isAuthenticated} = useAuthStore();
if (!isAuthenticated) {
    // User is not authenticated, navigate to the login page
    return <Navigate to='/' />
  }
  return children;
}

export default PrivateRoute;