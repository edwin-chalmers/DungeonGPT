import { useState, useEffect } from "react";
import { StyledApp, Nav} from "./App.styled";
import ChatLog from "../ChatLog/ChatLog";
import ChatBox from "../ChatBox/ChatBox";
import { getResponse } from "../../apiCalls";


function App() {
  const [messages, setMessages] = useState([]);

  const handleNewMessage = (newMessage) => {
    setMessages(prevMessages => [...prevMessages, newMessage]);
  };


  return (
    <StyledApp className="App">
      <Nav>DungeonGPT</Nav>
        {/* <PlayerInfo>Player</PlayerInfo> */}
      <ChatLog messages={messages} />
      <ChatBox onNewMessage={handleNewMessage} />
    </StyledApp>
  );
}

export default App;
