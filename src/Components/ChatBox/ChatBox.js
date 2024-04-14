import { useState } from "react"
import { EnterButton, StyledChatBox } from "./ChatBox.styled"

export default function ChatBox() {
  const [text, setText] = useState('')

  const autoGrowTextArea = (event) => {
    setText(event.target.value)
    event.target.style.height = 'auto'
    event.target.style.height = `${event.target.scrollHeight}px`
  }  

  return (
    <StyledChatBox>
      <textarea onInput={autoGrowTextArea} value={text} maxLength="988"></textarea> {/* Add onInput event handler */}
      <EnterButton disabled={!text}>{`>>`}</EnterButton>
    </StyledChatBox>
  )
}