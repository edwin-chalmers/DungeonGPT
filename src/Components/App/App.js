import { useState, useEffect } from "react";
import { StyledApp, Nav} from "./App.styled.js";
import ChatLog from "../ChatLog/ChatLog.js";
import ChatBox from "../ChatBox/ChatBox.js";



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
