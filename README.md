# DungeonGPT
DungeonGPT is a choose your own (CYO) adventure game built around the ChatGPT API.

[Try it here!](https://dungeon-gpt-sandy.vercel.app/)

### Preview
<img width="1431" alt="image" src="https://github.com/edwin-chalmers/DungeonGPT/assets/149631946/479708a3-569f-452d-96b3-45ad43cdc37f">
<img width="1431" alt="image" src="https://github.com/edwin-chalmers/DungeonGPT/assets/149631946/d273d60d-bbec-42bf-9067-8d2f44f1abee">
<img width="1431" alt="image" src="https://github.com/edwin-chalmers/DungeonGPT/assets/149631946/1ea0a5c2-bdd9-4753-b0c3-0ba47c76548b">

###  Installation
- `fork` this repo and clone it to your local machine
- `cd` into the repo
- `npm install` dependencies
- `npm start` to be automatically redirected to the site

### API Key and .env file
This application runs off a ChatGPT API key and you will need to enter your own for run this application locally.
- Create a `.env` file in your root directory
- Paste `REACT_APP_OPENAI_API_KEY=your-api-key` inot your .env and replace `your-api-key` with your API key
- Add your `.env` to your `.gitignore` file if you plan to push this this repo to GitHub
- Everything should work from there!

## Technologies used
React, React Router, Javascript, JSX, SCSS, Styled Componenets, ChatGPT API, PropTypes, Cypress

## Wins
Implemeting the functionality of the ChatGPT API was a huge win. Once everything starts working, It feels good to have an application that can respond with dynamic and compelling text to engauge the user and dive the narritive 

## Challenges
Implementing the ChatGPT API posed several challenges, including managing secure API authentication, handling asynchronous data fetching, and integrating API responses into the application's interface. Troubleshooting these issues involved setting up a secure environment for API keys, implementing error handling and loading states to maintain responsiveness, and adjusting the frontend logic to parse and present the data effectively.

## Up Next 
I plan to enhance the application by adding subtle animations to improve user interaction and visual engagement. Furthermore, I intend to develop a more robust combat system that bases outcomes on app-generated data rather than the randomness of ChatGPT. This system will use user actions, historical data, and contextual information to create a strategic and predictable combat experience, offering users greater control and a deeper gameplay dynamic.

## Testing
- `cd` into the repo
- run `npx cypress open` to open the testing window
- Click `E2E` testing
- Select your prefered browser and click `Start E2E Testing`

I used Cypress to simulate user interactions. Cypress offers an end-to-end testing framework that allows me to test both happy and sad paths, ensuring our application behaves as expected under various conditions. This includes:

- Thorough testing of application views to ensure each page displays correctly.
- Comprehensive testing of user flows to confirm seamless navigation and functionality.
- Making specific assertions about the content within DOM elements to verify accurate rendering of information.
- Properly stubbing network requests to test interactions with external APIs without reliance on live data.
- Stubbing and testing asynchronous functionality to ensure both expected (happy path) and unexpected (sad path) outcomes are handled correctly.

## Collaborators 
- [Edwin Chalmers](https://github.com/edwin-chalmers)
