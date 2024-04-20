import PropTypes from "prop-types"
import { StyledNav } from "./Nav.styled.js"

export default function Nav({ health, loseHealthTest }) {
    return (
        <StyledNav>
            <h1 onClick={loseHealthTest}>DungeonGPT</h1>
            <div className="health" >{health}</div>
        </StyledNav>
    )
}

Nav.propTypes = {
    health: PropTypes.arrayOf(PropTypes.element).isRequired,
    loseHealthTest: PropTypes.func.isRequired,
}