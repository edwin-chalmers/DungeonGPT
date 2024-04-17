import styled from 'styled-components'

export const StyledChatLog = styled.div`
    --main-color: #8BE8D7;
    --secondary-color: #39615A;
    --background-color: #283134;

    /* border: 1px solid red;
    box-sizing: border-box; */
    width: 820px;
    height: 70vh;
    flex-grow: 1;
    overflow-y: auto;
    padding: 0 25px;

    .chat-message {
        display: flex;
        align-items: flex-start;
    }

    img {
        width: 30px;
        margin: 10px 10px 0 0;
    }

    button {
        margin: 0 10px;
        border: none;
        padding: 6px 12px;
        border-radius: 6px;
        color: var(--background-color);
        background-color: var(--secondary-color);
        
        &:hover {
            background-color: var(--main-color);
        }
    }
`