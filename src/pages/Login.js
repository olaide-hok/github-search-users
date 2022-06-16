import React from "react";
import styled from "styled-components";
import loginImg from "../images/login-img.svg";
import AuthKeycloakService from "../AuthService/AuthKeycloak";

const Login = () => {
  const { doLogin, kc } = AuthKeycloakService;
  // {redirectUri: 'http://localhost:3000'}
  const {authenticated} = kc
  console.log(authenticated);

  return (
    <Wrapper>
      <div className="container">
        <h1>Hello And Welcome to github users.</h1>
        <img src={loginImg} alt="github user" />
        <h4>Please authenticate yourself!</h4>
        <button className="btn" onClick={() => doLogin()}>
          login / sign up
        </button>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  .container {
    width: 90vw;
    max-width: 600px;
    text-align: center;
  }
  img {
    margin-bottom: 2rem;
  }
  h1 {
    margin-bottom: 1.5rem;
  }
`;
export default Login;
