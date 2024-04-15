import React, { useState } from 'react';
import axios from 'axios';

function ChatComponent() {
    const [message, setMessage] = useState('');
    const [responses, setResponses] = useState([]);

    const sendMessage = async () => {
        const payload = {
            messages: [{ role: "user", content: message }]
        };
        const response = await axios.post('/api/chat', payload);
        setResponses([...responses, response.data.choices[0].message.content]);
        setMessage('');
    };

    return (
        <div>
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message here..."
            />
            <button onClick={sendMessage}>Send</button>
            <div>
                {responses.map((resp, index) => (
                    <p key={index}>{resp}</p>
                ))}
            </div>
        </div>
    );
}

export default ChatComponent;
