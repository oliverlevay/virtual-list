
//components
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import { showMenu } from "react-contextmenu/modules/actions";

//states
import None from "./States/None/None";
import LoggingIn from "./States/LoggingIn/LoggingIn"

//books from the library
import Color from "./Library/Constants/Color";
import Api from "./Library/Scripts/Api";
import { setCookie, getCookie, deleteCookie } from "./Library/Scripts/Cookies";
import { Information, InputAndTextContainer, Input, Text, Button, ErrorMessage} from "./Library/Constants/Blocks";

//components
import AddButtonIcon from "./Components/AddButton";

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

const State = {
  none: 'none',
  loggingIn: 'loggingIn',
  registering: 'registering',
  loggedIn: 'loggedIn',
}

const App = () => {
  const [currentState, setCurrentState] = useState(State.none);
  const [username, setUsername] = useState("");
  const [usernameFailed, setUsernameFailed] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordFailed, setPasswordFailed] = useState(false);
  const [password2, setPassword2] = useState("");
  const [email, setEmail] = useState("");
  const [emailFailed, setEmailFailed] = useState(false);
  const [api] = useState(new Api());
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [lists, setLists] = useState(null);
  const [addingList, setAddingList] = useState(false);
  const [newListName, setNewListName] = useState("");
  const [renameId, setRenameId] = useState(null);
  const [renameName, setRenameName] = useState("");

  window.onload = async function () {
    if (await api.GetIsAuthorized()) {
      await loadLists();
      setCurrentState(State.loggedIn);
    }
  };
  const login = async () => {
    var loginResponse = await api.Login(username, password);
    if (loginResponse.success) {
      setCookie("token", loginResponse.token, 100);
      setCookie("tokenDate", Date.now(), 100);
      setCookie("refreshToken", loginResponse.refreshToken, 100);
      await loadLists();
      setCurrentState(State.loggedIn);
    } else {
      setUsernameFailed(true);
      setPasswordFailed(true);
      setError(loginResponse.message);
    }
  };
  const register = async () => {
    if (password !== password2) {
      alert("Passwords don't match");
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
  const addList = async () => {
    var result = await api.AddList(newListName);
    if (!result.success) {
      alert(result.message);
      return;
    } else {
      setNewListName("");
      setAddingList(false);
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
    console.log(listId, listName);
    var result = await api.CloneList(listId, listName);
    if (!result.success) {
      alert(result.message);
    }
    loadLists();
  };
  const loadLists = async () => {
    var response = await api.GetUserLists();
    if (response.success) {
      setLists(
        response.message.sort((a, b) => {
          return a.listid - b.listid;
        })
      );
    } else {
      alert(
        "Fel när listor skölle laddas: " +
          response.message +
          "\nTOKEN: " +
          getCookie("token")
      );
    }
  };
  const cleanUpForms = () => {
    setUsername("");
    setPassword("");
    setUsernameFailed(false);
    setPasswordFailed(false);
    setError("");
  };
  const logout = () => {
    setCurrentState(State.none);
    deleteCookie("token");
    deleteCookie("tokenDate");
    deleteCookie("refreshToken");
  };

  const rename = async () => {
    var result = await api.RenameList(renameId, renameName);
    if (!result.success) {
      alert(result.message);
    }
    await loadLists();
    setRenameId(null);
  };

  const startRenaming = (listId, listName) => {
    setRenameName(listName);
    setRenameId(listId);
  };

  const handleKeyPress = (key) => {
    if (key === "Enter") {
      if (currentState === State.loggingIn) {
        login();
      }
      if (currentState === State.registering) {
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
    if (renameId) {
      document.getElementById(renameId).select();
    }
  }, [renameId]);

  return (
    <Body>
      {currentState === State.loggedIn && (
        <LogoutButtonContainer>
          <LogoutButton onClick={logout}>sign out</LogoutButton>
        </LogoutButtonContainer>
      )}
      <Content>
        {currentState === State.none && (
          <None setCurrentState={setCurrentState}/>
        )}
        {currentState === State.loggingIn && (
          <LoggngIn setCurrentState={setCurrentState}/>
        )}
        {currentState === State.registering && (
          <div>
            <Information>
              <InputAndTextContainer>
                <Text>email:</Text>
                <Input
                  value={email}
                  failed={emailFailed}
                  onChange={(event) => setEmail(event.target.value)}
                ></Input>
                <ErrorMessage>{emailError}</ErrorMessage>
              </InputAndTextContainer>
              <InputAndTextContainer>
                <Text>username:</Text>
                <Input
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                ></Input>
              </InputAndTextContainer>
              <InputAndTextContainer>
                <Text>password:</Text>
                <Input
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                ></Input>
              </InputAndTextContainer>
              <InputAndTextContainer>
                <Text>repeat password:</Text>
                <Input
                  type="password"
                  value={password2}
                  onChange={(event) => setPassword2(event.target.value)}
                  onKeyPress={(event) => handleKeyPress(event.key)}
                ></Input>
              </InputAndTextContainer>
            </Information>
            <Information>
              <Button
                onClick={() => {
                  setCurrentState(State.none);
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
        {currentState === State.loggedIn && (
          <>
            {!addingList && (
              <Information>
                {lists &&
                  lists.map((list) => (
                    <>
                      {renameId === list.listid && (
                        <RenamingList
                          id={renameId}
                          value={renameName}
                          onChange={(event) =>
                            setRenameName(event.target.value)
                          }
                          onKeyPress={(event) => handleKeyPress(event.key)}
                          onBlur={rename}
                        ></RenamingList>
                      )}
                      {renameId !== list.listid && (
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
                    </>
                  ))}
                <AddButton
                  onClick={() => {
                    setAddingList(true);
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
            {addingList && (
              <Information>
                <InputAndTextContainer>
                  <Text>List name:</Text>
                  <Input
                    value={newListName}
                    onChange={(event) => setNewListName(event.target.value)}
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
