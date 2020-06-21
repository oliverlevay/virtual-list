//components
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import { showMenu } from "react-contextmenu/modules/actions";

//states
import None from "./States/None";
import LoggingIn from "./States/LoggingIn";

//books from the library
import Color from "./Library/Constants/Color";
import Api from "./Library/Scripts/Api";
import { setCookie, getCookie, deleteCookie } from "./Library/Scripts/Cookies";
import {
  Information,
  InputAndTextContainer,
  Input,
  Text,
  Button,
  ErrorMessage,
} from "./Library/Constants/Blocks";

//components
import AddButtonIcon from "./Components/AddButton";

const State = {
  none: "none",
  loggingIn: "loggingIn",
  registering: "registering",
  loggedIn: "loggedIn",
};

const Body = styled.div`
  display: flex;
  flex: 1;
  min-height: 100vh;
  background-color: ${Color.background};
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  display: flex;
`;

const LogoutButton = styled(Button)`
  font-size: 1em;
`;

const LogoutButtonContainer = styled.div`
  display: flex;
  position: absolute;
  top: 1em;
  left: 1em;
  flex-direction: row;
`;

const AddButton = styled.button`
  display: flex;
  align-self: center;
  padding: 0;
  border: 0;
  border-radius: 5px;
`;

const RenamingList = styled.input`
  width: 100%;
  display: inline-block;
  text-align: center;
  background-color: ${Color.primary};
  color: #ffffff;
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-size: 1.5em;
  margin: 0.25em 0;
  padding: 0.5em 0;
  border: none;
  border-radius: 3px;
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const ListButton = styled(Button)`
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`;

const OpenContextMenuButton = styled(Button)`
  display: flex;
  width: 10%;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  padding: 0;
`;

const ListContextMenu = styled(ContextMenu)`
  background-color: ${Color.background};
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.75);
`;

const ListContextMenuItem = styled(MenuItem)`
  padding: 1em;
  user-select: none;
  cursor: pointer;
  :hover {
    background-color: ${Color.primary2};
  }
  :focus {
    outline: none;
  }
`;

const ThreeDots = styled.p`
  transform: rotate(90deg);
  white-space: nowrap;
  display: block;
  margin: 0;
  padding: 0.5em;
