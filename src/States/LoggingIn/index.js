import React from "react";

import {
  Information,
  Button,
  InputAndTextContainer,
  Input,
  Text,
  ErrorMessage,
} from "../../Library/Constants/Blocks";

const LoggingIn = ({
  states,
  updateSuperState,
  State,
  handleKeyPress,
  login,
}) => {
  return (
    <div>
      <Information>
        <InputAndTextContainer>
          <Input
            placeholder="username/email"
            value={states.username}
            failed={states.usernameFailed}
            autoComplete="username"
            onChange={(event) =>
              updateSuperState({ username: event.target.value })
            }
          ></Input>
        </InputAndTextContainer>
        <InputAndTextContainer>
          <Input
            placeholder="password"
            type="password"
            value={states.password}
            failed={states.passwordFailed}
            autoComplete="password"
            onChange={(event) =>
              updateSuperState({ password: event.target.value })
            }
            onKeyPress={(event) => handleKeyPress(event.key)}
          ></Input>
        </InputAndTextContainer>
        <ErrorMessage>{states.error}</ErrorMessage>
      </Information>
      <Information>
        <Button
          onClick={() => {
            updateSuperState({
              currentState: State.none,
              username: "",
              password: "",
              usernameFailed: false,
              passwordFailed: false,
              error: "",
            });
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
};

export default LoggingIn;
