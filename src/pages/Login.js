import React from "react";
import styled from "styled-components";
import loginImg from "../images/login-img.svg";
import AuthKeycloakService from "../AuthService/AuthKeycloak";
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {
  const { isLoggedIn, doLogin, kc } = AuthKeycloakService;
  const { login } = kc;
  // console.log(kc);

  const navigate = useNavigate();
  const logIn = () => {
    doLogin();
    navigate("/");
  };

  return (
    <Wrapper>
      <div className="container">
        <h1>Hello Anonymous!</h1>
        <p>Please authenticate yourself!</p>
        <img src={loginImg} alt="github user" />
        <h1>github user</h1>
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
