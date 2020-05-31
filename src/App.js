import React, { useState, useEffect } from "react";
import styled from "styled-components";
import NightThemeButton from "./Components/NightThemeButton";
import color from "./Library/color";

const Body = styled.div`
  display: flex;
  flex: 1;
  min-height: 100vh;
  background-color: ${(props) => color("background", props.darkMode)};
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const NightThemeButtonContainer = styled.div`
  display: flex;
  position: absolute;
  top: 1em;
  right: 1em;
  flex-direction: row;
`;

const Content = styled.div`
  display: flex;
`;

const Information = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => color("background2", props.darkMode)};
  padding: 1em;
  margin: 1em 0;
  border-radius: 25px;
  min-width: 15em;
`;

const InputAndTextContainer = styled.div`
  margin: 0.5em 0;
`;

const Input = styled.input`
  display: flex;
  padding: 0.5em 0.25em;
  width: 90%;
  border-radius: 5px;
  font-size: 1em;
  background-color: ${(props) => color("background", props.darkMode)};
`;

const Text = styled.div`
  color: ${(props) => color("primary", props.darkMode)};
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-size: 1.5em;
  margin-bottom: 0.5em;
  margin-right: 0.5em;
`;

const Button = styled.button`
  color: ${(props) => color("primary", props.darkMode)};
  background-color: ${(props) => color("background", props.darkMode)};
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-size: 1.5em;
  margin: 0.5em 0;
  padding: 0.5em;
`;

const RowContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [loggingIn, setLoggingIn] = useState(false);
  const [registering, setRegistering] = useState(false);
  return (
    <Body darkMode={darkMode}>
      <NightThemeButtonContainer>
        <Text darkMode={darkMode}>Dark theme</Text>
        <NightThemeButton
          onClick={() => {
            setDarkMode(!darkMode);
          }}
        ></NightThemeButton>
      </NightThemeButtonContainer>

      <Content>
        {!loggingIn && !registering && (
          <div>
            <Information darkMode={darkMode}>
              <Button
                darkMode={darkMode}
                onClick={() => {
                  setLoggingIn(true);
                }}
              >
                login
              </Button>
              <Button
                darkMode={darkMode}
                onClick={() => {
                  setRegistering(true);
                }}
              >
                register
              </Button>
            </Information>
          </div>
        )}
        {loggingIn && (
          <div>
            <Information darkMode={darkMode}>
              <InputAndTextContainer>
                <Text darkMode={darkMode}>email:</Text>
                <Input darkMode={darkMode}></Input>
              </InputAndTextContainer>
              <InputAndTextContainer>
                <Text darkMode={darkMode}>password:</Text>
                <Input type="password" darkMode={darkMode}></Input>
              </InputAndTextContainer>
            </Information>
            <Information darkMode={darkMode}>
              <RowContainer>
                <Button
                  darkMode={darkMode}
                  onClick={() => {
                    setLoggingIn(false);
                  }}
                >
                  back
                </Button>
                <Button darkMode={darkMode}>login</Button>
              </RowContainer>
            </Information>
          </div>
        )}
        {registering && (
          <div>
            <Information darkMode={darkMode}>
              <InputAndTextContainer>
                <Text darkMode={darkMode}>email:</Text>
                <Input darkMode={darkMode}></Input>
              </InputAndTextContainer>
              <InputAndTextContainer>
                <Text darkMode={darkMode}>username:</Text>
                <Input darkMode={darkMode}></Input>
              </InputAndTextContainer>
              <InputAndTextContainer>
                <Text darkMode={darkMode}>password:</Text>
                <Input darkMode={darkMode}></Input>
              </InputAndTextContainer>
              <InputAndTextContainer>
                <Text darkMode={darkMode}>repeat password:</Text>
                <Input darkMode={darkMode}></Input>
              </InputAndTextContainer>
            </Information>
            <Information darkMode={darkMode}>
              <RowContainer>
                <Button
                  darkMode={darkMode}
                  onClick={() => {
                    setRegistering(false);
                  }}
                >
                  back
                </Button>
                <Button darkMode={darkMode}>login</Button>
              </RowContainer>
            </Information>
          </div>
        )}
      </Content>
    </Body>
  );
};

export default App;
