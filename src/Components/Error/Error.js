import { StyledError } from './Error.styled.js'
import { Link } from 'react-router-dom'

export default function Error() {
  
    return (
        <StyledError>
            <h1>Dungeon404</h1>
                <div>
                    <p>
                    Lost amidst the tangled paths of cyberspace, you have wandered into a realm where few are meant to tread. Here, in the shadowed corridors of an error-laden wasteland, the digital winds whisper of misdirection and the broken links of a thousand lost souls. 
                    </p>
                    <p>
                    This is a place untouched by the light of successful navigation, where the echo of '404' haunts the air. Fear not, brave traveler, for all is not lost. Retrace your steps and summon the magic of your browser's might. 
                    </p>
                    <p>
                    Your journey awaits—let not this minor misstep deter your quest. Your saga to return home begins with a single click. 
                    </p>
                </div>
            <Link id='beginAgain' to='/play'>Begin Again</Link>
        </StyledError>
    )
}