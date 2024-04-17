import { StyledNav } from "./Nav.styled.js"

export default function Nav({ health, loseHealthTest }) {
    return (
        <StyledNav>
            <h1 onClick={loseHealthTest}>DungeonGPT</h1>
            <div className="health" >{health}</div>
        </StyledNav>
    )
}
