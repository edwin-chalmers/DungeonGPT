import express from 'express'
import fetch from 'node-fetch';
import 'dotenv/config'
import trainingPrompt from './trainingPrompt.js'

const app = express();

app.use(express.json()); // Middleware to parse JSON bodies

// POST route to handle chat requests
app.post('/chat', async (req, res) => {
    const inputText = req.body.inputText; // Get the input text from the client request
    const messages = [
        { "role": "system", "content": trainingPrompt },
        { "role": "user", "content": inputText } 
    ]

    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.OPENAI_API_KEY}` // Use the API key from environment variable
            },
            body: JSON.stringify({
                "model": "gpt-4-turbo", 
                "messages": messages,
                "max_tokens": 500,
                "top_p": 1,
                "temperature": 1

            })
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('apiCalls', data);
        res.json(data); 
      
    } catch (error) {
        console.error('Error calling OpenAI API:', error);
        res.status(500).json({ error: error.message }); 
    }
});

// Set the port and start the server
const PORT = process.env.PORT || 3080;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
