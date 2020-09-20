import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body{padding:0; margin:0; background-color: #dfe6e9;}
`;

export const Contaniner = styled.div`
  padding-top: 100px;
  margin: 0 auto;
  max-width: 1000px;
  text-align: center;
  font-size: 16px;
  color: #999;
`;

export const Form = styled.form`
  margin: 200px auto;
  max-width: 500px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

export const Button = styled.button`
  margin: 0 auto;
  -webkit-appearance: none;
  border: none;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  &:active,
  &:focus {
    outline: none;
  }
  &:hover {
    color: #fff;
    background-color: #8c7ae6;
    opacity: 0.9;
  }

  width: 127px;
  height: 48px;
  margin-top: 20px;
`;
export const Label = styled.label`
  width: 150px;
  padding: 10px;
  margin: 0;
  box-sizing: border-box;
`;

export const Input = styled.input`
  margin: 20px;
  box-sizing: border-box;
  &:active,
  &:focus {
    outline: none;
    border: 1px solid #97d6eb;
  }
  width: 310px;
  height: 40px;
  background-color: #efefef;
  border-radius: 6px;
  border: 1px solid #dedede;
  padding: 10px;
  margin-top: 3px;
  font-size: 0.9em;
  color: #3a3a3a;
`;

export const Navbar = styled.div`
  position: fixed;
  display: flex;
  width: 100%;
  justify-content: space-around;
  background-color: #8c7ae6;
  align-items: center;
  color: white;
  padding: 0 16px;
  transition: all 300ms ease-in-out;
  z-index: 1;
`;

export const NavbarItem = styled.div`
  padding: 10px;
  border-radius: 4px;
  pointer: cursor;
  &:hover {
    background-color: #9c88ff;
  }
  a {
    text-decoration: none;
    color: white;
  }
`;

export const ContentContainer = styled.div`
  margin: 15px;
  background-color: #bc9ee6;
  border-radius: 15px;
`;
