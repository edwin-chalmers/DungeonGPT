import { useState } from "react";
import { StyledChatLog } from "./ChatLog.styled.js";

export default function ChatLog({ messages }) {
console.log("🚀 ~ ChatLog ~ messages:", messages)

  
  return (
    <StyledChatLog>
      {messages.map((msg, index) => (
        <div key={index} className="chat-message">
          <img 
            src={msg.type === "response" ? "/assets/fire_icon.svg" : "/assets/person_icon.svg"} 
            alt={msg.type === "response" ? "DM Icon" : "Player Icon"} 
          />
          <div className="message">{msg.content}</div> {/* Ensure this is a string */}
        </div>
      ))}
    </StyledChatLog>
  );
}

