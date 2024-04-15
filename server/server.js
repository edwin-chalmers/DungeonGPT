import express from 'express'
import fetch from 'node-fetch';
import 'dotenv/config'


const app = express();

app.use(express.json()); // Middleware to parse JSON bodies

// POST route to handle chat requests
app.post('/chat', async (req, res) => {
    const inputText = req.body.inputText; // Get the input text from the client request
    try {
        console.log('process.env.OPENAI_API_KEY',process.env.OPENAI_API_KEY)
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.OPENAI_API_KEY}` // Use the API key from environment variable
            },
            body: JSON.stringify({
                "model": "gpt-3.5-turbo", // or another model version
                "messages": [{ "role": "user", "content": inputText }],
                "temperature": 0.7
            })
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('apiCalls', data);
        res.json(data); // Send the data back to the client
      
    } catch (error) {
        console.error('Error calling OpenAI API:', error);
        res.status(500).json({ error: error.message }); // Send back a 500 internal server error status
    }
});

// Set the port and start the server
const PORT = process.env.PORT || 3080;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
