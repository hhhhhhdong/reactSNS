import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body{padding:0; margin:0; background-color: #dfe6e9;}
`;
export const Contaniner = styled.div`
  padding-top: 6.25rem;
  margin: 0 auto;
  max-width: 43.75rem;
  text-align: center;
`;

export const Form = styled.form`
  width: 100%;
  margin: 12.5rem auto;
  max-width: 31rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  font-size: 0.9rem;
`;

export const InputContainer = styled.div`
display: flex;
justify-content: space:around;
flex-wrap: wrap;
`;

export const Label = styled.label`
  width: 10em;
  padding: 0.714em;
  margin: 0;
  box-sizing: border-box;
`;

export const Input = styled.input`
  margin: 1.429em;
  margin-top: 0.214em;
  box-sizing: border-box;
  &:active,
  &:focus {
    outline: none;
    border: 1px solid #97d6eb;
  }
  width: 22.143em;
  height: 2.857em;
  background-color: #efefef;
  border-radius: 6px;
  border: 1px solid #dedede;
  padding: 0.714em;

  color: #3a3a3a;
`;

export const TextArea = styled.textarea`
  margin: 1.429em;
  box-sizing: border-box;
  &:active,
  &:focus {
    outline: none;
    border: 1px solid #97d6eb;
  }
  background-color: #efefef;
  border-radius: 6px;
  border: 1px solid #dedede;
  padding: 0.714em;
  margin-top: 0.214em;

  color: #3a3a3a;
  width: 22.143em;
  max-width: 22.143em;
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

  width: 11em;
  height: 3em;
  margin-top: 1.429em;
`;
export const Navbar = styled.div`
  font-size: 1.2rem;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #8c7ae6;
  color: white;
  padding: 0 0.9em;
  z-index: 1;
`;
export const NavbarContainer = styled.div`
  margin: 0 auto;
  display: flex;
  max-width: 58em;
  justify-content: space-around;
  align-items: center;
  padding: 0 0.9em;
`;

export const NavbarItem = styled.div`
  text-align: center;
  width: 6em;
  height: 2.5em;
  line-height: 2.5em;
  text-algin: center;
  padding: 0.5em;
  border-radius: 4px;
  pointer: cursor;
  &:hover {
    background-color: #9c88ff;
  }
  a {
    text-decoration: none;
    color: white;
    padding: 1em;
  }
`;

export const LogoutButton = styled.button`
  -webkit-appearance: none;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  &:active,
  &:focus {
    outline: none;
  }
  &:hover {
    color: #fff;
    opacity: 0.9;
  }
  background-color: transparent;
  font-size: 1rem;
`;

export const ContentContainer = styled.div`
  margin: 20px;
  padding: 20px;
  color: black;
  background-color: #bc9ee6;
  border-radius: 15px;
  transition: all 200ms ease-in-out;
  &:hover {
    transform: scale(1.07);
  }
`;

export const ContentHeader = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: nowrap;
`;

export const ContentTitle = styled.div`
  font-weight: 600;
  font-size: 1.2rem;
  text-align: left;
  margin: 18px;
`;
export const ContentContent = styled.div`
  text-align: left;
  margin: 18px;
`;

export const ComentForm = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
}
`;

export const ComentLabel = styled.label`
  margin-left: 1em;
  width: 6em;
  box-sizing: border-box;
`;

export const ComentInput = styled.input`
  box-sizing: border-box;
  &:active,
  &:focus {
    outline: none;
    border: 1px solid #97d6eb;
  }
  width: 30em;
  height: 2.857em;
  background-color: #efefef;
  border-radius: 6px;
  border: 1px solid #dedede;
  color: #3a3a3a;
`;

export const ComentButton = styled.button`
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
  margin-right: 2em;
  width: 8em;
  height: 3em;
`;

export const ComentContainer = styled.div`
  color: black;
  background-color: #bc9ee6;
  border-radius: 15px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 1em auto;
  width: 30em;
  height: 2em;
`;
