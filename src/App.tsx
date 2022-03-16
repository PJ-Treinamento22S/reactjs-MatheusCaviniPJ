import React from "react";
import SideBar from "./components/sidebar/index";
import GlobalStyles from "./styles/global";
import Feed from "./components/feed/index";
import FriendsBar from "./components/friendsBar/index";
import { Body } from "./style";
import Modal from "./components/modal";

function App() {
  return (
    <Body>
      <GlobalStyles></GlobalStyles>
      <Modal
        p1= "Ops! Parece o que seu piu ainda está vazio..."
        p2="Preencha o campo de texto antes de piar."
        buttonText="Ok"
        display="none"/>
      
      <SideBar />
      <Feed />

      <FriendsBar />
    </Body>
  );
}

export default App;
