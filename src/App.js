import React, { useState, useEffect } from "react";
import styled from "styled-components";
import NightThemeButton from "./Components/NightThemeButton";
import color from "./Library/color";
import Api from "./Library/Api";
import { setCookie } from "./Library/Cookies";

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
  background-color: ${(props) => color("background", props.darkMode)};
  margin: 0.5em 0;
  width: 16em;
  border-radius: 5px;
`;

const InputAndTextContainer = styled.div`
  margin: 0.25em 0;
`;

const Input = styled.input`
  color: ${(props) => color("text", props.darkMode)};
  display: flex;
  border-width: 1px;
  padding: 0.5em;
  border-radius: 5px;
  font-size: 1em;
  width: 15em;
  background-color: ${(props) => color("background2", props.darkMode)};
  ${({ failed }) =>
    failed &&
    `
  border-bottom-width: 2px;
  border-bottom-color: ${color("error")};
  `}
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
  display: inline-block;
  text-align: center;
  background-color: ${(props) => color("primary", props.darkMode)};
  color: #ffffff;
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-size: 1.5em;
  margin: 0.25em 0;
  padding: 0.5em;
  border: none;
  :focus {
    background-color: ${(props) => color("primary2", props.darkMode)};
    outline: none;
  }
  :hover {
    background-color: ${(props) => color("primary2", props.darkMode)};
  }
`;

const ErrorMessage = styled.div`
  color: ${color("error")};
`;

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [loggingIn, setLoggingIn] = useState(false);
  const [registering, setRegistering] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [usernameFailed, setUsernameFailed] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordFailed, setPasswordFailed] = useState(false);
  const [password2, setPassword2] = useState("");
  const [email, setEmail] = useState("");
  const [emailFailed, setEmailFailed] = useState(false);
  const [api, setApi] = useState(new Api());
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [lists, setLists] = useState(null);

  

  const login = async () => {
    console.log(username, password);
    var loginResponse = await api.Login(username, password);
    if (loginResponse.success) {
      setCookie("token", loginResponse.token, 100);
      setCookie("tokenDate", Date.now(), 100);
      setCookie("refreshToken", loginResponse.refreshToken, 100);
      setApi(new Api());
      await loggedInUpdater();
    } else {
      setUsernameFailed(true);
      setPasswordFailed(true);
      setError(loginResponse.message);
    }
  };

  const register = async () => {
    if (password !== password2) {
      alert("Passwords don't match");
      setPassword("");
      setPassword2("");
    }
    if (!email.includes("@") || !email.includes(".")) {
      setEmailError("That doesn't look like a valid email address");
      setEmailFailed(true);
      return;
    }
    var result = await api.CreateUser(email, username, username, password);

    if (!result.success) {
      alert(result.message);
      return;
    } else {
      alert("successfully created user");
    }
  };

  const loadLists = async () => {
    var response = await api.GetUserLists();
    if (response.success) {
        setLists(response.message);

        console.log(lists);
    }
    else {
        alert("Fel när listor skulle laddas: " + response.message);
    }
}

  const loggedInUpdater = () => {
    setLoggedIn(true);
    setLoggingIn(false);
    loadLists();
  };

  const cleanUpForms = () => {
    setUsername("");
    setPassword("");
    setUsernameFailed(false);
    setPasswordFailed(false);
    setError("");
  };

  return (
    <Body darkMode={darkMode}>
      <NightThemeButtonContainer>
        <Text darkMode={darkMode}>Dark theme</Text>
        <NightThemeButton
          defaultChecked={darkMode}
          onClick={() => {
            setDarkMode(!darkMode);
          }}
        ></NightThemeButton>
      </NightThemeButtonContainer>

      <Content>
        {!loggingIn && !registering && !loggedIn && (
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
                <Text darkMode={darkMode}>email/username:</Text>
                <Input
                  darkMode={darkMode}
                  value={username}
                  failed={usernameFailed}
                  onChange={(event) => setUsername(event.target.value)}
                ></Input>
              </InputAndTextContainer>
              <InputAndTextContainer>
                <Text darkMode={darkMode}>password:</Text>
                <Input
                  type="password"
                  darkMode={darkMode}
                  value={password}
                  failed={passwordFailed}
                  onChange={(event) => setPassword(event.target.value)}
                ></Input>
              </InputAndTextContainer>
              <ErrorMessage>{error}</ErrorMessage>
            </Information>
            <Information darkMode={darkMode}>
              <Button
                darkMode={darkMode}
                onClick={() => {
                  setLoggingIn(false);
                  cleanUpForms();
                }}
              >
                back
              </Button>
              <Button
                darkMode={darkMode}
                onClick={() => {
                  login();
                }}
              >
                login
              </Button>
            </Information>
          </div>
        )}
        {registering && (
          <div>
            <Information darkMode={darkMode}>
              <InputAndTextContainer>
                <Text darkMode={darkMode}>email:</Text>
                <Input
                  darkMode={darkMode}
                  value={email}
                  failed={emailFailed}
                  onChange={(event) => setEmail(event.target.value)}
                ></Input>
                <ErrorMessage>{emailError}</ErrorMessage>
              </InputAndTextContainer>
              <InputAndTextContainer>
                <Text darkMode={darkMode}>username:</Text>
                <Input
                  darkMode={darkMode}
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                ></Input>
              </InputAndTextContainer>
              <InputAndTextContainer>
                <Text darkMode={darkMode}>password:</Text>
                <Input
                  type="password"
                  darkMode={darkMode}
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                ></Input>
              </InputAndTextContainer>
              <InputAndTextContainer>
                <Text darkMode={darkMode}>repeat password:</Text>
                <Input
                  type="password"
                  darkMode={darkMode}
                  value={password2}
                  onChange={(event) => setPassword2(event.target.value)}
                ></Input>
              </InputAndTextContainer>
            </Information>
            <Information darkMode={darkMode}>
              <Button
                darkMode={darkMode}
                onClick={() => {
                  setRegistering(false);
                }}
              >
                back
              </Button>
              <Button
                darkMode={darkMode}
                onClick={() => {
                  register();
                }}
              >
                register
              </Button>
            </Information>
          </div>
        )}
        {loggedIn && lists.map((list) => (
          <h1>{list}</h1>
        ))
      }
      </Content>
    </Body>
  );
};

export default App;
