import React from 'react';
import { Navigate } from 'react-router-dom'
import AuthKeycloakService from '../AuthService/AuthKeycloak'
import Login from './Login'


const PrivateRoute = ({children}) => {
  const {  isLoggedIn, kc } = AuthKeycloakService
const { authenticated } = kc
  return isLoggedIn() ? children : <Login/>
  // return !isLoggedIn() ? <Login/> : children
  

};
export default PrivateRoute;
