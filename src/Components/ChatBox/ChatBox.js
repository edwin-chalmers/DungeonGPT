import { useState } from "react"
import { EnterButton, StyledChatBox } from "./ChatBox.styled.js"
import { getResponse } from "../../apiCalls.js"

export default function ChatBox({ handleNewMessage, messages }) {
  console.log("🚀 ~ ChatBox ~ messages:", messages)
  const [text, setText] = useState('')

  const autoGrowTextArea = (event) => {
    setText(event.target.value)
    event.target.style.height = 'auto'
    event.target.style.height = `${event.target.scrollHeight}px`
  };

  const sendMessage = async () => {
    if (text.trim()) {
      try {
        handleNewMessage({ content: text, role: "user" })
        const apiResponse = await getResponse(text)
  
        if (apiResponse) {
          console.log("🚀 ~ sendMessage ~ apiResponse:", apiResponse)
          handleNewMessage({ content: apiResponse.choices[0].message.content, role: "response" })
        } 
  
        setText('')

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
      ></textarea>
      <EnterButton onClick={sendMessage} disabled={!text.trim()}>{`>>`}</EnterButton>
    </StyledChatBox>
  );
}
