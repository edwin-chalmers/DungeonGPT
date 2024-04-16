import { StyledNav } from "./Nav.styled.js"

export default function Nav({ health, loseHealth }) {
    return (
        <StyledNav>
            <h1 onClick={loseHealth}>DungeonGPT</h1>
            <div>{health}</div>
        </StyledNav>
    )
}
