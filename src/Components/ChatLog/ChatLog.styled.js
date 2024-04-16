import styled from 'styled-components'

export const StyledChatLog = styled.div`
    /* border: 1px solid red;
    box-sizing: border-box; */
    width: 820px;
    height: 550px;
    /* flex-grow: 1; */
    overflow-y: auto;
    padding: 0 25px 0 25px;

    .chat-message {
        display: flex;
        align-items: flex-start;
        margin-bottom: 20px;

    }

    html {
        scrollbar-width: thin;
        scrollbar-color: rgba(0,0,0,0);
    }
`