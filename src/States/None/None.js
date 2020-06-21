import React from "react";
import styled from "styled-components";

import Color from "../../Library/Constants/Color";
import {Information, Button} from '../../Library/Constants/Blocks';


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