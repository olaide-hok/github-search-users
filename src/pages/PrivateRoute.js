import React from 'react';
import { Navigate } from 'react-router-dom'
import AuthKeycloakService from '../AuthService/AuthKeycloak'

const {  isLoggedIn, kc } = AuthKeycloakService
const { authenticated } = kc
const user = isLoggedIn() && authenticated
console.log(authenticated)
console.log(user);


const PrivateRoute = ({children}) => {
  // return authenticated ? children :null
  // return AuthKeycloakService.isLoggedIn() ? children : null
  // <Navigate to='/login' />

  if (!isLoggedIn()) {
    return <Navigate to='/login' />
    // return children
  }
  // return null
  return children
  

};
export default PrivateRoute;
