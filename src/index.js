import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { GithubProvider } from './context/context';
import AuthKeycloakService from './AuthService/AuthKeycloak';
import { configure } from './context/context'


const renderApp = ReactDOM.render(
  <React.StrictMode>
    <GithubProvider>
      <App />
    </GithubProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

AuthKeycloakService.initKeycloak(renderApp);
configure()

