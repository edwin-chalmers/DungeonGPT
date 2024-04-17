import express from 'express'
import fetch from 'node-fetch';
import 'dotenv/config'
// import trainingPrompt from '../public/assets/trainingPrompt.js'

const app = express();

app.use(express.json()); // Middleware to parse JSON bodies

// POST route to handle chat requests
app.post('/chat', async (req, res) => {
    const { messages } = req.body;
    console.log("Received messages for processing:", messages);

    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
            },
            body: JSON.stringify({
                "model": "gpt-3.5-turbo",
                "messages": messages,
                "max_tokens": 500,
                "top_p": 1,
                "temperature": 1
            })
        });

        if (!response.ok) {
            const errorResponse = await response.text();  // Get error details from the response
            console.error("Error response from OpenAI:", errorResponse);
            throw new Error(`HTTP error! status: ${response.status}, details: ${errorResponse}`);
        }

        const data = await response.json();
        console.log("Response data from OpenAI:", data);
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
