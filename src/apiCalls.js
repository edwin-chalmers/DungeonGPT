export const getResponse = async (inputText) => {
    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer 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`
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
      console.log('apiCalls', data); // Use the stored data for logging or other purposes
      return data;
      
    } catch (error) {
      console.error('Error calling OpenAI API:', error);
      return null;
    }
  };
  