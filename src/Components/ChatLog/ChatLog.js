import { useState } from "react";
import { StyledChatLog } from "./ChatLog.styled.js";
import showdown from 'showdown';

export default function ChatLog({ messages }) {
  console.log("🚀 ~ ChatLog ~ messages:", messages);
  const converter = new showdown.Converter();
  
  return (
    <StyledChatLog>
      {messages.map((msg, index) => {
        const htmlContent = converter.makeHtml(msg.content);
        return (
          <div key={index} className="chat-message">
            <img 
              src={msg.role === "response" ? "/assets/fire_icon.svg" : "/assets/person_icon.svg"} 
              alt={msg.role === "response" ? "DM Icon" : "Player Icon"} 
            />
            {/* Use dangerouslySetInnerHTML to set the HTML content */}
            <div className="message" dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
          </div>
        );
      })}
    </StyledChatLog>
  );
}
