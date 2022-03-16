import React, { createContext, useState } from "react";
import SideBar from "./components/sidebar/index";
import GlobalStyles from "./styles/global";
import Feed from "./components/feed/index";
import FriendsBar from "./components/friendsBar/index";
import { Body } from "./style";
import Modal from "./components/modal";

interface DisplayContextData {
  setDisplay: React.Dispatch<React.SetStateAction<string[]>>;
}
export const DisplayContext = createContext({} as DisplayContextData);

function App() {
  const [display, setDisplay] = useState(["none", "", ""]);

  return (
    <Body>
      <GlobalStyles></GlobalStyles>
      <DisplayContext.Provider value={{ setDisplay }}>
        <Modal
          p1={display[1]}
          p2={display[2]}
          buttonText="Ok"
          display={display[0]}
        />
      </DisplayContext.Provider>

      <SideBar />
      <DisplayContext.Provider value={{ setDisplay }}>
        <Feed />
      </DisplayContext.Provider>

      <FriendsBar />
    </Body>
  );
}

export default App;
