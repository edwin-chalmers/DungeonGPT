// export const getResponse = async (inputText) => {
//     try {
//       const response = await fetch('https://api.openai.com/v1/chat/completions', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer `
//         },
//         body: JSON.stringify({
//           "model": "gpt-3.5-turbo", // or another model version
//           "messages": [{ "role": "user", "content": inputText }],
//           "temperature": 0.7
//         })
//       });
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       const data = await response.json();
//       console.log('apiCalls', data); // Use the stored data for logging or other purposes
//       return data;
      
//     } catch (error) {
//       console.error('Error calling OpenAI API:', error);
//       return null;
//     }
//   };
  
export const getResponse = async (messages) => {
  console.log("🚀 ~ getResponse ~ messages:", messages)
  try {
    const response = await fetch('/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ messages })  // Sending the array of messages
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error posting chat message:', error)
  }
}