`;

const App = () => {
  //#region SuperState
  const [states, setStates] = useState({
    currentState: State.none,
    username: "",
    usernameFailed: false,
    password: "",
    passwordFailed: false,
    password2: "",
    email: "",
    emailFailed: false,
    error: "",
    emailError: "",
    addingList: false,
    newListName: "",
    renameId: null,
    renameName: "",
  });
  function updateSuperState({
    currentState = states.currentState,
    username = states.username,
    usernameFailed = states.usernameFailed,
    password = states.password,
    passwordFailed = states.passwordFailed,
    password2 = states.password2,
    email = states.email,
    emailFailed = states.emailFailed,
    error = states.error,
    emailError = states.emailError,
    addingList = states.addingList,
    newListName = states.newListName,
    renameId = states.renameId,
    renameName = states.renameName,
  } = {}) {
    setStates({
      currentState: currentState,
      username: username,
      usernameFailed: usernameFailed,
      password: password,
      passwordFailed: passwordFailed,
      password2: password2,
      email: email,
      emailFailed: emailFailed,
      error: error,
      emailError: emailError,
      addingList: addingList,
      newListName: newListName,
      renameId: renameId,
      renameName: renameName,
    });
  }
  //#endregion
  const [lists, setLists] = useState(null);
  const [api] = useState(new Api());
  window.onload = async function () {
    if (await api.GetIsAuthorized()) {
      await loadLists();
      updateSuperState({ currentState: State.loggedIn });
    }
  };
  const login = async () => {
    var loginResponse = await api.Login(states.username, states.password);
    if (loginResponse.success) {
      setCookie("token", loginResponse.token, 100);
      setCookie("tokenDate", Date.now(), 100);
      setCookie("refreshToken", loginResponse.refreshToken, 100);
      await loadLists();
      updateSuperState({ currentState: State.loggedIn });
    } else {
      updateSuperState({
        usernameFailed: true,
        passwordFailed: true,
        error: loginResponse.message,
      });
    }
  };
  const register = async () => {
    if (states.password !== states.password2) {
      alert("Passwords don't match");
    }
    if (!states.email.includes("@") || !states.email.includes(".")) {
      updateSuperState({
        emailError: "That doesn't look like a valid email address",
        emailFailed: true,
      });
      return;
    }
    var result = await api.CreateUser(
      states.email,
      states.username,
      states.username,
      states.password
    );

    if (!result.success) {
      alert(result.message);
      return;
    } else {
      alert("successfully created user");
    }
  };
  const addList = async () => {
    var result = await api.AddList(states.newListName);
    if (!result.success) {
      alert(result.message);
      return;
    } else {
      updateSuperState({ newListName: "", addingList: false });
      loadLists();
    }
  };
  const deleteList = async (listId) => {
    var result = await api.DeleteList(listId);
    if (!result.success) {
      alert(result.message);
    }
    loadLists();
  };
  const cloneList = async (listId, listName) => {
    var result = await api.CloneList(listId, listName);
    if (!result.success) {
      alert(result.message);
    }
    loadLists();
  };
  const loadLists = async () => {
    var response = await api.GetUserLists();
    if (response.success) {
      setLists(response.message);
    } else {
      alert(
        "Fel när listor skölle laddas: " +
          response.message +
          "\nTOKEN: " +
          getCookie("token")
      );
    }
  };

  const logout = () => {
    updateSuperState({ currentState: State.none });
    deleteCookie("token");
    deleteCookie("tokenDate");
    deleteCookie("refreshToken");
  };

  const rename = async () => {
    var result = await api.RenameList(states.renameId, states.renameName);
    if (!result.success) {
      alert(result.message);
    }
    await loadLists();
    updateSuperState({ renameId: null });
  };

  const startRenaming = (listId, listName) => {
    updateSuperState({ renameName: listName, renameId: listId });
  };

  const handleKeyPress = (key) => {
    if (key === "Enter") {
      if (states.currentState === State.loggingIn) {
        login();
      }
      if (states.currentState === State.registering) {
        register();
      }
    }
  };

  const openContextMenu = (event, id) => {
    const x = event.clientX;
    const y = event.clientY;
    console.log(x, y, event);
    showMenu({
      position: { x, y },
      target: event.target,
      id: id,
    });
  };

  useEffect(() => {
    if (states.renameId) {
      document.getElementById(states.renameId).select();
    }
  }, [states.renameId]);

  return (
    <Body>
      {states.currentState === State.loggedIn && (
        <LogoutButtonContainer>
          <LogoutButton onClick={logout}>sign out</LogoutButton>
        </LogoutButtonContainer>
      )}
      <Content>
        {states.currentState === State.none && (
          <None updateSuperState={updateSuperState} />
        )}
        {states.currentState === State.loggingIn && (
          <LoggingIn
            states={states}
            updateSuperState={updateSuperState}
            State={State}
            handleKeyPress={handleKeyPress}
            login={login}
          />
        )}
        {states.currentState === State.registering && (
          <div>
            <Information>
              <InputAndTextContainer>
                <Text>email:</Text>
                <Input
                  value={states.email}
                  failed={states.emailFailed}
                  onChange={(event) =>
                    updateSuperState({ email: event.target.value })
                  }
                ></Input>
                <ErrorMessage>{states.emailError}</ErrorMessage>
              </InputAndTextContainer>
              <InputAndTextContainer>
                <Text>username:</Text>
                <Input
                  value={states.username}
                  onChange={(event) =>
                    updateSuperState({ username: event.target.value })
                  }
                ></Input>
              </InputAndTextContainer>
              <InputAndTextContainer>
                <Text>password:</Text>
                <Input
                  type="password"
                  value={states.password}
                  onChange={(event) =>
                    updateSuperState({ password: event.target.value })
                  }
                ></Input>
              </InputAndTextContainer>
              <InputAndTextContainer>
                <Text>repeat password:</Text>
                <Input
                  type="password"
                  value={states.password2}
                  onChange={(event) =>
                    updateSuperState({ password2: event.target.value })
                  }
                  onKeyPress={(event) => handleKeyPress(event.key)}
                ></Input>
              </InputAndTextContainer>
            </Information>
            <Information>
              <Button
                onClick={() => {
                  updateSuperState({ currentState: State.none });
                }}
              >
                back
              </Button>
              <Button
                onClick={() => {
                  register();
                }}
              >
                register
              </Button>
            </Information>
          </div>
        )}
        {states.currentState === State.loggedIn && (
          <>
            {!states.addingList && (
              <Information>
                {lists.length > 1 &&
                  lists.map((list) => (
                    <React.Fragment
                      key={`addinglist mapping ${list.listid}+${list.listname}`}
                    >
                      {states.renameId === list.listid && (
                        <RenamingList
                          id={states.renameId}
                          value={states.renameName}
                          onChange={(event) =>
                            updateSuperState({ renameName: event.target.value })
                          }
                          onKeyPress={(event) => handleKeyPress(event.key)}
                          onBlur={rename}
                        ></RenamingList>
                      )}
                      {states.renameId !== list.listid && (
                        <ContextMenuTrigger
                          key={list.listid}
                          id={list.listid.toString()}
                        >
                          <ListContainer>
                            <ListButton>{list.listname}</ListButton>
                            <OpenContextMenuButton
                              onClick={(event) =>
                                openContextMenu(event, list.listid.toString())
                              }
                            >
                              <ThreeDots>...</ThreeDots>
                            </OpenContextMenuButton>
                          </ListContainer>
                          <ListContextMenu id={list.listid.toString()}>
                            <ListContextMenuItem
                              onClick={() =>
                                startRenaming(list.listid, list.listname)
                              }
                            >
                              Rename
                            </ListContextMenuItem>
                            <ListContextMenuItem
                              onClick={() => deleteList(list.listid)}
                            >
                              Delete
                            </ListContextMenuItem>
                          </ListContextMenu>
                        </ContextMenuTrigger>
                      )}
                    </React.Fragment>
                  ))}
                <AddButton
                  onClick={() => {
                    updateSuperState({ addingList: true });
                  }}
                >
                  <AddButtonIcon
                    width="60"
                    height="60"
                    color={Color.primary}
                  ></AddButtonIcon>
                </AddButton>
              </Information>
            )}
            {states.addingList && (
              <Information>
                <InputAndTextContainer>
                  <Text>List name:</Text>
                  <Input
                    value={states.newListName}
                    onChange={(event) =>
                      updateSuperState({ newListName: event.target.value })
                    }
                  ></Input>
                  <Button
                    onClick={() => {
                      addList();
                    }}
                  >
                    add
                  </Button>
                </InputAndTextContainer>
              </Information>
            )}
          </>
        )}
      </Content>
    </Body>
  );
};

export default App;
