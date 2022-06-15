import Keycloak from "keycloak-js";

const kc = new Keycloak('/keycloak.json');

const initKeycloak = () => {    
    kc.init({
        onLoad: 'check-sso',
      silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html',
      pkceMethod: 'S256',
    })
    .then((authenticated) => {
        alert(authenticated ? 'authenticated' : 'not authenticated');
        if (!authenticated) {
            console.log("user is not authenticated..!");
          }
    }).catch((console.error()) 
        // => {
        // alert('failed to initialize');
        // console.error
    // }
    );
}

// const initKeycloak = (onAuthenticatedCallback) => {
//     _kc.init({
//       onLoad: 'check-sso',
//       silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html',
//       pkceMethod: 'S256',
//     })
//       .then((authenticated) => {
//         if (!authenticated) {
//           console.log("user is not authenticated..!");
//         }
//         onAuthenticatedCallback();
//       })
//       .catch(console.error);
//   };

const doLogin = kc.login;

const doLogout = kc.logout;

const getToken = () => kc.token;

const isLoggedIn = () => !!kc.token;

const updateToken = (successCallback) =>
  kc.updateToken(5)
    .then(successCallback)
    .catch(doLogin);

const getUsername = () => kc.tokenParsed?.preferred_username;

// const hasRole = (roles) => roles.some((role) => _kc.hasRealmRole(role));

const AuthKeycloakService = {
  initKeycloak,
  doLogin,
  doLogout,
  isLoggedIn,
  getToken,
  updateToken,
  getUsername,
//   hasRole,
};

export default AuthKeycloakService;