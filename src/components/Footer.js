import React from 'react';
import styled from 'styled-components';


const Footer = () => {
  const footerYear = new Date().getFullYear()
  return <Wrapper>
    <h4>Copyright &copy; {footerYear} Habeeb Kareem All Rights Reserved.</h4>
  </Wrapper>;
};

const Wrapper = styled.footer`
  padding: 1.5rem;
  margin-bottom: 4rem;
  background: var(--clr-white);
  text-align: center;
  display: grid;
  justify-content: center;
  align-items: center;
  h3 {
    margin-bottom: 0;
    font-weight: 300;
  }
 
`;

export default Footer;
