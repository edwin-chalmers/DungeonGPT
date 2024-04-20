import { useState, useEffect } from "react"
import { StyledGamePage } from "./GamePage.styled.js"
import ChatLog from "../ChatLog/ChatLog.js"
import ChatBox from "../ChatBox/ChatBox.js"
import Nav from "../Nav/Nav.js"

export default function GamePage() {
  const initialHealth = Array.from({ length: 5 }, (_, i) => (
    <img key={i} src="/assets/heart_icon.svg" alt="heart container" />
  ))

  const [messages, setMessages] = useState([])
  const [health, setHealth] = useState(initialHealth)
  const [error, setError] = useState(false)

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
    // Add dynamic code to subtract larger then 1 health
  }

  useEffect(() => {
    health.length === 0 && handleNewMessage({ content: "You Died <button onClick={window.location.reload()}>New Game</button>", role: "assistant" })
  }, [health])

  useEffect(() => {
    error && handleNewMessage({ content: "Alas, a slight enchantment has disrupted our realm. Please refresh the page or return shortly to continue your journey.", role: "assistant" })
  }, [error])

  useEffect(() => {
    messages.length >= 50 && setMessages(messages.splice(0, 2))
  }, [messages])


  return (
    <StyledGamePage className="App">
      <Nav health={health} loseHealthTest={loseHealthTest}/>
      <ChatLog messages={messages} />
      <ChatBox 
        handleNewMessage={handleNewMessage} 
        messages={messages} 
        checkForDamage={checkForDamage}
        setError={setError}
        health={health}
      />
    </StyledGamePage>
  );
}


