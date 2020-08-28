import styled from "styled-components";
import Color from "./Color";

export const Information = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${Color.background};
  margin: 0.5em 0;
  padding: 1em;
`;

export const InputAndTextContainer = styled.div`
  margin: 0.25em 0;
`;

export const Input = styled.input`
  max-width: 20em;
  width: 100%;
  height: 3.5em;
  padding: 18px 18px;
  display: block;
  border: 0px;
  border-radius: 8px;
  box-sizing: border-box;
  color: #5f6670;
  font-family: Rubik;
  background-color: #f7f7f9;
  text-align: center;
  font-size: 1.2em;
  resize: none;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
`;

export const Text = styled.div`
  color: ${Color.primary};
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-size: 1.5em;
  margin-bottom: 0.5em;
  margin-right: 0.5em;
`;

export const Button = styled.button`
  width: 100%;
  display: inline-block;
  text-align: center;
  background-color: ${Color.primary};
  color: #ffffff;
  font-family: "Rubik", sans-serif;
  font-weight: 400;
  font-size: 1.1375rem;
  margin-top: 9px;
  padding: 18px;
  border: none;
  border-radius: 2.25rem;
  :focus {
    background-color: ${Color.primary2};
  }
  :hover {
    background-color: ${Color.primary2};
  }
`;

export const ErrorMessage = styled.div`
  color: ${Color.error};
`;
