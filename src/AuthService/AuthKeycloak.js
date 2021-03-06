import Keycloak from "keycloak-js";

const kc = new Keycloak('/keycloak.json');

/**
 * Initializes Keycloak instance and calls the provided callback function if successfully authenticated.
 *
 * @param onAuthenticatedCallback
 */

const initKeycloak = (onAuthenticatedCallback) => {
    kc.init({
      onLoad: 'check-sso',
      silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html',
      pkceMethod: 'S256',
    })
      .then(() => {
        // if (!authenticated) {
        //   console.log("user is not authenticated..!");
        // }
        // onAuthenticatedCallback();
      })
      .catch(console.error);
  };

const doLogin = kc.login;

const doLogout = kc.logout;

const getToken = () => kc.token;

const isLoggedIn = () => !!kc.token;

const updateToken = (successCallback) =>
  kc.updateToken(5)
    .then(successCallback)
    .catch(doLogin);

const getUsername = () => kc.tokenParsed?.preferred_username;


const AuthKeycloakService = {
  initKeycloak,
  doLogin,
  doLogout,
  isLoggedIn,
  getToken,
  updateToken,
  getUsername,
  kc
};

export default AuthKeycloakService;