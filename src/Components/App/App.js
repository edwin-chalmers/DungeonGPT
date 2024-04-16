import { useState, useEffect } from "react"
import { StyledApp} from "./App.styled.js"
import ChatLog from "../ChatLog/ChatLog.js"
import ChatBox from "../ChatBox/ChatBox.js"
import Nav from "../Nav/Nav.js"



function App() {
  const [messages, setMessages] = useState([])
  const [health, setHealth] = useState(new Array(5).fill(<img src="/assets/heart_icon.svg" alt="heart container" />))

  const handleNewMessage = (newMessage) => {
    setMessages(prevMessages => [...prevMessages, newMessage])
  };

  function loseHealth() {
    setHealth(health.slice(0,-1))
  }

  console.log('health.slice(0,1)',health)

  return (
    <StyledApp className="App">
      <Nav health={health} loseHealth={loseHealth}/>
      <ChatLog messages={messages} />
      <ChatBox handleNewMessage={handleNewMessage} messages={messages}/>
    </StyledApp>
  );
}

export default App;
