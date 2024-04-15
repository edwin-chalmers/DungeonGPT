import { useState } from "react";
import { EnterButton, StyledChatBox } from "./ChatBox.styled";
import { getResponse } from "../../apiCalls"

export default function ChatBox({ onNewMessage }) {
  const [text, setText] = useState('');

  const autoGrowTextArea = (event) => {
    setText(event.target.value);
    event.target.style.height = 'auto';
    event.target.style.height = `${event.target.scrollHeight}px`;
  };

  const sendMessage = async () => {
    if (text.trim()) {
      try {
        // Add user message to the messages state before getting the response
        onNewMessage({ content: text, type: "user" });
  
        // Use getResponse function to get the API response
        const apiResponse = await getResponse(text);
  
        // Check if the API response is not null
        if (apiResponse) {
          console.log("🚀 ~ sendMessage ~ apiResponse:", apiResponse)
          // Add API response to the messages state
          onNewMessage({ content: apiResponse.choices[0].message.content, type: "response" });
        } else {
          // Handle null response here, e.g., show an error message to the user
        }
  
        setText(''); // Clear the text area
      } catch (error) {
        console.error('Failed to send message:', error);
        // Optionally, handle the error for the user interface
      }
    }
  };

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
