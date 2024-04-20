import { StyledLandingPage } from "./LandingPage.styled.js"
import { Link } from 'react-router-dom'

export default function LandingPage() {
  
    return (
        <StyledLandingPage>
            <h1>Welcome to DungeonGPT</h1>
                <div>
                    <p>
                        A world where ancient magic breathes life into the very earth beneath your feet. Here, every path leads to adventure and every shadow hints at both danger and opportunity. 
                    </p>
                    <p>
                        Engage in vivid encounters with foes whose tactics are as varied as the lands they defend. Prepare to weave your story into the fabric of legends, making choices that echo through the valleys and peaks of this mystical realm.
                    </p>
                    <p>
                        Whether you rise as a hero or fall as a memory, your saga begins now.
                    </p>
                </div>
            <Link id='stepForward' to='/play'>Step Forward</Link>
        </StyledLandingPage>
    )
}