import React from "react";
import SideBar from "./components/sidebar/index";
import GlobalStyles from "./styles/global";
import Feed from "./components/feed/index"
import FriendsBar from "./components/friendsBar/index";
import { Body } from "./style";

function App() {
  return (
    <Body>
      <GlobalStyles></GlobalStyles>
      <SideBar/>
      <Feed/>
      
      <FriendsBar/>
    </Body>
  );
}

export default App;
