import styled from "styled-components";

export const Information = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${Color.background};
  margin: 0.5em 0;
  width: 16em;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 1em;
`;

export const InputAndTextContainer = styled.div`
  margin: 0.25em 0;
`;

export const Input = styled.input`
  color: ${Color.text};
  display: flex;
  border-width: 1px;
  padding: 0.5em;
  border-radius: 5px;
  font-size: 1em;
  width: 15em;
  background-color: ${Color.background2};
  ${({ failed }) =>
    failed &&
    `
  border-bottom-width: 2px;
  border-bottom-color: ${Color.error};
  `}
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
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-size: 1.5em;
  margin: 0.25em 0;
  padding: 0.5em;
  border: none;
  border-radius: 3px;
  :focus {
    background-color: ${Color.primary2};
    outline: none;
  }
  :hover {
    background-color: ${Color.primary2};
  }
`;