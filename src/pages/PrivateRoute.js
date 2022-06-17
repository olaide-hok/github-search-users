import React from 'react';
import { Navigate } from 'react-router-dom'
import AuthKeycloakService from '../AuthService/AuthKeycloak'
import Login from './Login'

// const {  isLoggedIn, kc } = AuthKeycloakService
// const { authenticated } = kc
// const user = isLoggedIn() && authenticated
// console.log(authenticated)
// console.log(user);


const PrivateRoute = ({children}) => {
  const {  isLoggedIn, kc } = AuthKeycloakService
const { authenticated } = kc
  return authenticated ? children : <Login/>
  // return !isLoggedIn() ? <Login/> : children
  

};
export default PrivateRoute;
