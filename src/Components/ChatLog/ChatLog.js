import { useState, useRef, useEffect } from "react";
import { StyledChatLog } from "./ChatLog.styled.js";
import showdown from 'showdown';

export default function ChatLog({ messages }) {
  const converter = new showdown.Converter()
  const endOfMessagesRef = useRef(null)

  useEffect(() => {
    if (endOfMessagesRef.current) {
      endOfMessagesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);
  
  return (
    <StyledChatLog>
      {messages.map((msg, index) => {
        const htmlContent = converter.makeHtml(msg.content)
        return (
          <div key={index} className="chat-message">
            <img 
              src={msg.role === "assistant" ? "/assets/fire_icon.svg" : "/assets/person_icon.svg"} 
              alt={msg.role === "assistant" ? "DM Icon" : "Player Icon"} 
            />
            <div className="message" dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
          </div>
        );
      })}
      <div ref={endOfMessagesRef} />
    </StyledChatLog>
  );
}
