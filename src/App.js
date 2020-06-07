import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";

import Color from "./Library/Color";
import Api from "./Library/Api";
import { setCookie, getCookie, deleteCookie } from "./Library/Cookies";

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

const Information = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${Color.background};
  margin: 0.5em 0;
  width: 16em;
  border-radius: 5px;
`;

const InputAndTextContainer = styled.div`
  margin: 0.25em 0;
`;

const Input = styled.input`
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

const Text = styled.div`
  color: ${Color.primary};
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-size: 1.5em;
  margin-bottom: 0.5em;
  margin-right: 0.5em;
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

const ErrorMessage = styled.div`
  color: ${Color.error};
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

const App = () => {
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
  const [api] = useState(new Api());
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [lists, setLists] = useState(null);
  const [addingList, setAddingListItem] = useState(false);
  const [newListName, setNewListName] = useState("");
  const [renamingId, setRenamingId] = useState(null);
  const [renameName, setRenameName] = useState("");

  window.onload = async function () {
    if (await api.GetIsAuthorized()) {
      await loadLists();
      setLoggingIn(false);
      setRegistering(false);
      setLoggedIn(true);
    }
  };
  const login = async () => {
    console.log(username, password);
    var loginResponse = await api.Login(username, password);
    if (loginResponse.success) {
      setCookie("token", loginResponse.token, 100);
      setCookie("tokenDate", Date.now(), 100);
      setCookie("refreshToken", loginResponse.refreshToken, 100);
      await loadLists();
      setLoggingIn(false);
      setRegistering(false);
      setLoggedIn(true);
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
  const addList = async () => {
    var result = await api.AddList(newListName);
    if (!result.success) {
      alert(result.message);
      return;
    } else {
      setNewListName("");
      setAddingListItem(false);
      loadLists();
    }
  };
  const deleteList = async (listId) => {
    var result = await api.DeleteList(listId);
    if (!result.success) {
      alert(result.message);
      return;
    } else {
      loadLists();
    }
  };
  const cloneList = async (listId, listName) => {
    console.log(listId, listName);
    var result = await api.CloneList(listId, listName);
    if (!result.success) {
      alert(result.message);
      return;
    } else {
      loadLists();
    }
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
  const cleanUpForms = () => {
    setUsername("");
    setPassword("");
    setUsernameFailed(false);
    setPasswordFailed(false);
    setError("");
  };
  const logout = () => {
    setLoggedIn(false);
    deleteCookie("token");
    deleteCookie("tokenDate");
    deleteCookie("refreshToken");
  };
  const rename = (listId, listName) => {
    setRenameName(listName);
    setRenamingId(listId);
  };

  useEffect(() => {
    if (renamingId) {
      document.getElementById(renamingId).select();
    }
  }, [renamingId]);

  return (
    <Body>
      <LogoutButtonContainer>
        <LogoutButton onClick={logout}>sign out</LogoutButton>
      </LogoutButtonContainer>
      <Content>
        {!loggingIn && !registering && !loggedIn && (
          <div>
            <Information>
              <Button
                onClick={() => {
                  setLoggingIn(true);
                }}
              >
                login
              </Button>
              <Button
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
                ></Input>
              </InputAndTextContainer>
              <ErrorMessage>{error}</ErrorMessage>
            </Information>
            <Information>
              <Button
                onClick={() => {
                  setLoggingIn(false);
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
        )}
        {registering && (
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
                ></Input>
              </InputAndTextContainer>
            </Information>
            <Information>
              <Button
                onClick={() => {
                  setRegistering(false);
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
        {loggedIn && !addingList && (
          <Information>
            {lists &&
              lists.map((list) => (
                <>
                  {renamingId === list.listid && (
                    <RenamingList
                      id={renamingId}
                      value={renameName}
                      onChange={(event) => setRenameName(event.target.value)}
                    ></RenamingList>
                  )}
                  {renamingId !== list.listid && (
                    <>
                      <ContextMenuTrigger
                        key={list.listid}
                        id={list.listid.toString()}
                      >
                        <Button>{list.listname}</Button>
                        <ListContextMenu id={list.listid.toString()}>
                          <ListContextMenuItem
                            onClick={() => rename(list.listid, list.listname)}
                          >
                            Rename
                          </ListContextMenuItem>
                          <ListContextMenuItem
                            onClick={() => deleteList(list.listid)}
                          >
                            Delete
                          </ListContextMenuItem>
                          <ListContextMenuItem data={{ foo: "bar" }}>
                            Favorite
                          </ListContextMenuItem>
                        </ListContextMenu>
                      </ContextMenuTrigger>
                    </>
                  )}
                </>
              ))}
            <AddButton
              onClick={() => {
                setAddingListItem(true);
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
        {loggedIn && addingList && (
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
              ></Button>
            </InputAndTextContainer>
          </Information>
        )}
      </Content>
    </Body>
  );
};

export default App;
