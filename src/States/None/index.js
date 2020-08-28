import React from "react";
import styled from "styled-components";

import Color from "../../Library/Constants/Color";
import { Information, Button } from "../../Library/Constants/Blocks";

const None = ({ updateSuperState }) => {
  return (
    <div>
      <Information>
        <Button
          onClick={() => {
            updateSuperState({ currentState: "loggingIn" });
          }}
        >
          login
        </Button>
        <Button
          onClick={() => {
            updateSuperState({ currentState: "registering" });
          }}
        >
          create account
        </Button>
      </Information>
    </div>
  );
};

export default None;
