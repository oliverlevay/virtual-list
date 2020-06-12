import React from "react";
import styled from "styled-components";

import Color from "../../Library/Constants/Color";

const Information = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${Color.background};
  margin: 0.5em 0;
  width: 16em;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 1em;
`;

const Button = styled.button`
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


const None = ({setCurrentState}) => {
    return(
        <div>
        <Information>
          <Button
            onClick={() => {
              setCurrentState('loggingIn');
            }}
          >
            login
          </Button>
          <Button
            onClick={() => {
              setCurrentState('registering');
            }}
          >
            register
          </Button>
        </Information>
      </div>
    );
}

export default None;