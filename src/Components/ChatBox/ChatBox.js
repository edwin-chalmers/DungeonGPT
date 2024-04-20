import { useState } from "react"
import PropTypes from "prop-types"
import { EnterButton, StyledChatBox } from "./ChatBox.styled.js"
import { getResponse } from "../../apiCalls.js"
import trainingPrompt from "../../trainingPrompt.js"

export default function ChatBox({ handleNewMessage, messages, checkForDamage, setError, health }) {
  const [text, setText] = useState('')

  const autoGrowTextArea = (event) => {
    setText(event.target.value)
    event.target.style.height = 'auto'
    event.target.style.height = `${event.target.scrollHeight}px`
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault()
      sendMessage()
    }
  }

  function getD100() {
    return Math.floor(Math.random() * 100) + 1;
  } 

  const sendMessage = async () => {
    if (text.trim()) {
      try {
        handleNewMessage({ content: text, role: "user" })
        setText('')
        const apiResponse = await getResponse([ ...messages, { "role": "system", "content": `${trainingPrompt} ${getD100()}` }, { "content": text, "role": "user" }])
  
        if (apiResponse) {
          handleNewMessage({ "content": apiResponse.choices[0].message.content, "role": "assistant" })
          checkForDamage(apiResponse.choices[0].message.content)
        } 
  
      } catch (error) {
        setError(true)
        console.error('Failed to send message:', error)
      }
    }
  }

  return (
    <StyledChatBox>
      <textarea
        onInput={autoGrowTextArea}
        value={text}
        maxLength="988"
        onKeyPress={handleKeyPress}
        placeholder={!messages.length ? `Type "Start" to begin` : ''}
        disabled={health.length === 0}
      ></textarea>
      <EnterButton onClick={sendMessage} disabled={!text.trim() || health.length === 0}>{`>>`}</EnterButton>
    </StyledChatBox>
  );
}

ChatBox.propTypes = {
  health: PropTypes.arrayOf(PropTypes.element).isRequired,
  handleNewMessage: PropTypes.func.isRequired,
  checkForDamage: PropTypes.func.isRequired,
  setError: PropTypes.func.isRequired,
  messages: PropTypes.arrayOf(PropTypes.shape({
    content: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
  })).isRequired,
}