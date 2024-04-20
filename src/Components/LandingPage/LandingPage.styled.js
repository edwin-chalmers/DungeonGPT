import styled from 'styled-components'

export const StyledLandingPage = styled.div`
    --main-color: #8BE8D7;
    --secondary-color: #39615A;
    --background-color: #283134;

    color: var(--main-color);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;

    h1 {
        font-size: larger;
    }

    div {
        margin-left: 30px;
    }

    p {
        max-width: 600px;
        margin: 15px 30px;
    }

    #stepForward {
        margin: 20px;
        border: none;
        padding: 6px 12px;
        border-radius: 6px;
        text-decoration: none;
        color: var(--background-color);
        background-color: var(--secondary-color);
        font-size: small;

        &:hover {
            background-color: var(--main-color);
        }
    }

    @media (max-width: 425px) {

        div {
        margin-left: 20px;
        }
    }
`