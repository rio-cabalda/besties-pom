import React from 'react';
// import { isAuthenticated } from "../services/authService";
import { RouteProps } from 'react-router-dom';

type ProtectedRouteProps =  RouteProps & {
    children: React.ReactNode; // Explicitly specify the type
  }

const PrivateRoute: React.FC<ProtectedRouteProps> = ({ children }) => {

// if (!isAuthenticated()) {
//     // User is not authenticated, navigate to the login page
//     return <Navigate to='/signin' />
//   }
   return children;
 }

export default PrivateRoute;