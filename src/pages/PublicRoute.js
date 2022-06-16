import React from 'react';
import { Navigate } from 'react-router-dom'
import AuthKeycloakService from '../AuthService/AuthKeycloak'

// const {  isLoggedIn, kc } = AuthKeycloakService
//   const { authenticated } = kc
//   console.log(authenticated);
const PublicRoute = ({children}) => {
    // return !AuthKeycloakService.isLoggedIn() ? children : null
  
};
export default PublicRoute;
