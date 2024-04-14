import { StyledApp, Nav} from "./App.styled";
import ChatLog from "../ChatLog/ChatLog";
import ChatBox from "../ChatBox/ChatBox";


function App() {
  
  return (
    <StyledApp className="App">
      <Nav>DungeonGPT</Nav>
        {/* <PlayerInfo>Player</PlayerInfo> */}
      <ChatLog />
      <ChatBox />
    </StyledApp>
  );
}

export default App;
