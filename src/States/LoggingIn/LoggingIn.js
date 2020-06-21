import React from "react";
import styled from "styled-components";

import Color from "../../Library/Constants/Color";
import {Information, Button, InputAndTextContainer, Input, Text, ErrorMessage} from '../../Library/Constants/Blocks';

const LoggingIn = ({setCurrentState, State, username, usernameFailed, password, passwordFailed, setUsername, setPassword, handleKeyPress, setCurrentState, cleanUpForms, login, error}) => {
    return(
        <div>
        <Information>
          <InputAndTextContainer>
            <Text>email/username:</Text>
            <Input
              value={username}
              failed={usernameFailed}
              autoComplete="username"
              onChange={(event) => setUsername(event.target.value)}
            ></Input>
          </InputAndTextContainer>
          <InputAndTextContainer>
            <Text>password:</Text>
            <Input
              type="password"
              value={password}
              failed={passwordFailed}
              autoComplete="password"
              onChange={(event) => setPassword(event.target.value)}
              onKeyPress={(event) => handleKeyPress(event.key)}
            ></Input>
          </InputAndTextContainer>
          <ErrorMessage>{error}</ErrorMessage>
        </Information>
        <Information>
          <Button
            onClick={() => {
              setCurrentState(State.none);
              cleanUpForms();
            }}
          >
            back
          </Button>
          <Button
            type="submit"
            onClick={() => {
              login();
            }}
          >
            login
          </Button>
        </Information>
      </div>
    );
}

export default LoggingIn;