import { useState } from "react"
import { EnterButton, StyledChatBox } from "./ChatBox.styled.js"
import { getResponse } from "../../apiCalls.js"
import trainingPrompt from "../../trainingPrompt.js"

export default function ChatBox({ handleNewMessage, messages }) {
  console.log("🚀 ~ ChatBox ~ messages:", messages)
  const [text, setText] = useState('')

  const autoGrowTextArea = (event) => {
    setText(event.target.value)
    event.target.style.height = 'auto'
    event.target.style.height = `${event.target.scrollHeight}px`
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault(); // Prevents the default action of inserting a new line
      sendMessage();
    }
  };
  const sendMessage = async () => {
    if (text.trim()) {
      try {
        handleNewMessage({ content: text, role: "user" })
        setText('')
        const apiResponse = await getResponse([ ...messages, { "role": "system", "content": trainingPrompt }, { "content": text, "role": "user" }]);
    
        if (apiResponse) {
          handleNewMessage({ "content": apiResponse.choices[0].message.content, "role": "assistant" })
        } 
  
      } catch (error) {
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
      ></textarea>
      <EnterButton onClick={sendMessage} disabled={!text.trim()}>{`>>`}</EnterButton>
    </StyledChatBox>
  );
}
