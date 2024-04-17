import { useState, useEffect } from "react"
import { StyledApp} from "./App.styled.js"
import ChatLog from "../ChatLog/ChatLog.js"
import ChatBox from "../ChatBox/ChatBox.js"
import Nav from "../Nav/Nav.js"



function App() {
  const initialHealth = Array.from({ length: 5 }, (_, i) => (
    <img key={i} src="/assets/heart_icon.svg" alt="heart container" />
  ))

  const [messages, setMessages] = useState([])
  const [health, setHealth] = useState(initialHealth);
  console.log("🚀 ~ App ~ health:", health.length)

  const handleNewMessage = (newMessage) => {
    setMessages(prevMessages => [...prevMessages, newMessage])
  };

  function loseHealthTest() {
    setHealth(health.slice(0,-1))
  }

  function checkForDamage(message) {
    damagePlayer(message)
  }

  function damagePlayer(message) {
    message.toLowerCase().includes("you lose 1 health") && setHealth(health.slice(0,-1))
  }

  useEffect(() => {
    health.length === 0 && handleNewMessage({ content: "You Died <button onClick={window.location.reload()}>Reset Page</button>", role: "assistant" })
  }, [health])


  console.log("🚀 ~ ChatBox ~ messages:", messages)

  return (
    <StyledApp className="App">
      <Nav health={health} loseHealthTest={loseHealthTest}/>
      <ChatLog messages={messages} />
      <ChatBox handleNewMessage={handleNewMessage} messages={messages} checkForDamage={checkForDamage}/>
    </StyledApp>
  );
}

export default App;
